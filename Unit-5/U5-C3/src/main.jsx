import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { NewContextProvider } from './context/NewContext'
import { TerminatedContextProvider } from './context/TerminatedContext'
import { PromotedContextProvider } from './context/PromotedContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <NewContextProvider>
        <TerminatedContextProvider>
          <PromotedContextProvider>
          <App />
          </PromotedContextProvider>
        </TerminatedContextProvider>
      </NewContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
