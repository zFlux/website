import React, { FC } from 'react';
import './Table.scss';

interface TableProps {
  data: Array<Object>;
}

// function to generate data rows
const generateDataRows = (data: Array<Object>) => {
  const dataRows = [];
  for (const row of data) {
    dataRows.push(
      <tr>
        {Object.values(row).map((key) => (
          <td key={key}>{key}</td>
        ))}
      </tr>
    );
  }
  return dataRows;
};

// create a function to generate the column labels for the table from the data prop
const generateColumnLabels: (data: Array<Object>) => JSX.Element[] = (data) => {
  const columnLabels = [];
  const firstObject = data[0];
  for (const key of Object.keys(firstObject)) {
    columnLabels.push(
      <th key={key}>{key}</th>
    );
  }
  return columnLabels;
};


const Table: FC<TableProps> = (props) => (
  <div className="Table">
    <table>
      <thead>
        <tr>
          {generateColumnLabels(props.data)}
        </tr>
      </thead>
  <tbody>
    {generateDataRows(props.data)}
  </tbody>
</table>
</div>
);

export default Table;
