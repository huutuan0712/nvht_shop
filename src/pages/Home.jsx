import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { setLogOut } from '../features/auth/auth.slice';
import {useNavigate,Navigate} from 'react-router-dom'
function Home() {
  const dispatch = useDispatch();
  const {isLogin} = useSelector(state => state.auth)
  const navigate = useNavigate()
  // useEffect(() => {
  //     if(!isLogin){
  //       navigate('/login')
  //     }
  //   }, [isLogin])
  return (
    <div>Home
      <button onClick={()=>dispatch(setLogOut())}>Logout</button>
    </div>
  )
}

export default Home