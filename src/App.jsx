import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css'
import RegisterForm from './components/auth/register/RegisterForm'
import LoginForm from './components/auth/login/LoginForm'
import PraviteRoute from './components/PraviteRoute'
import Home from './pages/Home'
import Dashboad from './pages/Dashboad'
import NotFound from './error/NotFound'
function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                       {/* CLIENT */}
          <Route index element={<Home />} />
          {/* <Route path={'product-detail/:id'} element={<ProductDetail />} /> */}

          {/* ADMIN */}
          <Route path='/admin' element={<PraviteRoute />}>
            <Route index element={<Dashboad />} />
            {/* <Route path={'user'} element={<UserManagement />} />
            <Route path={'product'} element={<ProductManagement />} /> */}
          </Route>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />

          <Route path='*' element={<NotFound />} />
            </Routes>

       
      
        </BrowserRouter>
        
    </div>
  )
}

export default App
