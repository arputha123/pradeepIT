import React from "react";
import '../Style/task.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container} from 'react-bootstrap';
import {Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
// import icon from './Images/icon.jpg';
import icon from '../Assets/map.jpg'



function Task() {
  return (
    <>
     
            <div>
              <div>
              <h4 className="contact">C O N T A C T U S
              </h4>
              <hr className='Line'></hr>
            </div>
            <div style={{paddingLeft:"70%",display:"flex",flexDirection:"row",marginTop:"-3%",marginBottom:"3%"}}>
              <h6 className="home">HOME </h6>
              <h6 className="contacts">CONTACT US </h6>
            </div>
            </div>
           
            <div className="background-container"></div>

           <div className="icon">
            {/* <img className=" d-flex justify-content-end" src={icon} /> */}
             </div>
           <Container >
           <Row className="d-flex " >
        <Col  md="4" lg="4">
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
       <p  className="address" >P.O. Box 385038,<br></br>Riyadh 11355, Saudi Arabia</p>
     <hr className='lines'></hr>
  <p className="address1"><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
        </Col>

        <Col md="4" lg="4" >
        <Card className="UAE">
      <Card.Body>UAE - OFFICE</Card.Body>
    </Card>
    <p  className="address">Office 249B, The Galleria,<br></br>Hyatt Regency, Deira, Dubai, UAE</p>
     <hr className='lines'></hr>
  <p className="address1" ><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
        </Col>
      </Row>
      </Container>
      <br></br>


<div className="content" >
                <Container>
                   <h1 style={{marginTop:"3%",paddingTop:"4%"}}>LET’S WORK TOGETHER ON</h1>
                   <h1 style={{paddingTop:"3%"}}>YOUR NEXT PROJECT</h1>
                   <button className= "Request" >REQUEST A FREE QUOTE</button>
                  </Container>
            </div>

<div style={{marginTop:"5%",marginLeft:"7%"}}>
          <Row>
        <Col  sm={6} xs={12}>
            <Container>
        <div>
            <h1 className="message">SEND US A MESSAGE</h1><br></br>
            <p  className="para">Please send us a message to get a free quote,<br></br> We would love to respond you within 24 Working hours</p>
         </div>
         </Container>
        </Col>
        
        <Col  sm={6} xs={12}>
      <Container>   
         <Form >
<Form.Group className="mb-3" >
  <Form.Control className="placehold" placeholder="YOUR NAME"   />
</Form.Group>

<Form.Group className="mb-3">
<Form.Control className="placehold" type="email" placeholder="YOUR EMAIL"   />
</Form.Group>

<Form.Group className="mb-3">
<Form.Control className="area" as="textarea" placeholder="YOUR MESSAGE"  style={{}}/>
</Form.Group>

  <button className="Send" >SEND MESSAGE</button>
</Form>
</Container>

 </Col>
 </Row>
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
