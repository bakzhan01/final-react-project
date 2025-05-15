import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MountainProvider } from './components/MountainContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MountainProvider>
      <App />
    </MountainProvider>  
  </BrowserRouter>
)
