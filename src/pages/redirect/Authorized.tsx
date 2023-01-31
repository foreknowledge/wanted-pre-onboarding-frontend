import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TokenContext from '../../context/token/TokenContext';

const Authorized = () => {
  const { token } = useContext(TokenContext);

  if (token === null) return <Navigate to="/signin" />;

  return <Outlet />;
};

export default Authorized;
