import { Link } from 'react-router-dom';

const SignUpButton = () => {
  return (
    <Link
      to="/account/create"
      className="inline-block
  border border-black rounded-[50px] py-[7px] px-4 font-bold leading-[1.2] text-center
  decoration-none transition-all duration-200 ease-linear bg-black text-white
 text-sm hover:border-black/[0.7] hover:bg-black/[0.7]"
    >
      Sign Up
    </Link>
  );
};

export default SignUpButton;
