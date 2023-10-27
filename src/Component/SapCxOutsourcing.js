import React from 'react';
import FirstPage from '../Pages/SapCxOutsourcing/FirstPage';
import SecondPage from '../Pages/SapCxOutsourcing/SecondPage';
import ThirdPage from '../Pages/SapCxOutsourcing/ThirdPage';
import FourthPage from '../Pages/SapCxOutsourcing/FourthPage';
import FifthPage from '../Pages/SapCxOutsourcing/FifthPage';
import SixthPage from '../Pages/SapCxOutsourcing/SixthPage';
import SeventhPage from '../Pages/SapCxOutsourcing/SeventhPage';
import TopBarComponent from './topbar';

function SapCxOutsourcing() {
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

export default SapCxOutsourcing;