import { useState } from 'react';

import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import FormSubmit from './FormSubmit';
import { auth } from '../firebase';
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/user/user';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);

  const fName = register('fName', {
    required: true,
  });
  const lName = register('lName', {
    required: true,
  });
  const email = register('email', {
    required: true,
  });
  const password = register('password', {
    required: true,
  });

  const dispatch = useAppDispatch();

  const onSubmit = async ({
    fName,
    lName,
    email,
    password,
  }: {
    fName?: string;
    lName?: string;
    email?: string;
    password?: string;
  }) => {
    try {
      if (fName && lName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: fName + ' ' + lName,
          });
        }
        dispatch(
          login({
            displayName: fName + ' ' + lName,
            email: user.email,
            uid: user.uid,
          })
        );
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div
      className="flex flex-col border border-gray-100 sm:shadow-lg rounded-xl
    max-w-[500px] h-[500px]  sm:h-[700px] mb-5"
    >
      <div className="py-0 px-5 sm:p-[56px]">
        <form onSubmit={handleSubmit(onSubmit)} className="relative w-full">
          <h4 className="mb-2 text-[19px] text-black/[.87]">
            Personal Information
          </h4>
          <div className="relative mb-2">
            <TextField
              label="First name"
              type="text"
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className="w-full"
              {...fName}
            />
            {errors.fName && (
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

                <span>Enter your first name.</span>
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
          <div className="relative mb-2">
            <TextField
              label="Last name"
              type="text"
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className="w-full"
              {...lName}
            />
            {errors.lName && (
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

                <span>Enter your last name.</span>
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
          <h4 className="mb-2 text-[19px] text-black/[.87] mt-12">
            Account Security
          </h4>
          <div className="relative mb-2">
            <TextField
              label="Email Address"
              type="email"
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className="w-full"
              {...email}
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

          <div className="relative mb-2">
            <TextField
              label="Password"
              type={passwordShown ? 'text' : 'password'}
              InputLabelProps={{
                style: { color: 'rgba(0,0,0,.56)' },
              }}
              InputProps={{ style: { fontWeight: '800' } }}
              className="w-full"
              {...password}
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
          <h4 className="text-black/[.56] text-sm my-6 mx-0">
            COLLECT MORE STARS & EARN REWARDS
          </h4>
          <span className="text-black/[.87] font-semibold leading-[1.5]">
            Email is a great way to know about offers and what’s new from
            Starbucks.
          </span>
          <FormSubmit
            name="Create account"
            className="mt-[50px] absolute right-0"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
