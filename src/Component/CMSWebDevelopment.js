import React from 'react';
import FirstPage from '../Pages/Webdevelopment/FirstPage';
import SecondPage from '../Pages/Webdevelopment/SecondPage';
import ThirdPage from '../Pages/Webdevelopment/ThirdPage';
import FourthPage from '../Pages/Webdevelopment/FourthPage';
import FifthPage from '../Pages/Webdevelopment/FifthPage';
import SixthPage from '../Pages/Webdevelopment/SixthPage';
import SeventhPage from '../Pages/Webdevelopment/SeventhPage';
import TopBarComponent from './topbar';
import FooterComponent from './Footer';

function Webdevelopment() {
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
        <div style={{ marginBottom: 10, marginTop: "50px" }}>
          <SixthPage />
        </div>
        <div style={{ marginBottom: 50, marginTop: "30px" }}>
          <SeventhPage />
        </div>
      </div>
      <div>
        <FooterComponent/>
      </div>
    </>
  )
}

export default Webdevelopment;