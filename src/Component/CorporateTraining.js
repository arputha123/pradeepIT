import React from 'react';
import FirstPage from '../Pages/CorporateTraning/FirstPage';
import SecondPage from '../Pages/CorporateTraning/SecondPage';
import ThirdPage from '../Pages/CorporateTraning/ThirdPage';
import FourthPage from '../Pages/CorporateTraning/FourthPage';
import FifthPage from '../Pages/CorporateTraning/FifthPage';
import SixthPage from '../Pages/CorporateTraning/SixthPage';
import SeventhPage from '../Pages/CorporateTraning/SeventhPage';

function CorporateTraning() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div style={{ paddingBottom: 80 }}>
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

export default CorporateTraning;