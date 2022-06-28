import React from 'react'
import {useDispatch} from 'react-redux'
import { setLogOut } from '../features/auth/auth.slice';


function Dashboad() {
  const dispatch = useDispatch();
  // const {isLogin} = useSelector(state => state.auth)
  // const navigate = useNavigate()
  return (
    <div>Dashboad
    <button onClick={()=>dispatch(setLogOut())}>Logout</button>
  </div>
  )
}

export default Dashboad