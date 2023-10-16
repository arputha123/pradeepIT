import React from 'react';
import '../../Style/Course1.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Head_img from '../../Assets/Kou-Chan-logo-1.png';

function Kouchan() {
  return (
    <>
      <Container>
        <div style={{ textAlign: "center" }}>
          <img src={Head_img} class="img-fluid cursor_pointer" alt="Responsive image" />

          {/* <h1 className='kouchan'>Kou-Chan</h1>
          <h4 className='building'>B u i l d i n g R e l a t i o n s</h4> */}
          <p style={{
            textAlign: "center", color: "#7f7f7f", marginTop: "2%", fontSize: 13, lineHeight: 2,
            letterSpacing: "0.02em"
          }}>
            Kou-Chan commenced the new business activities relating to HR & manpower outsourcing, support services for BPO and call center logistics and warehouse management, operating<br></br> system networking & AMC services in IT software & hardware and Management Consultancy Services.
          </p>
        </div>
      </Container>
    </>

  );
}

export default Kouchan;