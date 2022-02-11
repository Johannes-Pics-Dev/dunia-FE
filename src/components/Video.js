import React from 'react';
import videosrc from '../assets/dunia.webm';

export default function Video(props) {
    return (
        <div id="intro" class="bg-video vh-100 shadow-1-strong">
        <video className="mainvideo" playsInline autoPlay muted loop>
          <source class="h-100" src={videosrc} />
        </video>
      </div>
    );
}

 