import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    dataTableTitle:{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007bff', 
        marginBottom: '20px', 
    },
    actionIcon: {
        cursor: 'pointer',
        marginRight: 16,
    },
    deleteIcon: {
        color: 'red'
    },
    editIcon: {
        color: '#00a8e8'
    }

})