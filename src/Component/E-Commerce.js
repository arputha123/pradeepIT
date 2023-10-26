import React from 'react';
import FirstPage from '../Pages/E-Commerce/FirstPage';
import SecondPage from '../Pages/E-Commerce/SecondPage';
import ThirdPage from '../Pages/E-Commerce/ThirdPage';
import FourthPage from '../Pages/E-Commerce/FourthPage';
import FifthPage from '../Pages/E-Commerce/FifthPage';
import SixthPage from '../Pages/E-Commerce/SixthPage';
import SeventhPage from '../Pages/E-Commerce/SeventhPage';
import TopBarComponent from './topbar';

function ECommerce() {
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

export default ECommerce;