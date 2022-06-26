import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import './App.css'
import Profile from './components/auth/Profile'
import LoginForm from './components/login/LoginForm'
import PraviteRoute from './components/PraviteRoute'
import Home from './pages/Home'

function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                
                <Route path='/login' element= {<LoginForm/>}/>
                <Route path="/" element={<PraviteRoute />}>
                  <Route index element= {<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
