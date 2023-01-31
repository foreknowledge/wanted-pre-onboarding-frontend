import { ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TokenContext from './TokenContext';

const AUTH_TOKEN_KEY = 'authToken';

const TokenProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem(AUTH_TOKEN_KEY);

  const saveToken = useCallback(
    (token: string) => {
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      navigate('/todo');
    },
    [navigate]
  );

  const clearToken = useCallback(() => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    navigate('/signin');
  }, [navigate]);

  return (
    <TokenContext.Provider value={{ token, saveToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
