import React, { useEffect, useState } from 'react'
import axios from '../../redux/app/customAxios';
import { Table } from 'flowbite-react';
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const UserTable = () => {
    const[userData,setuserData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/users/allusers');
        
            setuserData(response.data.data);
            
          } catch (error) {
            // Handle errors here
            setError(error);
          }
        };
    
        fetchData();
      }, []); 
      


    if (!userData) {
        return <div>Loading...</div>;
      }
      if (userData.length > 0) {
        console.log("Our User Data",userData);
      }
  return (
    <div className='flex flex-col p-10 overflow-scroll'>
        <div className='heading text-2xl font-bold'>
            All Users
        </div>
        <div className='p-10'>
        <div className="w-full">
     <Table striped className="w-full overflow-x-auto">
  <Table.Head className="w-full">
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/6">Name</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Registered At</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Leads Per Day</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Search Per Day</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Subcription Ends</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">email</Table.HeadCell>
    
  </Table.Head>
  <Table.Body className="divide-y">
    {userData &&
      userData.map((item) => (
        <Table.Row
          key={item.phone}
          className="bg-red-500 dark:border-gray-700 dark:bg-gray-800 w-full sm:w-44"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.name}
          </Table.Cell>
          <Table.Cell>{item.createdAt}</Table.Cell>
    
          <Table.Cell>{item.leadsPerDay}</Table.Cell>
          <Table.Cell>{item.searchQueriesPerDay
 ||0}</Table.Cell>
  <Table.Cell>{item.subscriptionEnd
 || 0}</Table.Cell>
          <Table.Cell>{item.email || 0}</Table.Cell>
         
        </Table.Row>
      ))}
  </Table.Body>
</Table>

    </div>
        </div>



    </div>
  )
}

export default UserTable