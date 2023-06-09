import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './assets/index.css'
import AuthProvider from './contexts/AuthProvider'
import Routes from './routes/Routes'
const qClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={qClient}>
        <RouterProvider router={Routes} />
      </QueryClientProvider>
    </AuthProvider>
    <ToastContainer theme="dark" />
  </React.StrictMode>
)
