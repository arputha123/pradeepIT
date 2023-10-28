import React from 'react';
import FirstPage from '../Pages/VideoProduction/FirstPage';
import SecondPage from '../Pages/VideoProduction/SecondPage';
import ThirdPage from '../Pages/VideoProduction/ThirdPage';
import FourthPage from '../Pages/VideoProduction/FourthPage';
import FifthPage from '../Pages/VideoProduction/FifthPage';
import SixthPage from '../Pages/VideoProduction/SixthPage';
import SeventhPage from '../Pages/VideoProduction/SeventhPage';
import TopBarComponent from './topbar';
import Footer from './Footer';

function VideoProduction() {
  return (
    <>
    <TopBarComponent/>
      <div style={{ overflowX: "hidden" }}>
        <div style={{ paddingBottom: 80 ,fontFamily:''}}>
          <FirstPage />
        </div>
        <div style={{ marginBottom: 50 }}>
          <SecondPage />
        </div>
        <div style={{ marginBottom: 20 }}>
          <ThirdPage />
        </div>
        <div style={{ marginBottom: 20, marginTop: "50px" }}>
          <FourthPage />
        </div>
        <div style={{ paddingBottom: 20, paddingTop: "60px" }}>
          <FifthPage />
        </div>
        <div style={{ marginBottom: 0, marginTop: "50px" }}>
          <SixthPage />
        </div>
        <div style={{ marginBottom: 50, marginTop: "0px",padding:0 }}>
          <SeventhPage />
        </div>
        <div>
          <Footer />
          </div>
      </div>
    </>
  )
}

export default VideoProduction;