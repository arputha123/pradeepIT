import React, { useState } from 'react';
import '../Style/AboutCompany.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Row, Col } from 'react-bootstrap';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { FaSignal } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Course1 from './AboutCompanyComponents/Kouchan';
import Course2 from './AboutCompanyComponents/StandardTouch';
import Course3 from './AboutCompanyComponents/ConvistaAg';
import Course4 from './AboutCompanyComponents/Tarento';
import Course5 from './AboutCompanyComponents/EngineerBabu';
import Course6 from './AboutCompanyComponents/PogeyanTechnologies';
import Course7 from './AboutCompanyComponents/EmbiTelTecnnologies';
import TopBarComponent from './topbar';

function AboutCompany() {
  const [shoeTabs, setShowTabs] = useState("KOU CHAN")

  const Tabonclick = (e) => {
    console.log("e", e.target.name);
    setShowTabs(e.target.name);
  }
  return (
    <>
      <TopBarComponent />
      <div style={{ borderTop: "1px solid #e5e5e5" }} />
      <div className="container col2-layout">
        <div style={{ paddingTop: 40, paddingLeft: 13, paddingRight: 13 }} className="row Fadein_animation">
          <div className="col-lg-8 col-md-7 col-sm-4 animated fadeInUp">
            <p style={{ fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>ABOUT COMPANY</p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">

            <p className="animate_content animated" style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray', padding: "0px 10px" }}>HOME</a> <span style={{ marginRight: 10 }}>|</span> ADVISORY BOARD</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#000000", paddingTop: 30, paddingBottom: 30, textAlign: "center" }} className='d-flex justify-content-center'>
        <div style={{ width: "80%" }}>
          <div className='year'>
            <span>10</span>
            <div style={{ fontSize: 20 }}>year</div>
          </div>
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "#ffffff", fontSize: 15, lineHeight: 2 }}>
              PRADEEPIT is the foremost ISO Certified 9001: 2015 IT Company, which has marked its flagship in 3+ Countries With 300+ Projects Successfully Accomplished and its core focus on inhouse open source Product development. And onsite, nearshore & offshore SAP S/4 HANA, ERP, CRM & SAP customer experience development services are geared to deliver results that you expect from outsourcing IT services.
            </span>
          </p>
        </div>
      </div>
      <h3 className='head'>OUR PARTNERS</h3>
      <h1 className='line'></h1>

      <Container>
        <Nav fill variant="tabs" >
          <Nav.Item className='tab'>
            <Nav.Link name="KOU CHAN" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "KOU CHAN" ? true : false}> KOU CHAN</Nav.Link>
          </Nav.Item>
          <Nav.Item className='tab' >
            <Nav.Link name="STANDARD TOUCH" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "STANDARD TOUCH" ? true : false}>STANDARD TOUCH</Nav.Link>
          </Nav.Item>
          <Nav.Item className='tab' >
            <Nav.Link name="CONVISTA AG" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "CONVISTA AG" ? true : false}>CONVISTA AG</Nav.Link>
          </Nav.Item>
          <Nav.Item className='tab' >
            <Nav.Link name="TARENTO" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "TARENTO" ? true : false}>TARENTO</Nav.Link>
          </Nav.Item>
          <Nav.Item className='tab' >
            <Nav.Link name="ENGINEER BABU" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "ENGINEER BABU" ? true : false}>ENGINEER BABU</Nav.Link>
          </Nav.Item>
          <Nav.Item className='tab' >
            <Nav.Link name="POGEYAN TECHNOLOGIES" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "POGEYAN TECHNOLOGIES" ? true : false}>POGEYAN TECHNOLOGIES</Nav.Link>
          </Nav.Item>
          <Nav.Item className='tab' >
            <Nav.Link name="EMBITEL TECHNOLOGIES" style={{ textDecoration: 'none' }} onClick={(e) => Tabonclick(e)} active={shoeTabs == "EMBITEL TECHNOLOGIES" ? true : false}>EMBITEL TECHNOLOGIES</Nav.Link>
          </Nav.Item>

        </Nav>
      </Container>
      <div style={{ marginTop: 20, marginBottom: "7%" }}>
        {
          shoeTabs == "KOU CHAN" ?
            <Course1 /> :
            shoeTabs == "STANDARD TOUCH" ?
              <Course2 /> :
              shoeTabs == "CONVISTA AG" ?
                <Course3 /> :
                shoeTabs == "TARENTO" ?
                  <Course4 /> :
                  shoeTabs == "ENGINEER BABU" ?
                    <Course5 /> :
                    shoeTabs == "POGEYAN TECHNOLOGIES" ?
                      <Course6 /> :
                      shoeTabs == "EMBITEL TECHNOLOGIES" ?
                        <Course7 /> : ""
        }
      </div>
      <div style={{ backgroundColor: "#000000", paddingTop: 30, paddingBottom: 30, textAlign: "center" }} className='d-flex justify-content-center'>
        <div style={{ width: "80%" }}>
          <p style={{ textAlign: "center" }}>
            <span style={{ color: "#ffffff", fontSize: 15, lineHeight: 2 }}>
              We focus on Open Source development on Android & JEE Enterprise Application Development, SAP S/4 HANA, ERP, CRM and SAP Customer Experience technologies. With an objective to solve complex problems for customers, the firm specializes in outsourced product development and Outsourcing IT Service for SAP customer experience custom development.
            </span>
          </p>
        </div>
      </div>
      <h3 className='head'>WHY CHOOSE US?</h3>
      <h1 className='line'></h1>
      <Container className='mt-5'>
        <Row style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', textAlign: "center" }} >
          <Col md={3} sm={6} lg={3} >
            <div className='icon1' >
              <BsFillHandThumbsUpFill />
            </div>
            <h5>RELIABLE</h5><br></br>
            <p className='body_text'>PRADEEP IT Solutions is a renowned offshore company. We believe in building and maintaining long term relationships with all our clients.</p>
          </Col>
          <Col md={3} sm={6} lg={3}>
            <Container>
              <div className='icon1' >
                <GiArcheryTarget />
              </div>
              <h5>SOLUTIONS</h5><br></br>
              <p className='body_text'>We endeavor to offer you best solutions in order to acquire your maximum satisfaction. We are the masters in offering effective software development solutions.</p>

            </Container>
          </Col>
          <Col md={3} sm={6} lg={3}>
            <Container>
              <div className='icon1' >
                <FaSignal />
              </div>
              <h5 >EXPERIENCE</h5><br></br>
              <p className='body_text'>We are the pioneer in lambasting problems like web or software development etc. Our experts handle your assigned projects prudently.</p>

            </Container>
          </Col>
          <Col md={3} sm={6} lg={3}>
            <Container>
              <div className='icon1' >
                <FaIndianRupeeSign />
              </div>
              <h5 >AFFORDABLE</h5><br></br>
              <p className='body_text'>We have provided best plus affordable web development services to numerous large as well as medium entrepreneurs.</p>

            </Container>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "#f6f6f6", paddingTop: 90, marginTop: 30 }} />
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

  );
}

export default AboutCompany;