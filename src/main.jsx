import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mobile from './mobile/Mobile.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {window.innerWidth>768? <App/> : <Mobile/>}
    {/* <App /> */}
  </React.StrictMode>,
)
