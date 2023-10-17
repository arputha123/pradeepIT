import React from "react";
import News from './Component/news';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Digital from "./Component/Digital";
import AdvisoryBoard from "./Component/AdvisoryBoard";
import AboutCompany from './Component/AboutCompany';
import NewsView from './Component/newsView'
import ContactUs from "./Component/ContactUs";
import Recruit from "./Component/Recruit/Recruit";
import MainPage from "./Component/Recruit/MainPage";
import Blogs from "./Component/Recruit/Blogs";
import"./App.css";
import SapCxOutSourcing from './Component/SapCxOutsourcing';
import JavaOutsourcing from './Component/JavaOutsourcing';
import ECommerce from './Component/E-Commerce';
import WebDevelopment from './Component/CMSWebDevelopment';
import CMSPayment from './Component/CMSPayment';
import CorporateTraining from './Component/CorporateTraining';
import DigitalMarketing from "./Component/DigitalMarketting";
import VideoProduction from './Component/VideoProduction';
import TeamMembers from './Component/TeamMembers/TeamMembers';





function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Digital/>}></Route>
    <Route path="/News" element={<News/>}></Route>
    <Route path='/AdvisoryBoard' element={<AdvisoryBoard/>}></Route>
    <Route path="/AboutCompany" element={<AboutCompany/>}></Route>
    <Route path="/NewsView" element={<NewsView/>}></Route>
    <Route path="/Contactus" element={<ContactUs/>}></Route>
    <Route path ="/MainPage" element={<MainPage/>}></Route>
    <Route path ="/Blogs" element={<Blogs/>}></Route>
    <Route path="/SapCxOutsourcing" element={<SapCxOutSourcing />}></Route>
          <Route path="/JavaOutsourcing" element={<JavaOutsourcing />}></Route>
          <Route path="/ECommerce" element={<ECommerce />}></Route>
          <Route path="/WebDevelopment" element={<WebDevelopment />}></Route>
          <Route path="/CMSPayment" element={<CMSPayment />}></Route>
          <Route path="/CorporateTraining" element={<CorporateTraining />}></Route>
          <Route path="/DigitalMarketing" element={<DigitalMarketing />}></Route>
          <Route path="/VideoProduction" element={<VideoProduction />}></Route>
          <Route path="/TeamMembers" element={<TeamMembers />}></Route>

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
