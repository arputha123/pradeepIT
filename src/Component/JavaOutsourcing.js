import React from 'react';
import FirstPage from '../Pages/JavaOutsourcing/FirstPage';
import SecondPage from '../Pages/JavaOutsourcing/SecondPage';
import ThirdPage from '../Pages/JavaOutsourcing/ThirdPage';
import FourthPage from '../Pages/JavaOutsourcing/FourthPage';
import FifthPage from '../Pages/JavaOutsourcing/FifthPage';
import SixthPage from '../Pages/JavaOutsourcing/SixthPage';
import SeventhPage from '../Pages/JavaOutsourcing/SeventhPage';
import TopBarComponent from './topbar';
import Footer from '../Component/Footer';


function JavaOutsourcing() {
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
        <div>
          <Footer />
          </div>
      </div>
    </>
  )
}

export default JavaOutsourcing