import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Login } from './pages';
import { useAppSelector } from './app/hooks';

function App() {
  const { user } = useAppSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/account/signin"
        element={user ? <Navigate to="/menu" /> : <Login />}
      />
    </Routes>
  );
}

export default App;
