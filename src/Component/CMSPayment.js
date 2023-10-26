import React from 'react';
import FirstPage from '../Pages/CMSPayment/FirstPage';
import SecondPage from '../Pages/CMSPayment/SecondPage';
import ThirdPage from '../Pages/CMSPayment/ThirdPage';
import FourthPage from '../Pages/CMSPayment/FourthPage';
import FifthPage from '../Pages/CMSPayment/FifthPage';
import SixthPage from '../Pages/CMSPayment/SixthPage';
import SeventhPage from '../Pages/CMSPayment/SeventhPage';

function CMSPayment() {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div style={{ paddingBottom: 80}}>
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

export default CMSPayment;