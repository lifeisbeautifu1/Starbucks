import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

import { useAppDispatch } from '../app/hooks';
import { logout } from '../features/user/user';
import { auth } from '../firebase';

const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const logoutOfApp = async () => {
    try {
      signOut(auth);
      dispatch(logout());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      className="font-primary inline-block border border-black
    rounded-[50px] py-[7px] px-4 font-bold leading-[1.2] text-center
    transition duration-200 cursor-pointer outline-none bg-none
    hover:bg-black/[.06]"
      onClick={logoutOfApp}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
