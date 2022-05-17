import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';

export interface ICustomTableProps {
  tableData: Record<string, any>[];
  tableHeader: string[];
  action: (item: Record<string, any>) => void;
}

const CustomTable: React.FC<ICustomTableProps> = ({
  tableData,
  tableHeader,
}) => {

  return (
    <Card>
      <CardBody>
        {
          tableData.length === 0 && <p>There is no item yet!</p>
        }
        {tableData.length &&
          <Table className='responsive'>
            <thead>
              <tr>
                {
                  tableHeader.map((header: string) => <th key={header}>{header}</th>)
                }
              </tr>
            </thead>
            <tbody>
              {
                tableData.map((item: Record<string, any>, rowIndex: number) => <tr key={item.id || rowIndex}>
                  {
                    Object.keys(item).map((key: string) => <td key={`${key}-table-data`}>{key === 'action' && item.action ? item.action.enhancer : item[key]}</td>)
                  }
                </tr>)
              }
            </tbody>
          </Table>
        }
      </CardBody>
    </Card>
  );
};

export default CustomTable;