import React from 'react';
import '../../Style/Course3.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Assets/convista_group_logo.png';

function ConvistaAg() {
  return (
    <>
      {/* <div> */}
      <Container>
        {/* <h1 style={{textAlign:"center",marginTop:"4%",fontSize:"80px",fontWeight:"700",color:"#009fe3"}}><img src={v} height='120vh' width='29%'/></h1>
    <h5 className='moving'>moving ahead</h5>
        <p style={{textAlign:"center",fontSize:"17px",marginTop:"4%"}}>Convista AG is a Silver Partner and Validated Expertise Partner of SAP AG, it is a trusted international partner for the business and technical integration of SAP</p> */}


        <div style={{ textAlign: "center" }}>
          <img src={Head_img} class="img-fluid cursor_pointer" alt="Responsive image" />

          {/* <h1 className='kouchan'>Kou-Chan</h1>
          <h4 className='building'>B u i l d i n g R e l a t i o n s</h4> */}
          <p style={{
            textAlign: "center", color: "#7f7f7f", marginTop: "2%", fontSize: 13, lineHeight: 2,
            letterSpacing: "0.02em"
          }}>
            Convista AG is a Silver Partner and Validated Expertise Partner of SAP AG, it is a trusted international partner for the business and technical integration of SAP
          </p>
        </div>

      </Container>
      {/* </div> */}

    </>

  );
}

export default ConvistaAg;