import React from 'react';
import '../../Style/AboutCompany.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Assets/logo_purple_80.png';

function EngineerBabu() {

  return (
    <>

      {/* <div>
    <Container>
        <div>       
            
   <img src={eb} height='100vh' width='20%' style={{marginLeft:"37%",marginTop:"4%"}}/>
    </div>
    <p style={{textAlign:"center",fontSize:"17px",marginTop:"2%"}}>Engineer Babu is an award-winning IT company that provides web and mobile development services to StartUps, SMEs, Agencies as well as Enterprises</p>
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
            Engineer Babu is an award-winning IT company that provides web and mobile development services to StartUps, SMEs, Agencies as well as Enterprises
          </p>
        </div>
      </Container>
    </>

  );
}

export default EngineerBabu;