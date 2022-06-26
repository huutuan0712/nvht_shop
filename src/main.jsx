import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StoreProvider from './app/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<StoreProvider>
  <App />
</StoreProvider>
  
)
