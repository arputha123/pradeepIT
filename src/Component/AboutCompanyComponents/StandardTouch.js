import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Images/Standardtouch-logo.png'

function StandardTouch() {

  return (
    <>
      {/* <div> */}
      <Container>
        {/* <h1 style={{textAlign:"center",marginTop:"6%",fontSize:"50px",fontWeight:"700"}}><span style={{color:"red"}}>Standard</span><span style={{color:"black"}}>Touch</span></h1>
    <div>
    <h5 style={{color:"gray",fontSize:"25px",textAlign:"center",marginLeft:"28%",marginTop:"-18%",fontWeight:"bolder"}}><i>e-solutions</i></h5>
        <p style={{textAlign:"center",fontSize:"17px",marginTop:"5%"}}>Standard Touch is a Web Design Company Located in Gulbarga and at Gulf, We offer affordable best quality web development services in Gulbarga.</p>
        </div> */}



        <div style={{ textAlign: "center" }}>
          <img src={Head_img} class="img-fluid cursor_pointer" alt="Responsive image" />

          {/* <h1 className='kouchan'>Kou-Chan</h1>
          <h4 className='building'>B u i l d i n g R e l a t i o n s</h4> */}
          <p style={{
            textAlign: "center", color: "#7f7f7f", marginTop: "2%", fontSize: 13, lineHeight: 2,
            letterSpacing: "0.02em"
          }}>
            Standard Touch is a Web Design Company Located in Gulbarga and at Gulf, We offer affordable best quality web development services in Gulbarga.
          </p>
        </div>
      </Container>
      {/* </div> */}
    </>

  );
}

export default StandardTouch;