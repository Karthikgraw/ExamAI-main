import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // If userInfo is not available, redirect to login
  return userInfo ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
