import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Index from './routes/Index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Index></Index>
  </BrowserRouter>
)
