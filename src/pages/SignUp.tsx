import { Link } from 'react-router-dom';

import { SignupForm, FooterSecondary } from '../components';

function SignupScreen() {
  return (
    <div className="flex flex-col items-center justify-center gap-[30px] sm:gap-10">
      <div className="bg-white shadow w-full h-[101px] flex items-center">
        <Link to="/" className="block px-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
            className="h-[50px] object-contain"
          />
        </Link>
      </div>
      <h1 className="text-black/[.87] mr-auto sm:mr-0  p-0 px-5 sp:p-0 text-[24px] font-extrabold sm:text-[28px]">
        Create an account
      </h1>
      <div className="text-left sm:text-center py-0 px-5 sm:p-0">
        <h4
          className="text-black/[.56] tracking-[1.4px]
        font-extrabold text-sm mb-5 hidden sm:block"
        >
          STARBUCKS® REWARDS
        </h4>
        <p
          className="text-black/[.56] leading-[1.5] max-w-[500px]
        font-semibold text-sm"
        >
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{' '}
          <Link
            to="/"
            className="text-black/[.56] underline hover:no-underline"
          >
            more
          </Link>
          .
        </p>
      </div>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  );
}

export default SignupScreen;
