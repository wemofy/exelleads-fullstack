import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Navbar/NavBar';
import AdminSideBar from '../components/Admin/AdminSideBar';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const AdminLayout = () => {
  return (
    <div>
         <ToastContainer />
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
