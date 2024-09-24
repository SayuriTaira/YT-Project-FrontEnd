import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MenuStore } from './contexts/menuContexts.tsx'
import { UserStorage } from './contexts/userContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserStorage>
        <MenuStore>
          <App />
        </MenuStore>
      </UserStorage>
    </BrowserRouter>
  </React.StrictMode>,
)
