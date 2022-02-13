import React from 'react';
import { CustomTableWrapper } from './CustomTable.style';

interface ICustomTableProps {
    className?: string;
}

const CustomTable: React.FC<ICustomTableProps> = ({ className = ''}) => {

    const handleAdd = () => {
        console.log('add');
    };

    const handleEdit = () => {
        console.log('edit');
    };

    const handleDelete = () => {
        console.log('delete');
    };

    return (
        <CustomTableWrapper className={`responsive ${className}`}
        >
            <thead>
    <tr>
      <th>
        #
      </th>
      <th>
        Table heading
      </th>
      <th>
        Table heading
      </th>
      <th>
        Table heading
      </th>
      <th>
        Table heading
      </th>
      <th>
        Table heading
      </th>
      <th>
        Table heading
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
    </tr>
  </tbody>
        </CustomTableWrapper>
    );
};

export default CustomTable;