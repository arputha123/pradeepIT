import React from 'react';
import '../../Style/AboutCompany.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Assets/logo.png';

function PogeyanTechnologies() {

  return (
    <>
      {/* <div>
    <Container>
    <div>       
        
        <h1 style={{textAlign:"center",marginTop:"6%",fontSize:"45px",fontWeight:"500",color:"#ff632d",paddingRight:"4%"}}><img src={pogeyan} height='60vh' width='10%' style={{paddingLeft:"6%"}}/>POGEYAN</h1>
        </div>
    <p style={{textAlign:"center",fontSize:"17px",marginTop:"2%"}}>Pogeyan Technologies is a global provider of Product consulting services. The company is focused on delivering value through integrated solutions for data intensive business processes that help enterprises across the world overcome their business challenges.</p>
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
            Pogeyan Technologies is a global provider of Product consulting services. The company is focused on delivering value through integrated solutions for data intensive business processes that help enterprises across the world overcome their business challenges.
          </p>
        </div>
      </Container>
    </>

  );
}

export default PogeyanTechnologies;