import React, { useEffect, useState } from 'react'
import axios from '../../redux/app/customAxios';
import { Table } from 'flowbite-react';
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const PaymentTable = () => {
    const[paymentData,setpaymentData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/payments');
            
            console.log(response.data)
            setpaymentData(response.data.data);
            
          } catch (error) {
            // Handle errors here
            setError(error);
          }
        };
    
        fetchData();
      }, []); 
      


    if (!paymentData) {
        return <div>Loading...</div>;
      }
      if (paymentData.length > 0) {
        console.log("Our User Data",paymentData);
      }
  return (
    <div className='flex flex-col p-10 overflow-scroll'>
        <div className='heading text-2xl font-bold'>
            All Payments
        </div>
        <div className='p-10'>
        <div className="w-full">
     <Table striped className="w-full overflow-x-auto">
  <Table.Head className="w-full">
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/6">User ID </Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Plan ID</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Status</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Time-Data</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Unique Payment Id</Table.HeadCell>
   
    
  </Table.Head>
  <Table.Body className="divide-y">
    {paymentData &&
      paymentData.map((item) => (
        <Table.Row
          key={item._id}
          className="bg-red-500 dark:border-gray-700 dark:bg-gray-800 w-full sm:w-44"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.user}
          </Table.Cell>
          <Table.Cell>{item.plan}</Table.Cell>
    
          <Table.Cell>{item.status}</Table.Cell>
          <Table.Cell>{item.createdAt
 ||0}</Table.Cell>
  <Table.Cell>{item._id
 || 0}</Table.Cell>
         
        </Table.Row>
      ))}
  </Table.Body>
</Table>

    </div>
        </div>



    </div>
  )
}

export default PaymentTable