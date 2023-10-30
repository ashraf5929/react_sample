import React from 'react';
import { TableRow, TableCell, Box, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useStyles } from './styles';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useMutation } from 'react-query';
import { deleteTableRecord } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LoadingIcon from '../icons/loadingIcon';
import CustomSnackbar from '../snackbar/snackbar';




const TableRecord = ({ data, refresh }) => {
    const [snackbarConfig, setSnackbarConfig] = React.useState({
        open: false,
        message: '',
        position: { vertical: 'bottom', horizontal: 'center' },
        color: '#4caf50',
    });

    const handleOpenSnackbar = (newMessage, newColor) => {
        setSnackbarConfig({
            open: true,
            message: newMessage,
            position: { vertical: 'bottom', horizontal: 'center' },
            color: newColor, 
        });
    };

    const handleCloseSnackbar = () => {
        setSnackbarConfig({ ...snackbarConfig, open: false });
    };

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
            handleOpenSnackbar('Record deleted successfully', 'green')
        }, 500);
    };

    const editRecord = () => {
        navigate(`/?data=${JSON.stringify(data)}`);
    };

    return (
        <>
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
                        <Button onClick={() => {
                            handleOpenSnackbar("hhhhhhhh", 'red')
                        }}>click</Button>

                    </Box>
                </TableCell>
            </TableRow>
            <CustomSnackbar
                open={snackbarConfig.open}
                message={snackbarConfig.message}
                position={snackbarConfig.position}
                handleClose={handleCloseSnackbar}
                color={snackbarConfig.color}

            />
        </>
    );
}

export default TableRecord;
