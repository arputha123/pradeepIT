import React from 'react';
import FirstPage from '../Pages/DigitalMarketting/FirstPage';
import SecondPage from '../Pages/DigitalMarketting/SecondPage';
import ThirdPage from '../Pages/DigitalMarketting/ThirdPage';
import FourthPage from '../Pages/DigitalMarketting/FourthPage';
import FifthPage from '../Pages/DigitalMarketting/FifthPage';
import SixthPage from '../Pages/DigitalMarketting/SixthPage';
import SeventhPage from '../Pages/DigitalMarketting/SeventhPage';
import TopBarComponent from './topbar';

function DigitalMarketting() {
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
    </>
  )
}

export default DigitalMarketting;