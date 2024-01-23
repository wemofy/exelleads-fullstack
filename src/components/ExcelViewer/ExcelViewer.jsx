
'use client';

import { Table } from 'flowbite-react';
import LeadsData from '../../utils/searchData'

function ExcelViewer() {
   
  return (
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>KeyWord</Table.HeadCell>
          <Table.HeadCell>Location</Table.HeadCell>
         
         
        </Table.Head>
        <Table.Body className="divide-y">
         
         {LeadsData.map ((item,index)=>(
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {item.Keywords}
            </Table.Cell>
            <Table.Cell>{item.Location}</Table.Cell>
           </Table.Row>

         ))}
          
         
         
        </Table.Body>
      </Table>
    </div>
  );
}

export default ExcelViewer;