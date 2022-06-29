
import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { setLogOut } from '../features/auth/auth.slice';
import {useNavigate,Navigate} from 'react-router-dom'
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