import { Table } from 'flowbite-react';
import { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaInstagram,FaLinkedin } from "react-icons/fa";


const TableComp = ({ tableData }) => {
  if (!tableData) {
    return <div>Loading...</div>;
  }
  if (tableData.length > 0) {
    console.log("fdfsfs",tableData);
  }

  return (
    <div className="w-full">
     <Table striped className="w-full overflow-x-auto">
  <Table.Head className="w-full">
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/6">Name</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Contact Number</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Ratings</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Instagram</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Email</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">LinkedIn</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Call</Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">Call </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    {tableData &&
      tableData.map((item) => (
        <Table.Row
          key={item.phone}
          className="bg-red-500 dark:border-gray-700 dark:bg-gray-800 w-full sm:w-44"
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {item.name}
          </Table.Cell>
          <Table.Cell>{item.phone}</Table.Cell>
          <Table.Cell>{item.individual_rating}</Table.Cell>
          <Table.Cell>{item.instagram || <FaInstagram className='text-2xl'/>}</Table.Cell>
          <Table.Cell>{item.email || <MdEmail className='text-2xl' />}</Table.Cell>
          <Table.Cell>{item.linkden || <FaLinkedin className='text-2xl'/>}</Table.Cell>
          <Table.Cell>
            <a href={`tel:${item.phone}`}>
              <button className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
                Call
              </button>
            </a>
          </Table.Cell>
        </Table.Row>
      ))}
  </Table.Body>
</Table>

    </div>
  );
};

export default TableComp;
