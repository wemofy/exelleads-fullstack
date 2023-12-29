import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';
import Signup from '../components/auth/Signup';

const SignupPage = () => {
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
      <div className=" mt-4" >
       
      </div>
      <Signup />
    </div>
  );
};

export default SignupPage;
