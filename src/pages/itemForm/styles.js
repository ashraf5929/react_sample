import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            fontSize: 12,
            fontWeight: 500,
        },
        paper: {
            width: 300
        },

    },
    mb1: {
        marginBottom: 16,
    },
    title: {
        textAlign: 'center'
    },
    submitButtonContainer: {
        textAlign: 'center',
        marginTop: '16px',
    },
    submitButton: {
        width: '150px',
        padding: '7px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    formTitle:{
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007bff', 
        marginBottom: '20px', 
    }

})