import React from 'react';
import './Menu.scss';

const Menu = (props) => {

    let menuClass = props.menuStatus + ' menu';

    return(
        <div className={ menuClass }>
        <h1>Spenser Leighton</h1>
            <ul>
                <li><a className="btn" href="/">Test</a></li>
                <li><a className="btn" href="/">Test</a></li>
                <li><a className="btn" href="/">Test</a></li>
                <li><a className="btn" href="/">Test</a></li>
            </ul>
        </div>
    )
}

export default Menu;
