import React from "react";
import News from './Component/news';
import TopBarComponent from "./Component/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Digital from "./Component/Digital";
import AdvisoryBoard from "./Component/AdvisoryBoard";
import AboutCompany from './Component/AboutCompany';
import NewsView from './Component/newsView'
import ConvistaAg from "./Component/AboutCompanyComponents/ConvistaAg";
import EmbiTelTecnnologies from "./Component/AboutCompanyComponents/EmbiTelTecnnologies";
import EngineerBabu from "./Component/AboutCompanyComponents/EngineerBabu";
import Kouchan from "./Component/AboutCompanyComponents/Kouchan";
import PogeyanTechnologies from "./Component/AboutCompanyComponents/PogeyanTechnologies";
import StandardTouch from "./Component/AboutCompanyComponents/StandardTouch";
import Tarento from "./Component/AboutCompanyComponents/Tarento";
import ContactAs from "./Component/ContactAs";
import Task from "./Component/task";
import"./App.css";
import Recruit from "./Component/Recruit/Recruit";
import MainPage from "./Component/Recruit/MainPage";
import Blogs from "./Component/Recruit/Blogs";


function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<TopBarComponent/>}></Route> */}
    <Route path="/" element={<Digital/>}></Route>
    <Route path="/News" element={<News/>}></Route>
    <Route path='/AdvisoryBoard' element={<AdvisoryBoard/>}></Route>
    <Route path="/AboutCompany" element={<AboutCompany/>}></Route>
    <Route path="/NewsView" element={<NewsView/>}></Route>
    <Route path="/Contactas" element={<Task/>}></Route>
    <Route path ="/MainPage" element={<MainPage/>}></Route>
    <Route path ="/Blogs" element={<Blogs/>}></Route>

    {/* <Route path="/ConvistaAg" element={<ConvistaAg/>}></Route>
    <Route path="/EmbiTelTecnnologies" element={<EmbiTelTecnnologies/>}></Route>
    <Route path="/EngineerBabu" element={<EngineerBabu/>}></Route>
    <Route path="/Kouchan" element={<Kouchan/>}></Route>
    <Route path="/PogeyanTechnologies" element={<PogeyanTechnologies/>}></Route>
    <Route path="/StandardTouch" element={<StandardTouch/>}></Route>
    <Route path="/Tarento" element={<Tarento/>}></Route> */}
  </Routes>
  </BrowserRouter>
  
  
  
  </>
  );
}

export default App;
