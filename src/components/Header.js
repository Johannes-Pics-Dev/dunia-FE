import React from 'react';
import '../styles/scss/_Header.scss';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
    return (
    <div className='header'>
        <img src={logo} alt='logo'/>
        <FontAwesomeIcon icon={faBars}/>
    </div>
    );
}

export default Header;