import React from 'react'
import {Link} from 'gatsby';

const Menu = () => {
    return(
    <nav>
        <Link 
            to="/about" 
            activeClassName="active" 
            activeStyle={{ color: "red" }} 
            activeClassName="active"
        >About</Link> | 

        <Link 
            to="/contact"
            activeStyle={{ color: "red" }}
            activeClassName="active"
        >Contact</Link>
    </nav>
    )
}

export default Menu