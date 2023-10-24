import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Box } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useStyles } from './styles';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import TableRecord from '../../components/tableRow/tableRecord';

const columns = [
  'ID',
  'Response #',
  'Response Date',
  'Type',
  'For Type',
  'Description',
  'Actions'
];


const DataTable = ({ data }) => {

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row) => (
            <TableRecord key={row.id} data={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
