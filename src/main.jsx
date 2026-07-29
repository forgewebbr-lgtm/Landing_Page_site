import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/base.css'
import './styles/components.css'
import './styles/sections.css'
import './styles/responsive.css'
import { initializeTracking } from './lib/tracking'
import { startWebVitals } from './lib/webVitals'

initializeTracking()
startWebVitals()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)