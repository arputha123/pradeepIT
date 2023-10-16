import React from 'react';
import '../../Style/AboutCompany.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Assets/logo-h_small.png';

function Tarento() {

  return (
    <>   

{/* <div>
<Container>
    <div>       
        
<h1 style={{textAlign:"center",marginTop:"6%",fontSize:"45px",fontWeight:"300",color:"Black",paddingRight:"4%"}}><img src={image} height='100vh' width='15%' style={{paddingLeft:"6%"}}/>TARENTO</h1>
</div>
<p style={{textAlign:"center",fontSize:"17px",marginTop:"2%"}}>Tarento technologies helps the customers to navigate through the maze of digitalization by no-hassle services in enterprise application, data &amp; information management, and innovative mobile &amp; other custom solutions.</p>
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
            Tarento technologies helps the customers to navigate through the maze of digitalization by no-hassle services in enterprise application, data &amp; information management, and innovative mobile  &amp;  other custom solutions.
          </p>
        </div>
      </Container>
    </>

  );
}

export default Tarento;