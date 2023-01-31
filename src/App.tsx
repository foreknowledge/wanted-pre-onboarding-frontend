import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TokenProvider from './context/token/TokenProvider';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/" element={<TodoPage />} />
          <Route path="/todo" element={<TodoPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
