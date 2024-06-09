import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setMessage('Password reset link sent to your email');
      setTimeout(() => navigate('/auth/login'), 3000); // Redirect to login page after 3 seconds
    }, 1000);
  };

  return (
    <main className="w-full max-w-md mx-auto p-6 mt-20">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forget Password
            </h1>
          </div>
          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Email Field */}
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
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-deep-purple-accent-700 text-white hover:bg-deep-purple-accent-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Send Reset Link
                  </button>
                </div>
                {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
              </div>
            </form>
            {/* End Form */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgetPassword;
