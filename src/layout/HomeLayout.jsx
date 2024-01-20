import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Navbar/NavBar';
import { Footer } from '../components/Footer/Footer';

const HomeLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default HomeLayout;
