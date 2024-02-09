import { Table } from 'flowbite-react';
import { useEffect } from 'react';
import { MdEmail } from "react-icons/md";
import { FaInstagram,FaInternetExplorer,FaLinkedin, FaTwitter } from "react-icons/fa";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';



const TableComp = ({ tableData, Dhidden, Blurred }) => {
  if (!tableData) {
    return <div>Loading...</div>;
  }
  if (tableData.length > 0) {
    console.log("fdfsfs",tableData);
  }

  

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });

    saveAs(blob, "data.xlsx");
};


  return (
    <div className="w-full">
      {
        Dhidden ? (null):(<button onClick={exportToExcel} className=' bg-deep-purple-accent-400 p-2 rounded-full mb-2'>
        Download Leads
        </button>)
      }

<div className="overflow-x-auto">
    
    </div>

     <Table striped className="w-full overflow-x-auto">
  <Table.Head className="w-full">
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/6">Name</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12 ">Contact Number</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Ratings</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Instagram</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Twitter</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Email</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">Website</Table.HeadCell>
    <Table.HeadCell className="w-1/6 sm:w-1/12 md:w-1/12">LinkedIn</Table.HeadCell>
    <Table.HeadCell className={ Blurred ? ("hidden"):("w-1/6 sm:w-1/12 md:w-1/12")}>Call</Table.HeadCell>
    <Table.HeadCell>
      <span className="sr-only">Call </span>
    </Table.HeadCell>
  </Table.Head>
  <Table.Body className="divide-y">
    {tableData &&
      tableData.map((item) => (
        <Table.Row
        key={item.Phone}
        className="bg-red-500 dark:border-gray-700 dark:bg-gray-800 w-full sm:w-44"
      >
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item.Name}
        </Table.Cell>
        <Table.Cell className={Blurred ? ("widthclass blurred"):("widthclass")}>{item.Phone}</Table.Cell>
        <Table.Cell className={Blurred ? (" blurred"):("")}>{item.rating}</Table.Cell>
        <Table.Cell>{item.instagram || <FaInstagram className='text-2xl'/>}</Table.Cell>
        <Table.Cell>{item.instagram || <FaTwitter className='text-2xl'/>}</Table.Cell>
        <Table.Cell>{item.instagram || <MdEmail className='text-2xl'/>}</Table.Cell>

        <Table.Cell className={Blurred ? (" blurred"):("tablewidth")} >{item.Website || <FaInternetExplorer className='text-2xl' />}</Table.Cell>
        <Table.Cell className={Blurred ? (" blurred"):("")}>{item.linkden || <FaLinkedin className='text-2xl'/>}</Table.Cell>
        <Table.Cell>
          <a href={`tel:${item.Phone}`}>
            <button className= {Blurred ? ('hidden'):("inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none ")}>
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
