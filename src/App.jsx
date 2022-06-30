import { BrowserRouter ,Routes,Route} from 'react-router-dom'


import PraviteRoute from './components/PraviteRoute/AdminRoute'
import Home from './pages/client/Home/Home'
import Dashboad from './pages/admin/Dashboad'
import NotFound from './error/NotFound'
import LoginForm from './pages/auth/login/LoginForm'
import RegisterForm from './pages/auth/register/RegisterForm'
import ClientRoute from './components/PraviteRoute/ClientRoute'
import AdminRoute from './components/PraviteRoute/AdminRoute'
function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                       {/* CLIENT */}
          <Route path='/' element={<ClientRoute/>}>
              <Route index element={<Home />} />
          </Route>
          {/* <Route path={'product-detail/:id'} element={<ProductDetail />} /> */}

          {/* ADMIN */}
          <Route path='/admin' element={<AdminRoute />}>
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
