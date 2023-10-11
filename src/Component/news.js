import React, { useState } from "react";
import img from '../Images/news1.jpg'
import line from '../Images/line2.png'
import fund from '../Images/investment.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import TopBarComponent from './topbar';
import { useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


function News() {
  const [data, setData] = useState([
    {
      Img: img,
      Admin: "POSTED BY ADMIN ",
      Date: " SEPTEMBAR 24,2018",
      Heading: "100 + KARNATAKA ENGINEERING COLLEGES SIGNED MOU WITH PRADEEPIT",
      BodyData: "PRADEEPIT is the foremost ISO certified 9001:2015 IT Company,which has marked its flagship in 3 + countries with 300+ projects sccessfully Accomplished and its core focus on in-house open...",
      Likes: "177 LIKES"
    },
    {
      Img: fund,
      Admin: "POSTED BY ADMIN",
      Date: " SEPTEMBAR 24,2018",
      Heading: "KOUCHAN JOINT VENTURE WITH PRADEEPIT RAISED FUNDS OF 3 LAKHS AND UPCOMING MONTHS RAISES FUNDS OF 3 CRORES",
      BodyData: "Kou-Chan Joint venture with PRADEEPIT raised funds of 30 lakhs and upcoming months raises funds of 10 crores. PradeepIT had a very successful Joint Venture with Kou-Chan for 10 years...",
      Likes: "179 LIKES"
    }
  ])

  const navigate = useNavigate();
  // const NavigatePageonClick = () => {
  //   console.log("NavigatePageonClick");
  //   // navigate('/NewsView');
  // }
  return (
    <>
      <TopBarComponent />
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <div className="container col2-layout">
          <div style={{ paddingTop: 40, paddingLeft: 13, paddingRight: 13 }} className="row">
            <div className="col-lg-8 col-md-7 col-sm-4 animated fadeInUp">
              <p style={{ fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>NEWS</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 breadcrumb text-uppercase wow fadeInUp xs-display-none animated">
              {/* <ul>
                <li style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}>HOME</li>
                <li style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}>| NEWS</li>
              </ul> */}
              <p className="animate_content animated" style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray' }}>HOME</a> <span>|</span> NEWS</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div style={{ backgroundColor: "#f6f6f6", marginLeft: "auto" }} class="d-flex justify-content-between">
        <div>
          <p style={{ fontSize: 20 }}>NEWS</p>
        </div>

        <div class="">
          <p style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray' }}>HOME</a> <span>|</span> NEWS</p>

        </div>
      </div> */}
      <div className="container" style={{ marginBottom: 100 }}>
        {
          data && data.map((val, ind) => {
            return (
              <>
                <div style={{ marginTop: 90 }}>
                  <Link className="no_margin"
                  // to={{pathname:"/NewsView", state: {fromDashboard: val }}}
                    // to={{
                    //   pathname: "/NewsView",
                    //   state: { fromDashboard: true },
                    // }}
                    to="/NewsView"
                    state={{ data : data , id: ind}}
                  >
                    <img src={val.Img} width='700' class="img-fluid cursor_pointer" alt="Responsive image" />
                  </Link>
                </div>
                <div >
                  <p style={{ color: "#828282", fontSize: 11, letterSpacing: 2 }}>{val.Admin}<span>|</span> {val.Date}</p>
                  <Link className="no_margin"
                    to="/NewsView"
                    state={{ data : data , id: ind}}
                  >
                    <p href="NewsView" className="cursor_pointer" style={{ color: "gray", fontSize: 14, letterSpacing: 2, width: "60%", textTransform: "uppercase" }} >{val.Heading}</p>
                  </Link>
                  <p style={{ color: "gray", fontSize: 12, width: "60%" }}>{val.BodyData}</p>
                  <img src={line} height='20px' width='40px' />
                  {/* <div style={{ height: 2 ,width: 30 , color: "#000000"}}/> */}
                  <p className="cursor_pointer" style={{ fontSize: 10, letterSpacing: 2, marginTop: "1%" }}><CiHeart style={{ fontSize: 13 }} /> <span style={{ marginRight: 15 }}> {val.Likes}</span>
                  <Link className="no_margin"
                   to="/NewsView"
                   state={{ data : data , id: ind}}
                  >
                   <FaRegComment style={{ fontSize: 12, color: "gray" }}/><span style={{ color: "gray" }}> LEAVE A COMMENT</span>
                   </Link>
                   </p>
                  <Link className="no_margin"
                    to="/NewsView"
                    state={{ data : data , id: ind}}
                  >
                    <button style={{ display: "inline-block", fontSize: 11, letterSpacing: 2, padding: "6px 14px" }} className="Contione_btn">CONTINUE READING</button>
                  </Link>
                </div>

              </>
            )
          })
        }
        {/* <div style={{ marginTop: 90 }}>
        <img src={img} class="img-fluid cursor_pointer" alt="Responsive image" onClick={()=> NavigatePageonClick()} />
        </div>
        <div >
          <p style={{ color: "#828282", fontSize: 11, letterSpacing: 2 }}>POSTED BY ADMIN <span>|</span> SEPTEMBAR 24,2018</p>
          <p href="NewsView" className="cursor_pointer" style={{ fontSize: 14, letterSpacing: 2, width: "60%", textTransform: "uppercase" }} onClick={()=> NavigatePageonClick()} >100 + KARNATAKA ENGINEERING COLLEGES SIGNED MOU WITH PRADEEPIT </p>
          <p style={{ color: "gray", fontSize: 12, width: "60%" }}>PRADEEPIT is the foremost ISO certified 9001:2015 IT Company,which has marked its flagship in 3 + countries
            with 300+ projects sccessfully Accomplished and its core focus on in-house open...
          </p>
          <img src={line} height='20px' width='40px' />
          <p className="cursor_pointer" style={{ fontSize: 10, letterSpacing: 2, marginTop: "1%" }}><CiHeart style={{ fontSize: 13 }} /> <span style={{ marginRight: 15 }}> 177 LIKES</span> <FaRegComment style={{ fontSize: 12 }} onClick={()=> NavigatePageonClick()}/><span onClick={()=> NavigatePageonClick()}> LEAVE A COMMENT</span></p>
          <button style={{ display: "inline-block", fontSize: 11, letterSpacing: 2, padding: "6px 14px" }} className="Contione_btn" onClick={()=> NavigatePageonClick()}>CONTINUE READING</button>
        </div> */}

        {/* <div class='mt-5'>
          <img src={fund} class="img-fluid" alt="Responsive image" width='700' />
        </div>

        <div >
          <p style={{ fontWeight: "lighter", fontSize: "14px" }}>POSTED BY ADMIN <span>|</span> SEPTEMBAR 24,2018</p>
          <p style={{ fontSize: "16px" }}>KOUCHAN JOINT VENTURE WITH PRADEEPIT RAISED FUNDS OF 3 LAKHS AND UPCOMING <br />
            MONTHS RAISES FUNDS OF 3 CRORES
          </p>
          <p style={{ color: "gray", fontSize: "14px" }}>Kou-Chan Joint venture with PRADEEPIT raised funds of 30 lakhs and upcoming months raises funds of 10 crores.<br /> PradeepIT had a very successful Joint Venture with Kou-Chan for 10 years...
          </p>
          <img src={line} height='20px' width='40px' />
          <p style={{ fontSize: "12px", letterSpacing: "2px" }}><CiHeart /> 167 LIKES <FaRegComment /><span style={{ marginLeft: "10px" }}>LEAVE A COMMENT</span> </p>
          <button style={{ backgroundColor: "white", fontSize: "12px" }}>CONTINUE READING</button>

        </div> */}



        {/* <div style={{ marginTop: 90 }}>
        <img src={fund} class="img-fluid cursor_pointer" alt="Responsive image" width='700' onClick={()=> NavigatePageonClick()} />
        </div>
        <div >
          <p style={{ color: "#828282", fontSize: 11, letterSpacing: 2 }}>POSTED BY ADMIN <span>|</span> SEPTEMBAR 24,2018</p>
          <p style={{ fontSize: 14, letterSpacing: 2, width: "60%", textTransform: "uppercase" }} className="cursor_pointer" onClick={()=> NavigatePageonClick()}>Kouchan Joint venture with PRADEEPIT raised funds of 30 lakhs and upcoming months raises funds of 10 crores</p>
          <p style={{ color: "gray", fontSize: 12, width: "60%" }}>Kou-Chan Joint venture with PRADEEPIT raised funds of 30 lakhs and upcoming months raises funds of 10 crores. PradeepIT had a very successful Joint Venture with Kou-Chan for 10 years...</p>
          <img src={line} height='20px' width='40px' />
          <p className="cursor_pointer" style={{ fontSize: 10, letterSpacing: 2, marginTop: "1%" }}><CiHeart style={{ fontSize: 13 }} /> <span style={{ marginRight: 15 }}> 177 LIKES</span> <a href="NewsView" className="no_margin"><FaRegComment style={{ fontSize: 12 }} onClick={()=> NavigatePageonClick()}/><span onClick={()=> NavigatePageonClick()}> LEAVE A COMMENT</span></a> </p>
          <button style={{ display: "inline-block", fontSize: 11, letterSpacing: 2, padding: "6px 14px" }} className="Contione_btn" onClick={()=> NavigatePageonClick()}>CONTINUE READING</button>
        </div> */}

      </div>
      <div style={{ backgroundColor: "#f6f6f6", paddingTop: 90 }} />
      <div style={{ backgroundColor: "#252525" }}>
        <div className="container col2-layout">
          <div style={{ padding: "40px 13px 20px 13px" }} className="row">
            <div className="col-lg-8 col-md-7 col-sm-12 animated fadeInUp">
              <p style={{ fontSize: 11, letterSpacing: 2, fontWeight: 600, color: "#828282" }}>
                © 07/06/2023 S3REMOTICA SERVICES PVT LTD
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default News;