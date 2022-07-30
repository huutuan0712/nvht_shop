import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import RegisterForm from './pages/auth/register/RegisterForm'
import LoginForm from './pages/auth/login/LoginForm'
import Home from './pages/client/home/Home'
import Dashboad from './pages/admin/Dashboad'
import NotFound from './error/NotFound'
import ClientRoute from './components/PraviteRoute/ClientRoute'
import ProductWrapper from './pages/admin/product/ProductWrapper'
import AdminRoute from './components/PraviteRoute/AdminRoute'
import ProductDetail from './pages/client/Home/product-detail/ProductDetail'
import ProductCategory from './pages/client/Home/product-category/ProductCategory'
import Cart from './pages/client/cart/Cart'
import Compose from './containers/compose/Compose'
import CartAdmin from './pages/admin/cart/CartAdmin'
import CartManagement from './pages/client/cart-management/CartManagement'


function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
        <Compose>
            <Routes>
                       {/* CLIENT */}
                <Route path="/" element={<ClientRoute/>}>
                  <Route index element={<Home />} />
                  <Route path="product">
                    <Route path="detail/:id" element={<ProductDetail/>} />
                    <Route path="category/:path" element={<ProductCategory />} />
                  </Route>
                  <Route path="cart"  element={<Cart />}/>
                  <Route path="cart">
                  <Route path={"my-cart"} element={<CartManagement />} />
                  </Route>
                </Route>
              {/* ADMIN */}
              <Route path="admin" element={<AdminRoute />}>
                <Route index element={<Dashboad />} />
                <Route path="cart" element={<CartAdmin />} />
                <Route path="product" element={<ProductWrapper />}/>
              </Route>
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </Compose>
        </BrowserRouter>
        
    </div>
  )
}

export default App
