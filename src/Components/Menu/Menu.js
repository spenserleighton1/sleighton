import React from 'react';
import { Link } from "react-router-dom";

import './Menu.scss';

const Menu = (props) => {

    let menuClass = props.menuStatus + ' menu';

    return(
        <div style={props.bgColor} className={ menuClass }>
        <h1>Spenser Leighton</h1>
            <ul onClick={ () => props.toggleMenu() }>
                <li><Link className="btn" to="/">Home</Link></li>
                <li><Link className="btn" to="/projects">Projects</Link></li>
                <li><Link className="btn" to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
