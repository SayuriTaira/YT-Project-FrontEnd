import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/header'
import Menu from './components/menu'
import Home from './pages/home'
import Library from './pages/library'
import History from './pages/history'
import { useContext } from 'react'
import { MenuContexts } from './contexts/menuContexts'
import { UserStorage } from './contexts/userContext'
import Login from './pages/login'

function App() {
  const { openMenu } = useContext(MenuContexts);
  const location = useLocation()

  let isLoginRoute = location.pathname === '/login'

  return (
    <>
      {!isLoginRoute && <Header></Header>}
      <div style={{width: '100%', display: 'flex'}}>
        {!isLoginRoute && <Menu></Menu>}
        <div style={{width: '100%', marginTop: !isLoginRoute ? '55px' : '0', overflow: 'hidden'}}>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/library' element={<Library></Library>}></Route>
            <Route path='/history' element={<History></History>}></Route>
            <Route path='/login' element={<Login></Login>}></Route> 
          </Routes>
        </div>
      </div>    
    </>
  )
}

export default App
