import React,{useState,useEffect,useRef} from 'react';
import ReactPlayer from 'react-player';
import '../../Pages/DigitalMarketting/FirstPage.css';

function FirstPage() {
  const videoUrl = 'https://player.vimeo.com/external/297927791.sd.mp4?s=5ceeec8c83fcb634312c157cc101b8bd19969b61&profile_id=164&oauth2_token_id=57447761'; 

  const videoContainerRef = useRef(null);

  useEffect(() => {
    
    if (videoContainerRef.current) {
      videoContainerRef.current.classList.add('flash');
    }

   
    return () => {
      if (videoContainerRef.current) {
        videoContainerRef.current.classList.remove('flash');
      }
    };
  }, []);



  return (
    <div className="video-container" ref={videoContainerRef} >
      <ReactPlayer loop={true}  url={videoUrl}  muted={true} playing={true} width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }} />
          <div style={{width:"100%",height:"100%",backgroundColor:"#59595999",position:"absolute",top:0,left:0}}>
     </div>


      <div className="text-content">
        <h1 class="heading">DIGITAL MARKETING</h1>
        <p class="first-page">OUR INNOVATIVE DIGITAL MARKETING SOLUTIONS FOR BUSINESS GROWTH</p>
      </div>
    </div>
  );
}

export default FirstPage;


