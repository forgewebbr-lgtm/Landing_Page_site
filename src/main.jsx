import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/base.css'
import './styles/components.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/animations.css'
import './styles/responsive.css'
import './styles/mobile-v7.css'
import './styles/tablet.css'
import { initializeTracking } from './lib/tracking'
import { startWebVitals } from './lib/webVitals'

document.documentElement.dataset.revealVersion = '7'

initializeTracking()
startWebVitals()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)