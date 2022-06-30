import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import useLogOut from '../../../containers/auth/useLogOut'
import { setLogOut } from '../../../features/auth/auth.slice';
import Banner from './banner/Banner';

function Home() {
  const {fetchLogOut} = useLogOut()
  const dispatch = useDispatch();
  return (
    // <Banner/>
    <div>Home
      <button onClick={()=>fetchLogOut()}>Logout</button>
      <button onClick={()=>dispatch(setLogOut())}>Logout</button>
    </div>
  )
}

export default Home