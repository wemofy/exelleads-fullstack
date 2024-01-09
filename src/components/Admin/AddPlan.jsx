import React, { useEffect, useState } from 'react'
import axios from '../../redux/app/customAxios';
import { Table } from 'flowbite-react';
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';



const AddPlan = () => {
    const[paymentData,setpaymentData] = useState();
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/plans');
            
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
         


        <div className='p-10'>
        <div className='heading text-2xl font-bold'>
            All Plans
        </div>
        <div className='p-10'>
        <div className="w-full">
     <Table striped className="w-full overflow-x-auto">
  <Table.Head className="w-full">
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/6">Name </Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Price</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Lead query</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Search query</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Day Duration</Table.HeadCell>
   
    
  </Table.Head>
  <Table.Body className="divide-y">
    {paymentData &&
      paymentData.map((item) => (
        <Table.Row
          key={item._id}
          className="bg-red-500 dark:border-gray-700 dark:bg-gray-800 w-full sm:w-44"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.name}
          </Table.Cell>
          <Table.Cell>{item.price}</Table.Cell>
    
      
          <Table.Cell>{item.leadsPerDay
 ||0}</Table.Cell>
     <Table.Cell>{item.searchQueriesPerDay || 0}</Table.Cell>
  <Table.Cell>{item._id
 || 0}</Table.Cell>
         
        </Table.Row>
      ))}
  </Table.Body>
</Table>

    </div>
        </div>
        </div>



    </div>
  )
}

export default AddPlan