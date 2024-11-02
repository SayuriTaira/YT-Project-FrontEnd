import { createContext, useEffect, useState } from 'react';
import api from '../api'
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({} as any)

export const UserStorage = ({ children } : any) => {
    const [login, setLogin] = useState(true)
    const [user, setUser] = useState({})
    const [token, setToken] = useState(localStorage.getItem('token') as string)

    const navigate = useNavigate()

    const getUser = (token: string) => {
        api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
            setUser(data.user)
            setLogin(true)
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }

    const logOut = () => {
        localStorage.removeItem('token')
        setLogin(false)
        setUser({})
    }

    useEffect(() => {
        if(token) {
            getUser(token)
        }
    }, [token])

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await api.post('user/sign-in', { email, password })
            if (response.status === 200) {
                setLogin(true)
                localStorage.setItem('token', response.data.token)
                setToken(response.data.token)
                getUser(response.data.token)
                navigate('/')              
           }
        } catch (error: any) {
            if (error && error.response.status === 401) {
                alert(error.response.data.message)
            }
            if (error && error.response.status === 404) {
                alert(error.response.data.messsage)
            }
        }
    }

    const handleCreateUser= (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(({ data }) => {
        alert(data.message)
        handleLogin(email, password)
        }).catch((error) => {
            console.log('Não foi possível criar o usuário', error)
        })
    }

    return (
        <UserContext.Provider value={{login, user, handleLogin, logOut, handleCreateUser}}>
            {children}
        </UserContext.Provider>
    )
}