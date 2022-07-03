import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import DefaultLayout from '../../containers/layout/Layout';
import ROLE from '../../features/auth/auth.model';
export default function AdminRoute() {

    const { isLogin, user } = useSelector((state) => state?.auth);
      
    return isLogin && user &&
    [ROLE.type.ADMIN,ROLE.type.USER].includes(user?.role) ? (
    <DefaultLayout>
     <Outlet />
    </DefaultLayout>
   ) : (
    <Navigate to="/login" />
   );
   }