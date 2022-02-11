import React from 'react';
import fourSeason from '../assets/fourSeason.png'
import belmond from '../assets/belmond.png';
import como from '../assets/como.png';
import aman from '../assets/aman.png'
import '../styles/scss/_Banner.scss';

export default function Banner(props) {
    return (
        <div className='banner'>
            <h6>I NOSTRI PARTNER</h6>
            <div className="partner__logos">
                <img src={fourSeason} alt='logo'/>
                <img src={belmond} alt='logo'/>
                <img src={como} alt='logo'/> 
                <img src={aman} alt='logo'/>
            </div>
        </div>
    );
};

 