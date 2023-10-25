import React from 'react';
import { TableRow, TableCell, Box } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useStyles } from './styles';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useMutation } from 'react-query';
import { deleteTableRecord } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingIcon from '../icons/loadingIcon';



const TableRecord = ({ data, refresh }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = React.useState(false);
    const deleteMutation = useMutation(deleteTableRecord, {
        onSuccess: () => {
            refresh();
        },
        onError: () => {
            setIsDeleting(false);
        }
    });

    const deleteRecord = () => {
        setIsDeleting(true);
        setTimeout(() => {
            deleteMutation.mutate(data.id);
        }, 500);
    };

    const editRecord = () => {
        navigate(`/?data=${JSON.stringify(data)}`);
    };

    return (
        <TableRow key={data.id}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.resourceId}</TableCell>
            <TableCell>{data.responseDate}</TableCell>
            <TableCell>{data.type}</TableCell>
            <TableCell>{data.forType}</TableCell>
            <TableCell>{data.description}</TableCell>
            <TableCell>
                <Box className={classes.actionCell}>
                    <ModeEditIcon onClick={editRecord} className={[classes.actionIcon, classes.editIcon]} />
                    {isDeleting ? (<LoadingIcon />) : (
                        (<DeleteOutlineIcon onClick={deleteRecord} className={[classes.actionIcon, classes.deleteIcon]} />)
                    )}

                </Box>
            </TableCell>
        </TableRow>
    );
}

export default TableRecord;
