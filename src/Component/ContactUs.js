import React from "react";
import '../Style/ContactUs.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import MapContainer from './MapAPI';
import TopBarCommon from "./Topbarcommon";


function Task() {
  return (
    <>
<TopBarCommon/>
      <div className="container col2-layout">
        <div style={{ paddingTop: 40, paddingLeft: 13, paddingRight: 13 }} className="row Fadein_animation">
          <div className="col-lg-8 col-md-7 col-sm-4 animated fadeInUp">
            <p style={{ fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>CONTACT US</p>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <p className="animate_content animated" style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray', padding: "0px 10px" }}>HOME</a> <span style={{ marginRight: 10 }}>|</span> Contact us</p>
          </div>
        </div>
      </div>

      <div className="background-container">
        <MapContainer></MapContainer>
      </div>
      <Container >
        <Row className="d-flex " >
          <Col md="4" lg="4">
            <Card className="india">
              <Card.Body>INDIA - HEAD OFFICE</Card.Body>
            </Card>
            <p className="address">205, Brigade Gardens, No. 19, Church Street,<br></br>
              Bangalore. Pin code – 560 001 India</p>
            <hr className='lines'></hr>
            <p className="address1" ><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
          </Col>

          <Col md="4" lg="4">
            <Card className="india" >
              <Card.Body>SAUDI ARABIA - OFFICE</Card.Body>
            </Card>
            <p className="address" >P.O. Box 385038,<br></br>Riyadh 11355, Saudi Arabia</p>
            <hr className='lines'></hr>
            <p className="address1"><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
          </Col>

          <Col md="4" lg="4" >
            <Card className="india">
              <Card.Body>UAE - OFFICE</Card.Body>
            </Card>
            <p className="address">Office 249B, The Galleria,<br></br>Hyatt Regency, Deira, Dubai, UAE</p>
            <hr className='lines'></hr>
            <p className="address1" ><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
          </Col>
        </Row>
      </Container>
      <br></br>

      <div className="content1" >
        <h1 style={{ marginTop: "3%", paddingTop: "4%" }}>LET’S WORK TOGETHER ON</h1>
        <h1 style={{ paddingTop: "3%" }}>YOUR NEXT PROJECT</h1>
        <button className="Request" >REQUEST A FREE QUOTE</button>

      </div>

      <div style={{ marginTop: "5%" }}>
        <Container>
          <Row>
            <Col sm={6} xs={12}>
              <div>
                <h1 className="message">SEND US A MESSAGE</h1><br></br>
                <p className="para">Please send us a message to get a free quote,<br></br> We would love to respond you within 24 Working hours</p>
              </div>
            </Col>

            <Col sm={6} xs={12}>
              <Form >
                <Form.Group className="mb-3" >
                  <Form.Control className="placehold" placeholder="YOUR NAME" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control className="placehold" type="email" placeholder="YOUR EMAIL" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control className="area1" as="textarea" placeholder="YOUR MESSAGE" />
                </Form.Group>

                <button className="Send" >SEND MESSAGE</button>
              </Form>

            </Col>
          </Row>
        </Container>
      </div>

      <div className="grayfoot" >
      </div>

      <div className="footer">
        <Container>
          <p className="PVT" >© 25/05/2016 PRADEEPIT CONSULTING SERVICES PVT LTD</p>
        </Container>
      </div>

    </>
  );
}

export default Task;


