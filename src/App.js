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

  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
