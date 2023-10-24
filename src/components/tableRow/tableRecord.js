import React from 'react';
import { TableRow, TableCell, Box } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useStyles } from './styles';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const TableRecord = ({ data }) => {
    const classes = useStyles();

    const deleteRecord = () => {
        console.log('delete', data.id);
    }

    return (
            <TableRow key={data.id}>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.responseNumber}</TableCell>
                <TableCell>{data.responseDate}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell>{data.forType}</TableCell>
                <TableCell>{data.description}</TableCell>
                <TableCell>
                    <Box className={classes.actionCell}>
                        <ModeEditIcon className={[classes.actionIcon, classes.editIcon]} />
                        <DeleteOutlineIcon onClick={() => console.log('id', data.id)} className={[classes.actionIcon, classes.deleteIcon]} />
                    </Box>
                </TableCell>
            </TableRow>
    )
}

export default TableRecord;