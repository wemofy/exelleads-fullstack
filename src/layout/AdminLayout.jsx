import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Navbar/NavBar';
import AdminSideBar from '../components/Admin/AdminSideBar';

const AdminLayout = () => {
  return (
    <div>
      <NavBar />
      <div className=''>
     
      <main className='flex h-full'>
      <AdminSideBar/>
        <Outlet />
      </main>
      </div>
    </div>
  );
};

export default AdminLayout;
