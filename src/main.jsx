import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter



const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '80px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
