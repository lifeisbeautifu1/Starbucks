import { Link } from 'react-router-dom';

import { useAppSelector } from '../app/hooks';
import {
  Example,
  FindAStore,
  SignInButton,
  LogoutButton,
  SignUpButton,
} from './';

interface HeaderProps {
  menuPage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ menuPage }) => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div
      className={`h-[101px] shadow-custom flex items-center justify-between px-10 z-[2] bg-white ${
        menuPage && 'inherit md:fixed left-0 top-0 w-[95%]'
      }`}
    >
      <div className="flex items-center gap-5">
        <Link to="/" className="mr-5">
          <img
            className="contain h-[50px]"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="logo"
          />
        </Link>
        <Link
          to="/menu"
          className="font-extrabold tracking-[1.4px] opacity-[.87] text-sm uppercase transition duration-100 hover:text-[#008248] hidden md:block"
        >
          Menu
        </Link>
        <Link
          to="/"
          className="font-extrabold tracking-[1.4px] opacity-[.87] text-sm uppercase transition duration-100 hover:text-[#008248] hidden md:block"
        >
          Rewards
        </Link>
        <Link
          to="/"
          className="font-extrabold tracking-[1.4px] opacity-[.87] text-sm uppercase transition duration-100 hover:text-[#008248] hidden md:block"
        >
          Gift Cards
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Example />
        <div className="hidden md:flex items-center gap-5">
          <FindAStore />
          {user ? (
            <>
              <LogoutButton />
            </>
          ) : (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
