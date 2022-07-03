import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import DefaultLayout from '../../containers/layout/Layout';

export default function AdminRoute() {

    const { isLogin, user } = useSelector((state) => state?.auth);
      
    return isLogin && user &&
   user?.role===1 ? (
    <DefaultLayout>
     <Outlet />
    </DefaultLayout>
   ) : (
    <Navigate to="/login" />
   );
   }