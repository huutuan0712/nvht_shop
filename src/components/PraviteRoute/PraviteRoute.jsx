import {useSelector} from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import DefaultLayout from '../../containers/layout/Layout';
export default function PraviteRoute() {

    const { isLogin, user } = useSelector((state) => state?.auth);
      
    if(isLogin && user){
        return user?.role === 1 ? (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>)
        :( <Navigate to="/" /> );
    }else
    return <Navigate to="/login" />
   }