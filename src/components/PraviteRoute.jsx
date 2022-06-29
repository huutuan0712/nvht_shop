import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
export default function PraviteRoute() {

    const { isLogin, user } = useSelector((state) => state?.auth);
      
    if(isLogin && user){
        return user?.role === 1 ? ( <Navigate to="/admin" /> ) : ( <Outlet/>);
    }else
    return <Navigate to="/login" />
   }