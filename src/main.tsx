import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app/App.tsx'
import './index.css'
import Login from './auth/Login.tsx'
import IsAuth from './guards/IsAuth.tsx'
import AuthGuard from './guards/AuthGuard.tsx'
import { AuthContextProvider } from './providers/AuthProvider.tsx'
import { MainContextProvider } from './providers/MainProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <AuthContextProvider>
      <MainContextProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<IsAuth />} >
              <Route path="/" element={<Login />} />
            </Route>

            <Route element={<AuthGuard />} >
              <Route path="/game/*" element={<App />} />
            </Route>

            <Route path="*" element={<div>404</div>} />

          </Routes>
        </BrowserRouter>
      </MainContextProvider>
    </AuthContextProvider>
  </React.Fragment>,
)
