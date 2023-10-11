import React from "react";
// import './task.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import {Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Style/ContactAs.css';


function ContactAs() {
  return (
    <>
       <div className="container col2-layout">
          <div style={{ paddingTop:40,paddingLeft:13, paddingRight:13  }} className="row Fadein_animation">
            <div className="col-lg-8 col-md-7 col-sm-4 animated fadeInUp">
            <p style={{ fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>CONTACT US</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
            <p className="animate_content animated" style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray',padding:"0px 10px" }}>HOME</a> <span style={{marginRight: 10}}>|</span> ADVISORY BOARD</p>
            </div>
          </div>
        </div>
            <div className='logo'>
            </div>
           
            <div >
           <Row className="d-flex justify-content-center g-4 " style={{textAlign:"center"}}>
        <Col xs lg="3">
       <Card style={{fontWeight: "700",textAlign:"left",marginTop:"25%",fontSize:"large",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "6px",
    marginBottom: "10px",color:"black"}}>
      <Card.Body>INDIA - HEAD OFFICE</Card.Body>
    </Card>
    <p style={{textAlign:"start",fontSize: "20px",
    lineHeight: "30px"}}>205, Brigade Gardens, No. 19, Church Street,<br></br>
      Bangalore. Pin code – 560 001 India</p>
      <h1 className='lines'></h1>
  <p style={{textAlign:"start",marginTop:"5%",fontSize: "17px"}}><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
        </Col>
        
        <Col md="3">
        <Card style={{fontWeight: "700",textAlign:"left", marginTop:"25%",fontSize:"large",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "6px",
    marginBottom: "10px ",color:"black"}}>
      <Card.Body>SAUDI ARABIA - OFFICE</Card.Body>
       </Card>
       <p style={{textAlign:"start",fontSize: "20px",
    lineHeight: "30px"}}>P.O. Box 385038,<br></br>Riyadh 11355, Saudi Arabia</p>
     <h1 className='lines'></h1>
  <p style={{textAlign:"start",marginTop:"5%",fontSize: "17px"}}><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
        </Col>
        <Col xs lg="3">
        <Card style={{fontWeight: "700",textAlign:"left", marginTop:"25%",fontSize:"large",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: "6px",
    marginBottom: "10px",color:"black"}}>
      <Card.Body>UAE - OFFICE</Card.Body>
    </Card>
    <p style={{textAlign:"start",fontSize: "20px",
    lineHeight: "30px"}}>Office 249B, The Galleria,<br></br>Hyatt Regency, Deira, Dubai, UAE</p>
     <h1 className='lines'></h1>
  <p style={{textAlign:"start",marginTop:"5%",fontSize: "17px"}}><b>T.</b> 08047363377<br></br><b>E.</b> support@in.pradeepit.com</p>
        </Col>
      </Row>
      </div>
      <br></br>


<div style={{ textAlign: "center", background: "black", color: "white", justifyContent: "center", alignItems: "center" }}>
                <Container>
                   <h1 style={{marginTop:"3%",paddingTop:"4%"}}>LET’S WORK TOGETHER ON</h1>
                   <h1 style={{paddingTop:"3%"}}>YOUR NEXT PROJECT</h1>
                   <Button variant="outline-light"style={{color:"white",fontSize:"20px",fontWeight:"500",letterSpacing:"4px",marginTop:"3%",borderRadius:"none",width:"27%",height:"8vh",marginBottom:"5%"}} >REQUEST A FREE QUOTE</Button>
                </Container>
            </div>

            <div style={{marginTop:"5%",marginLeft:"7%"}}>
           
            {/* <Container> */}
        
                    <Row>
        <Col  sm={6} xs={12}>
            <Container>
        <div>
            <h1 style={{fontSize:"20px",fontWeight:"650",textAlign:"left"}}>SEND US A MESSAGE</h1><br></br>
            <p style={{fontSize:"20px",textAlign:"left"}}>Please send us a message to get a free quote,<br></br> We would love to respond you within 24 Working hours</p>
          
         </div>
         </Container>
        </Col>
        
        <Col  sm={6} xs={12}>
      <Container>   
         <Form style={{marginLeft:"0%"}} >
<Form.Group className="mb-3" >

<Form.Control placeholder="YOUR NAME"   style={{height:"60px",fontSize:"1.2rem",color:"#E6E6E6",paddingLeft:"3%",paddingTop:"1%"}}/>
</Form.Group>
<Form.Group className="mb-3">


<Form.Control type="email" placeholder="YOUR EMAIL"   style={{height:"60px",fontSize:"1.2rem",color:"#E6E6E6",paddingLeft:"3%"}}/>

</Form.Group>
<Form.Group className="mb-3">
<Form.Control as="textarea" placeholder="YOUR MESSAGE"  style={{height:"20vh",fontSize:"1.2rem",color:"#E6E6E6",paddingLeft:"3%",paddingTop:"2%"}}/>
</Form.Group>
  <Button style={{width:"24%",height:"6vh",textAlign:"center",fontSize:"17px",borderRadius:"1px",marginBottom:"2%",marginTop:"3%",backgroundColor:"black",color:"white" }}variant="outline-secondary">SEND MESSAGE</Button>
</Form>
</Container>

 </Col>
 </Row>
 </div>

 <div style={{background: "#E6E6E6",height:"17vh",paddingTop:"4%",marginTop:"3%" }}>
</div>

<div style={{height:"17vh",background: "black",  }}>
                <Container>
                   <p style={{color: "gray",paddingTop:"6%",textAlign:"start",marginLeft:"-10%"}}>© 25/05/2016 PRADEEPIT CONSULTING SERVICES PVT LTD</p>
                  
                </Container>
            </div> 
       
    </>
  );
}

export default ContactAs;