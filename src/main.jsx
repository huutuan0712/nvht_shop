import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StoreProvider from './app/store'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './index.scss'
import './grid.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
<StoreProvider>
  <App />
</StoreProvider>
  
)
