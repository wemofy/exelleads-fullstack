import React, { useEffect } from 'react';
import Login from '../components/auth/Login';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';

const LoginPage = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const navigate = useNavigate();
  const info = getUserInfo();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [isAuthenticated]);
  return (
    <div className="w-screen font-sans text-gray-900">
      <div className="-mt-16">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20"></div>
        </div>
      </div>
      <Login />
    </div>
  );
};

export default LoginPage;
