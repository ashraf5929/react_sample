import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
const Header = () => {
    const classes = useStyles();
    return (
        <Container >
            <div className={[classes.centerMenu, classes.listItemsMaginTop].join(' ')}>
                <Link className={classes.buttonLink} to='/'>Form</Link>
                <Link className={classes.buttonLink} to='/list'>List</Link>
            </div>
        </Container>
    )
}

export default Header;