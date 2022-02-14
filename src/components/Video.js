import React,{useRef,useEffect} from 'react';
import videosrc from '../assets/dunia.webm';

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

export default function Video(props) {

  const refVideo = useRef(null);

    useEffect(() => {
      console.log(refVideo);
      if (!refVideo.current) {
          return;
      }

      refVideo.current.setAttribute("muted", "");
      

  }, []);

    return (
        <div id="intro" className="bg-video vh-100 shadow-1-strong">
        <video ref={refVideo} className="mainvideo" playsInline autoPlay muted loop>
          <source className="h-100" src={videosrc} />
        </video>
      </div>
    );
}

 