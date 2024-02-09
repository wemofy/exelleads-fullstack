import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import { registerSchema } from '../../validations/inputValidation';
import { signup } from '../../redux/reducers/signupSlice';
import InputField from './InputField';
import Button from '../Button';

const Signup = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.signup);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = async (userData) => {
    try {
      const response = await dispatch(signup(userData)).unwrap();
      showSuccessMessage('Successfully Registered, please verify your email, Do check in your spams for verification email');
      navigate('/auth/login');
    } catch (error) {
      showErrorMessage(error.data.message);
      console.log(error);
    }
  };

  return (
    <>
     

      <div className="relative">
  <img
    src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    className="absolute inset-0 object-cover w-full h-full"
    alt=""
  />
  <div className="relative bg-gray-900 bg-opacity-75">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between xl:flex-row">
        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          Empowering Businesses with Unlimited Leads
 <br className="hidden md:block" />
            at <span className="text-deep-purple-accent-700">Exelleads</span>
          </h2>
          <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
          <li>Get full business name with contact number</li>
          <li>Direct Leads with respective website links  </li>
          <li>Free 5 Leads for 7 Days</li>
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-deep-purple-accent-700 hover:text-teal-accent-700"
          >
            Learn more
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
          {/* <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
              Sign up for updates
            </h3>
            <form>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="firstName"
                  className="inline-block mb-1 font-medium"
                >
                  First name
                </label>
                <input
                  placeholder="John"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="lastName"
                  className="inline-block mb-1 font-medium"
                >
                  Last name
                </label>
                <input
                  placeholder="Doe"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="lastName"
                  name="lastName"
                />
              </div>
              <div className="mb-1 sm:mb-2">
                <label
                  htmlFor="email"
                  className="inline-block mb-1 font-medium"
                >
                  E-mail
                </label>
                <input
                  placeholder="john.doe@example.org"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                />
              </div>
              <div className="mt-4 mb-2 sm:mb-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 sm:text-sm">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div> */}
           <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-x-4">
                Already have an account?
                <Link
                  className="text-deep-purple-accent-700 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 block"
                  to="/auth/login"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form
                onSubmit={(event) => {
                  handleSubmit(onSubmit)(event);
                }}
              >
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        {...register('name')}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      />
                      <div
                        className=" text-xs text-red-600 mt-2"
                        id="confirm-name-error"
                      >
                        {errors.name && <p>{errors.name.message}</p>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="email"
                        required
                        {...register('email')}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      />
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      {errors.email && <p>{errors.email.message}</p>}
                    </p>
                  </div>
                  <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  <div>
                    <InputField
                      placeholder="***********"
                      type="password"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      {...register('password')}
                      error={errors?.password}
                      />

<div className='flex flex-col text-red-500 text-[10px] mt-0'>
  <span className='text-[1rem] text-black font-semibold '>Password Conditions</span>
Password must be at least 8 characters <br/>
   Password must contain at least one uppercase character<br/>
    Password must contain at least one numeric characte <br/>
    Password is required
  </div>


                  </div>

                  {/* Checkbox */}
                  <div className="mb-6">
                    <label className="mb-2 flex text-sm">
                      <input
                        type="checkbox"
                        name="accept"
                        className="mr-2"
                        required
                      />
                      <div className="text-gray-800">
                        <p className="">
                          I accept the
                          <a
                            href="/terms"
                            className="cursor-pointer text-red-500 m-1 "
                          >
                            Terms of use
                          </a>
                          and
                          <a
                            href="/privacy"
                            className="cursor-pointer text-red-500 m-1"
                          >
                            privacy policy
                          </a>
                        </p>
                      </div>
                    </label>
                  </div>
                  {/* End Checkbox */}
                  <div className="flex items-center">
                    <div className="flex-1"></div>
                    {isLoading ? (
                      <>
                        <button
                          type="submit"
                          disabled={true}
                          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-deep-purple-accent-700 text-white hover:bg-deep-purple-accent-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <svg
                            role="status"
                            className="w-full inline mr-3 h-4 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </>
                    ) : (
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-deep-purple-accent-700 text-white hover:bg-deep-purple-accent-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        Sign up
                      </button>
                    )}
                  </div>
                  <div></div>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Signup;
