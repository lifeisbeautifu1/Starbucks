import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './app/hooks';

import { Header } from './components';
import { Home, Login, SignUp, Menu } from './pages';
import { login, logout } from './features/user/user';
import { auth } from './firebase';
import { useAppSelector } from './app/hooks';

function App() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/account/signin"
        element={user ? <Navigate to="/menu" /> : <Login />}
      />
      <Route
        path="/account/create"
        element={user ? <Navigate to="/menu" /> : <SignUp />}
      />
      <Route
        path="/menu"
        element={
          user ? (
            <>
              <Header menuPage />
              <Menu />
            </>
          ) : (
            <Login />
          )
        }
      />
    </Routes>
  );
}

export default App;
