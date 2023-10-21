import React from "react";
import { Link } from "react-router-dom";

const Header = () => {



    return (
        <div>
            <Link to='/'>Form</Link>
            <Link to='/list'>List</Link>
        </div>
    )
}

export default Header;