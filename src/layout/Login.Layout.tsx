import { RootState } from '@redux/config/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const LoginLayout = () => {
  const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return isAuth ? <Navigate to="/" /> : <div>Login Layout</div>;
}

export default LoginLayout