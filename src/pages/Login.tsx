import { TextField } from '@material-ui/core';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { useAppDispatch } from '../app/hooks';
import { login } from '../features/user/user';
import { FormSubmit, FooterSecondary } from '../components';

function LoginScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);

  const email = register('email', {
    required: true,
  });
  const password = register('password', {
    required: true,
  });

  const dispatch = useAppDispatch();

  const onSubmit = async ({
    email,
    password,
  }: {
    email?: string;
    password?: string;
  }) => {
    if (email && password) {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row font-primary">
      <div
        className="relative flex items-center justify-center w-full h-[150px] gap-[10px] md:fixed
      md:top-0 md:bottom-0 md:left-0 overflow-hidden md:w-[40vw]
      md:flex md:flex-col md:h-[100vh] md:shadow-lg"
      >
        <Link to="/" className=" md:pl-0 pt-0 md:pt-5">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
            className="object-contain h-[50px] w-full"
          />
        </Link>
        <div
          className="inline pl-[40px] md:w-full md:h-full md:pl-0 md:flex items-center justify-center
        text-black/[.87]"
        >
          <h1 className="font-extrabold">Sign in or create an account 🌟</h1>
        </div>
      </div>
      <div
        className="overflow-scroll flex flex-col items-center justify-center
       ml-0 md:ml-[40vw] flex-1 bg-[#f7f7f7] py-5 px-0"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col min-w-[300px] min-h-[420px] gap-5 pb-10 px-0 pt-[60px]"
        >
          <div className="relative">
            <TextField
              // name="email"
              label="Email Address"
              type="email"
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className="w-full"
              {...email}
              // inputRef={email.ref}
            />
            {errors.email && (
              <div className="mt-[5px] flex items-center gap-[5px] text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#e75b52]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>

                <span>Enter an email.</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#e75b52] absolute right-0 top-0 translate-y-[80%]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="relative">
            <TextField
              // name="password"
              label="Password"
              type={passwordShown ? 'text' : 'password'}
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className="w-full"
              {...password}
              // inputRef={password}
            />
            {passwordShown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-gray-500 absolute top-0 right-[10%]
                translate-y-[80%]"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-gray-500 absolute top-0 right-[10%]
                translate-y-[80%]"
                onClick={() => setPasswordShown(!passwordShown)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
            {errors.password && (
              <div className="mt-[5px] flex items-center gap-[5px] text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#e75b52]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Enter an password.</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-[#e75b52] absolute right-0 top-0 translate-y-[80%]"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
          <div className="mt-5">
            <Link
              to="/"
              className="block mb-4 underline text-[#00653e] font-semibold
            text-[15px] hover:no-underline"
            >
              Forgot your username?
            </Link>
            <Link
              to="/"
              className="block mb-4 underline text-[#00653e] font-semibold
            text-[15px] hover:no-underline"
            >
              Forgot your password?
            </Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>
        <div
          className="text-center w-full py-5 px-0 bg-[#2d2926]
        text-white"
        >
          <h4 className="text-sm font-extrabold tracking-[1.4px]">
            JOIN STARBUCKS® REWARDS
          </h4>
        </div>
        <div className="bg-[#edebe9] w-full py-[30px] px-0">
          <div className="max-w-[300px] mx-auto flex flex-col gap-5">
            <Link
              to="/account/create"
              className="bg-none border border-black rounded-[50px]
            py-[7px] px-4 font-semibold leading-[1.2] text-center
            transition duration-200 text-black/[.87] mr-auto hover:bg-black/[0.06]"
            >
              Join now
            </Link>
            <h4 className="text-[20px] font-semibold text-black/[.87]">
              Create an account and bring on the Rewards!
            </h4>
            <p className="text-sm font-semibold leading-[1.6]">
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
}

export default LoginScreen;
