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
    title:{
        textAlign:'center'
    },
    submitButtonContainer:{
        marginTop:16,
        textAlign:'center',
    },
    submitButton:{
        width: '150px',
        paddingTop: '7px',
        paddingBottom: '7px'
    }
})