import React from 'react';
import '../../Style/AboutCompany.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Images/embitel-logo2.jpg';

function EmbiTelTecnnologies() {
  return (
    <>
      {/* <div>
    <Container>
    <div>       
            
            <h1 style={{textAlign:"center",marginTop:"6%",fontSize:"80px",fontWeight:"900",color:"#f78022",paddingRight:"6%"}}><img src={embitel} height='100vh' width='15%' style={{paddingLeft:"6%"}}/>embitel</h1>
            <h5 style={{color:"gray",fontSize:"24px",textAlign:"center",marginLeft:"13%",marginTop:"-20%",fontWeight:"bold"}}>delivered with passion</h5>
            </div>
            <p style={{textAlign:"center",fontSize:"17px",marginTop:"4%"}}>Embitel Technologies is known for its cutting edge and innovative software solutions. We offer top-of-class services in product engineering, digital commerce and mobility/IoT, with a unique mix of embedded tech + mobility/IoT, and digital commerce + mobility/IoT..</p>
    </Container>
</div> */}

      <Container>
        <div style={{ textAlign: "center" }}>
          <img src={Head_img} class="img-fluid cursor_pointer" alt="Responsive image" />

          {/* <h1 className='kouchan'>Kou-Chan</h1>
          <h4 className='building'>B u i l d i n g R e l a t i o n s</h4> */}
          <p style={{
            textAlign: "center", color: "#7f7f7f", marginTop: "2%", fontSize: 13, lineHeight: 2,
            letterSpacing: "0.02em"
          }}>
            Embitel Technologies is known for its cutting edge and innovative software solutions. We offer top-of-class services in product engineering, digital commerce and mobility/IoT, with a unique mix of embedded tech + mobility/IoT, and digital commerce + mobility/IoT.
          </p>
        </div>
      </Container>


    </>

  );
}

export default EmbiTelTecnnologies;