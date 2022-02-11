import React from 'react';
import '../styles/scss/_Video.scss';

export default function Video(props) {
    return (
        <div className='video'>
            <video width="100%" controls >
                <source src='Dunia.webm'/>
            </video>
        </div>
    );
}

 