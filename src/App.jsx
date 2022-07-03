import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import RegisterForm from './pages/auth/register/RegisterForm'
import LoginForm from './pages/auth/login/LoginForm'
import PraviteRoute from './components/PraviteRoute/PraviteRoute'
import Home from './pages/client/home/Home'
import Dashboad from './pages/admin/Dashboad'
import NotFound from './error/NotFound'
import ClientRoute from './components/PraviteRoute/ClientRoute'
import ProductWrapper from './pages/admin/product/ProductWrapper'
import Category from './pages/admin/product/category/Category'
function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                       {/* CLIENT */}
          <Route path="/" element={<ClientRoute/>}>
             <Route index element={<Home />} />
          </Route>
          {/* <Route path={'product-detail/:id'} element={<ProductDetail />} /> */}

          {/* ADMIN */}
          <Route path="admin" element={<PraviteRoute />}>
            <Route index element={<Dashboad />} />
            {/* {/* <Route path={'user'} element={<UserManagement />} /> */}
            <Route path="product" element={<Category />} /> 
          </Route>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
            </Routes>

       
      
        </BrowserRouter>
        
    </div>
  )
}

export default App
