import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';
import SearchCard from './searchCard/searchCard';
import TuteCard from './TuteCard/TuteCard';

const Home = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  const navigate = useNavigate();
  const info = getUserInfo();

  useEffect(() => {
    if (!info) {
      navigate('/auth/login');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <div className="w-full flex flex-col-reverse sm:flex-row">
        <div className="sm:px-12 w-full sm:mt-0 mt-12">
          <SearchCard />
        </div>
        <div className="h-44 w-full mt-4">
          <TuteCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
