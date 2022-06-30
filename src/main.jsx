import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StoreProvider from './app/store'
import './grid.css'
import './index.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
<StoreProvider>
  <App />
</StoreProvider>
  
)
