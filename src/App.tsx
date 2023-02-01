import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TokenProvider from './context/token/TokenProvider';
import NotFoundPage from './pages/not_found/NotFoundPage';
import Authorized from './pages/redirect/Authorized';
import UnAuthorized from './pages/redirect/UnAuthorized';
import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import TodoPage from './pages/todo/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route element={<UnAuthorized />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          <Route element={<Authorized />}>
            <Route path="/" element={<TodoPage />} />
            <Route path="/todo" element={<TodoPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
