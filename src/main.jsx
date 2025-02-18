import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { appRouter } from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={appRouter}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
