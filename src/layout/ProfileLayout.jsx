import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Navbar/NavBar';
import Sidebar from '../components/Profile/Sidebar';

const ProfileLayout = () => {
  return (
    <div>
      <NavBar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
