import React from 'react';
import github from '../../Assets/github.svg'
import instagram from '../../Assets/instagram-logo.svg'
import linkedin from '../../Assets/linkedin-logo-button.svg'
import twitter from '../../Assets/twitter-logo-button.svg'
import mail from '../../Assets/closed-envelope-circle.svg'
import './Header.scss';

const Header = (props) => {
    return(
        <div className="header">
            <ul className={ props.menuStatus }>
                <li><a href="https://github.com/spenserleighton1"><img src={ github } alt="github"/></a></li>
                <li><a href="https://instagram.com/spennifer_love_hewitt_/"><img src={ instagram } alt="instagram"/></a></li>
                <li><a href="https://www.linkedin.com/in/spenser-leighton/"><img src={ linkedin } alt="linkedin"/></a></li>
                <li><a href="https://twitter.com/takemenorth"><img src={ twitter } alt="twitter"/></a></li>
                <li><a href="mailto:spenser.leighton@gmail.com"><img src={ mail } alt="mail"/></a></li>
                <li><div id="hambmenu" onClick={ () => props.toggleMenu() } className={ props.menuStatus }><span></span><span></span><span></span><span></span></div></li>
            </ul>
        </div>
    )
}

export default Header;
