import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css'
import RegisterForm from './components/auth/register/RegisterForm'
import LoginForm from './components/auth/login/LoginForm'
import PraviteRoute from './components/PraviteRoute'
import Home from './pages/Home'
import Dashboad from './pages/Dashboad'
function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/register' element= {<RegisterForm/>}/>
                <Route path='/login' element= {<LoginForm/>}/>
                <Route path="/" element={<PraviteRoute />}>
                <Route index element= {<Home/>}/>
                </Route>

                {/* ADMIN */}
                <Route path='/admin' element= {<Dashboad/>}/>
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
