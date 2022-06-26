import {useDispatch,useSelector} from 'react-redux'
import {useNavigate,Navigate, Outlet} from 'react-router-dom'
export default function PraviteRoute() {

    const { isLogin, user } = useSelector(
     (state) => state?.auth
    );
   
    return isLogin ? (
    
      <Outlet />
     
    ) : (
     <Navigate to="/login" />
    );
   }