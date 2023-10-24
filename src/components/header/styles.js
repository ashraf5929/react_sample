import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    centerMenu: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLink: {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        margin: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },
    listItemsMaginTop: {
        marginTop:25
    }
})