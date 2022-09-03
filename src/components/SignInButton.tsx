import { Link } from 'react-router-dom';

const SignInButton = () => {
  return (
    <Link
      to="/account/signin"
      className="inline-block
  border border-black rounded-[50px] py-[7px] px-4 font-bold leading-[1.2] text-center
  decoration-none transition-all duration-200 ease-linear bg-none
  text-black/[0.87] text-sm hover:bg-black/[0.06]"
    >
      Sign In
    </Link>
  );
};

export default SignInButton;
