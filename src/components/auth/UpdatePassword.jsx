import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import { updatePasswordSchema } from '../../validations/inputValidation';
import { updatePassword } from '../../redux/reducers/updatePasswordSlice';
import Button from '../Button';

const ChangePassword = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.updatePassword);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(updatePasswordSchema) });
  const onSubmit = async (userData) => {
    try {
      const response = await dispatch(updatePassword(userData)).unwrap();
      navigate('/profile');
      showSuccessMessage(response.message);
      reset();
    } catch (error) {
      showErrorMessage(error.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <main className="w-full max-w-md mx-auto p-6 -mt-[650px]">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Update Password
              </h1>
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
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="password"
                        placeholder="Enter your current password"
                        required
                        {...register('currentPassword')}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      />
                      <div
                        className=" text-xs text-red-600 mt-2"
                        id="confirm-name-error"
                      >
                        {errors.currentPassword && (
                          <p>{errors.currentPassword.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your new password"
                        required
                        {...register('newPassword')}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      />
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      {errors.newPassword && (
                        <p>{errors.newPassword.message}</p>
                      )}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type="password"
                        placeholder="Enter your new password"
                        required
                        {...register('confirmPassword')}
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      />
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      {errors.confirmPassword && (
                        <p>{errors.confirmPassword.message}</p>
                      )}
                    </p>
                  </div>
                  {/* End Form Group */}

                  <div className="flex items-center mt-10">
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
                        Change password
                      </button>
                    )}
                  </div>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ChangePassword;
