import React from 'react'
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
  return (
<>
    
  
  <link href="/dist/tailwind.css" rel="stylesheet" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
  />
  
  <div className="sidebar  top-20  lg:left-0 p-2 w-[300px] h-full text-center bg-gray-900">
   
   <div className='text-2xl font-semibold p-4 flex text-center text-white'>Admin Panel</div>
  <div className="my-4 bg-gray-600 h-[1px]" />
  <Link to = "/admin/all-users">  <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-house-door-fill" />
    <span className="text-[15px] ml-4 text-gray-200 font-bold">All Users </span>
    </div></Link>
    <Link to = "/admin/payments">  <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-bookmark-fill" />
      <span className="text-[15px] ml-4 text-gray-200 font-bold">All Payments</span>
    </div></Link>
    <Link to = "/admin/addplans">  <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-bookmark-fill" />
      <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Plan </span>
    </div></Link>
    <Link to = "/admin/seeplans">  <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
      <i className="bi bi-bookmark-fill" />
      <span className="text-[15px] ml-4 text-gray-200 font-bold">See Plan </span>
    </div></Link>
    <div className="my-4 bg-gray-600 h-[1px]" />
   
  
  </div>


  </>
  )
}

export default AdminSideBar;