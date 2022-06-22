import React, { useRef, useEffect } from 'react';
import videosrcwebm from '../assets/dunia.webm';
import videosrcmp4 from '../assets/dunia.mp4';

export default function Video(props) {

  const refVideo = useRef(null);

  useEffect(() => {
    if (!refVideo.current)
      return;

    refVideo.current.setAttribute("muted", "");
  }, []);

  return (
    <div id="intro" className="bg-video vh-100 shadow-1-strong">
      <video ref={refVideo} className="mainvideo" playsInline autoPlay muted loop>
        <source className="h-100" src={videosrcwebm} type="video/webm" />
        <source className="h-100" src={videosrcmp4} type="video/mp4" />
      </video>
    </div>
  );
}

