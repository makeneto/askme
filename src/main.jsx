import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import GlobalStyles from './css/globalStyles.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
