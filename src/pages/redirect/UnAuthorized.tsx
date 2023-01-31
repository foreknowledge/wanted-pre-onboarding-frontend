import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import TokenContext from '../../context/token/TokenContext';

const UnAuthorized = () => {
  const { token } = useContext(TokenContext);

  if (token !== null) return <Navigate to="/todo" />;

  return <Outlet />;
};

export default UnAuthorized;
