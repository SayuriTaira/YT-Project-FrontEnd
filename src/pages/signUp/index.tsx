import { Container, Content, TitleContainer, Title, Subtext, Icon, InputContainer, InputWrapper, InputLogin, LabelLogin, CheckboxContainer, CheckboxInput, ActionButton, PasswordContent, PasswordContainer} from "./styles"
import googleIcon from '../../assets/google.png'
import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../contexts/userContext"

function SignUp() {
    const { handleCreateUser } = useContext(UserContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [valid, setValid] = useState(false)
    
    const nameRef = useRef<HTMLInputElement>(null)

    const toggleShowPassword = (event: any) => {
        setShowPassword(event.target.checked)
    }

    const CreateUser = () => {
        if (name.trim() === '' && email === '' && password === '' && passwordConfirm === '') {
            setValid(false)
        } 
        if (email.includes(' ')) {
            setValid(false)
        }
        if (password.length < 8) {
            setValid(false)
        }
        if (password !== passwordConfirm) {
            setValid(false)

        } else {
            setValid(true)
            handleCreateUser(name, email, password)
        }
    }

    useEffect(() => {
        if(nameRef.current) {
            nameRef.current.focus()
        }
    },[])

    return (
        <Container>
            <Content>
                <TitleContainer>
                    <Icon src={googleIcon}></Icon>
                    <Title>Criar uma conta do Google</Title>
                    <Subtext>Insira seu nome</Subtext>
                </TitleContainer>

                <InputContainer>
                    <InputWrapper>
                        <InputLogin type="text" value={ name } placeholder="" id="inputName" ref={nameRef} onChange={(e) => setName(e.target.value)}></InputLogin>
                        <LabelLogin htmlFor="inputName">Nome Sobrenome</LabelLogin>
                    </InputWrapper>

                    <InputWrapper>
                        <InputLogin type="email" value={ email } placeholder="" id="inputEmail" onChange={(e) => setEmail(e.target.value)}></InputLogin>
                        <LabelLogin htmlFor="inputEmail">E-mail</LabelLogin>
                    </InputWrapper>

                    <PasswordContainer>
                        <PasswordContent>
                            <InputWrapper>
                                <InputLogin type= { showPassword ? 'text' : "password" } placeholder="" id="inputPassword" value={ password } onChange={(e) => setPassword(e.target.value)}></InputLogin>
                                <LabelLogin htmlFor="inputPassword">Digite sua senha</LabelLogin>
                            </InputWrapper>

                            <InputWrapper>
                                <InputLogin type= { showPassword ? 'text' : "password" } placeholder="" id="inputPasswordConfirm" value={ passwordConfirm } onChange={(e) => setPasswordConfirm(e.target.value)}></InputLogin>
                                <LabelLogin htmlFor="inputPasswordConfirm">Confirme sua senha</LabelLogin>
                            </InputWrapper>
                        </PasswordContent>

                        <CheckboxContainer>
                            <CheckboxInput type="checkbox" checked={ showPassword } id="showPassword" onChange={ toggleShowPassword }></CheckboxInput>
                            <label htmlFor="showPassword">Mostrar senha</label>
                        </CheckboxContainer>
                    </PasswordContainer>

                    <ActionButton onClick={() => CreateUser()}>Próxima</ActionButton>
                </InputContainer>
            </Content>
        </Container>
    )
}

export default SignUp