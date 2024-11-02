import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/header'
import Menu from './components/menu'
import Home from './pages/home'
import Library from './pages/library'
import History from './pages/history'
import Login from './pages/login'
import SignUp from './pages/signUp'
import Search from './pages/search'
import YourVideos from './pages/yourVideos'

function App() {
  const location = useLocation()

  let isLoginRoute = location.pathname === '/login'
  let isSignUpRoute = location.pathname === '/signUp'

  return (
    <>
      {(!isLoginRoute && !isSignUpRoute) && <Header></Header>}
      <div style={{width: '100%', display: 'flex'}}>
        {(!isLoginRoute && !isSignUpRoute) && <Menu></Menu>}
        <div style={{width: '100%', marginTop: !isLoginRoute && !isSignUpRoute ? '55px' : '0', overflow: 'hidden'}}>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/library' element={<Library></Library>}></Route>
            <Route path='/history' element={<History></History>}></Route>
            <Route path='/login' element={<Login></Login>}></Route> 
            <Route path='/signUp' element={<SignUp></SignUp>}></Route>
            <Route path='/search' element={<Search></Search>}></Route>
            <Route path='/yourVideos' element={<YourVideos></YourVideos>}></Route>
          </Routes>
        </div>
      </div>    
    </>
  )
}

export default App
