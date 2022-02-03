import React from 'react';
import logo from '../assets/logo.jpg';
import '../styles/scss/_Banner.scss';

export default function Banner(props) {
    return (
        <div className='banner'>
            <h6>I NOSTRI PARTNER</h6>
            <div className="partner__logos">
                <img src={logo} alt='logo'/>
                <img src={logo} alt='logo'/>
                <img src={logo} alt='logo'/> 
            </div>
        </div>
    );
};

 