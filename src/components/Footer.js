import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/scss/_Footer.scss';


export default function Footer(props) {
    return (
        <div className='footer'>
            <img src={logo} alt='logo'/>
        </div>
    );
}

 