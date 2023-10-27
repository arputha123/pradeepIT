import React, { useState } from "react";
import img from '../../Images/webdesign.png'
import line from '../../Images/line2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useNavigate, Link } from 'react-router-dom';
// import TopBarCommon from "./Topbarcommon";


function WebDesign() {

  const [data, setData] = useState([
    {
      Img: img,
      Admin: "POSTED BY ADMIN ",
      Date: "FEBRUARY 24, 2016",
      Heading: "RESPONSIVE WEB DESIGN: EVERY WEB PAGE GETTING INTO REBUILD ",
      BodyData: "In the last decade, the building web page has a big challenge for every web developer, because continuous growing and changing in the devices. The web design must be resized...",
      Likes: "150 LIKES"
    }
  
   
  ])

  const navigate = useNavigate();
  
  return (
    <>
      {/* <TopBarCommon/> */}
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <div className="container col2-layout">
          <div style={{ paddingTop: 40, paddingLeft: 13, paddingRight: 13 }} className="row">
            <div className="col-lg-8 col-md-7 col-sm-4 animated fadeInUp">
              <p style={{ fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>NEWS</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 breadcrumb text-uppercase wow fadeInUp xs-display-none animated">
             
              <p className="animate_content animated" style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray' }}>HOME</a> <span>|</span> WEB DESIGNING</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ marginBottom: 100 }}>
        {
          data && data.map((val, ind) => {
            return (
              <>
                <div style={{ marginTop: 90 }}>
                  <Link className="no_margin"
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
export default WebDesign;