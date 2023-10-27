import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile2 from '../../Assets/Profile2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { AiOutlineLine } from "react-icons/ai";
import './TeamMembers.css';
import TopBarCommon from "../Topbarcommon";

function TeamMembers() {
    useEffect(() => {
        const appearOptions = {
          threshold : 0.5
        };
        const faders = document.querySelectorAll('.fade-in'); 
        const appearOnScro1l = new IntersectionObserver(function(entries,appearOnScrool){
          entries.forEach(entry =>{
            if(!entry.isIntersecting){
              return;
            }
            else{
              entry.target.classList.add('appear');
              appearOnScro1l.unobserve(entry.target);
            }
          })
        }, appearOptions)
        faders.forEach(fader =>{
          appearOnScro1l.observe(fader);
        })
      });

   

    return (
<div style={{paddingTop:'17vh'}}>
<TopBarCommon/>
        <div style={{marginBottom:80}}>

            <div style={{ paddingTop: "30px" }}>
                <Container >
                    <Row className="fade-in">
                        <Col > <p style={{ textransform: "uppercase", paddingLeft: "30px", fontZize: "18px", fontWeight: " 600", letterSpacing: "4px" }}>TEAM<span style={{ paddingLeft: "7px" }}>  MEMBERS </span>  </p></Col>
                        <Col className="d-none d-md-block" md="auto" style={{ fontSize: "11px", color: "#575757", fontFamily: 'Open Sans, sans-serif', letterSpacing: "2px",fontWeight:400 }}>
                        <a href="/" style={{ textDecoration: 'none', color: 'gray' }}>HOME</a>   <span style={{ paddingLeft: "15px" }}>|</span>
                        </Col>
                        <Col className="d-none d-md-block" xs lg="2" style={{ fontSize: "11px", color: "#575757", fontFamily: 'Open Sans, sans-serif', letterSpacing: "2px",fontWeight:400 }}>
                            TEAM MEMBERS
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="g" style={{ textAlign: "center", background: "black", color: "white", justifyContent: "center", alignItems: "center", fontFamily: 'Open Sans, sans-serif' }}>
                <Container>

                    <Row className="justify-content-md-center" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                    <Col  md className="text-center mb-5">
                            <p style={{ fontSize: "36px" }}>40+</p>   
                            <p style={{ fontSize: "11px", letterSpacing: "2px" }}> SAP CX</p>
                        </Col>
                        <Col  md  className="d-none d-md-block">
                            <span  style={{ fontSize: "50px", color: "#626262" }}>+</span>
                        </Col>
                        <Col md  className="text-center mb-5">
                            <p style={{ fontSize: "36px" }}>10</p>
                            <p style={{ fontSize: "11px", letterSpacing: "2px" }}> ANDROID&IOS
                                DEVELOPERS</p>
                        </Col>
                        <Col   md  className="d-none d-md-block">
                            <span style={{ fontSize: "50px", color: "#626262" }}>+</span>
                        </Col>
                        <Col  md  className="text-center mb-5">
                            <p style={{ fontSize: "36px" }}>19</p>
                            <p style={{ fontSize: "11px", letterSpacing: "2px" }}> WORDPRESS &
                                WOOCOMMERCE &
                                MAGENTO </p>
                        </Col>
                        <Col md   className="d-none d-md-block">
                            <span style={{ fontSize: "50px", color: "#626262" }}>+</span>
                        </Col>
                        <Col md  className="text-center mb-5">
                            <p style={{ fontSize: "36px" }}> 280+</p>
                            <p style={{ fontSize: "11px", letterSpacing: "2px" }}> FREELANCERS+JAVA 
                                +PHP+GRAPHIC 
                                DESIGNERS</p>
                        </Col>
                    </Row>
                </Container>
            </div>



            <Container fluid className="Content">
                <div style={{ lineHeight: "23px", paddingTop: "10vh", fontSize: "13px", color: " #626262", fontFamily: 'Open Sans, sans-serif', letterSpacing: "0.02em", webkitFontSmoothing: "antialiased", lineHeight: "23px" }}>
                    <p > We believe the systematic discipline will emerges into proper flow of business. We have systematically developed a team of highly qualified and experienced consultants and engineers, with an enviable reputation for delivering quality of service at all levels. All our people combine excellent academic qualifications with real time experience. They have real time experience on problem solving, the ability to think differently and creatively in identifying the best solutions for our clients, and the ability to convey these in a clear and efficient manner.</p>

                    <p >we are grateful to the high value placed on education, each member of our team is not just a coder, but a highly educated professional who has comprehensive knowledge and experience in all stages of the software development life cycle process</p>

                </div>
                <div>
                    <h2 style={{ paddingTop: "10vh", fontFamily: "LatoLight",fontSize:36 }}>BOARD OF DIRECTORS</h2>
                    <hr />
                   

                    <Row style={{ fontSize: "12 px", fontFamily: "Open Sans, sans-serif", letterSpacing: "2px", paddingTop: "20px", textAlign: "center" }}>
                        <Col md={3}  xs={12} >
                            <p className="Name" style={{paddingTop: "5vh", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> GEETAARI</p>
                             <p className="Name"style={{  color: "#626262", lineHeight:"0cm" }}>   DIRECTOR</p>
                        </Col>
                        <Col md={3}  xs={12}>
                            <img src={Profile2} alt="Profile2" style={{ width: "100%", height: "auto" }} />
                        </Col>
                        <Col md={3}  xs={12}>
                           <p className="Name" style={{ paddingTop: "5vh",fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}>  MAHADEVAPPA</p>
                           <p className="Name" style={{  color: "#626262", lineHeight:"0cm"  }} >   DIRECTOR</p>
                        </Col>
                        <Col md={3}  xs={12}>
                            <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                        </Col>
                    </Row>

                </div>
                <div>
                    <h2 style={{ paddingTop: "10vh", fontFamily: "LatoLight",fontSize:36 }}>ARCHITECTS</h2>
                    <hr />
                    <Row style={{ fontSize: "12px", textAlign: "center", fontFamily: "Open Sans, sans-serif", letterSpacing: "2px", paddingTop: "20px" }}>
                        <Col md={6}  lg={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay" ><AiOutlineLine style={{ color: "white", width: "30px", height: "10vh" }} /></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{ fontWeight: "bold", color: "#000000",paddingTop: "30px", lineHeight:"0cm" }}> VINDKUMAR BELI</p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} > SENIOR SOLUTION ARCHITECT</p>
                        </Col>
                        <Col md={6} lg={4}  xs={12}style={{ paddingTop: "20px" }} >
                            <div className="image-container">
                                <div className="image-overlay"><AiOutlineLine style={{ color: "white", width: "30px", height: "10vh" }} /></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{ paddingTop: "30px",fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}> HAREESH</p>
                            <p style={{  color: "#626262", lineHeight:"0cm"  }} >  ASSOCIATE ARCHITECT</p>
                        </Col>
                        <Col md={4} xs={12}  style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{ paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}> PRABHANJAN</p>
                           <p style={{ color: "#626262", lineHeight:"0cm"  }} >  ASSOCIATE ARCHITECT</p>
                        </Col>

                        <Col md={4} xs={12} style={{ paddingTop: "20px" }} >
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}>  HAMZAHALI</p>
                            <p style={{  color: "#626262", lineHeight:"0cm"  }} > SENIOR SOLUTION ARCHITECT</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h2 style={{ paddingTop: "10vh", fontFamily: "LatoLight",fontSize:36 }}> MANAGERS</h2>
                    <hr />
                    <Row style={{ fontSize: "12px", fontFamily: "Open Sans, sans-serif", letterSpacing: "2px", paddingTop: "20px" }}>
                        <Col md={6} lg={4} xs={12} >
                            <div className="image-container">
                                <div className="image-overlay" style={{ textAlign: "center" }}><AiOutlineLine style={{ color: "white", width: "30px", height: "10vh" }} /></div>
                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> ABDUL MANNAN ALI</p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} > MANAGER & LIFE COACH</p>
                            <div className='d-flex justify-content-center' style={{fontSize:15}}>
                                
                                    <a href="https://pradeepit.com/team-members/" className="facebook social me-5">
                                        <FontAwesomeIcon icon={faFacebook} className="icons-icons" />
                                    </a>
                                    <a href="https://pradeepit.com/team-members/" className="instagram social me-5">
                                        <FontAwesomeIcon icon={faGoogle} className="icons-icons" />
                                    </a>
                                    <a href="https://pradeepit.com/team-members/" className="twitter social me-5">
                                        <FontAwesomeIcon icon={faTwitter} className="icons-icons" />
                                    </a>
                              
                            </div>

                        </Col>
                        <Col md={6}  lg={4} xs={12} >
                            <div className="image-container">
                                <div className="image-overlay" style={{ textAlign: "center" }}><AiOutlineLine style={{ color: "white", width: "30px", height: "10vh" }} /></div>
                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> PUNEETHKUMAR</p> 
                            <p style={{  color: "#626262", lineHeight:"0cm" }} > MANAGER & DELIVERYHEA   </p>
                                <div className='d-flex justify-content-center' style={{fontSize:15}}>
                                
                                <a href="https://pradeepit.com/team-members/" className="facebook social me-5">
                                    <FontAwesomeIcon icon={faFacebook} className="icons-icons" />
                                </a>
                                <a href="https://pradeepit.com/team-members/" className="instagram social me-5">
                                    <FontAwesomeIcon icon={faGoogle} className="icons-icons" />
                                </a>
                                <a href="https://pradeepit.com/team-members/" className="twitter social me-5">
                                    <FontAwesomeIcon icon={faTwitter} className="icons-icons" />
                                </a>
                          
                        </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h2 style={{ paddingTop: "10vh", fontFamily: "LatoLight",fontSize:36 }}>SELECTED TEAM MEMBERS</h2>

                    <hr />
                    <Row style={{ fontSize: "12px", fontFamily: "Open Sans, sans-serif", letterSpacing: "2px", paddingTop: "20px" }}>
                        <Col md={6}lg={4} xs={12} >
                            <div className="image-container" style={{ paddingTop: "20px" }}>
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{ paddingTop: "30px",fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> KIRANB</p>
                            <p style={{  color: "#626262", lineHeight:"0cm"  }} >  SENIOR SOLUTION ARCHITECT</p>
                        </Col>
                        <Col md={6} lg={4} xs={12} >
                            <div className="image-container" style={{ paddingTop: "20px" }}>
                                <div className="image-overlay" style={{ textAlign: "center" }}><AiOutlineLine style={{ color: "white", width: "30px", height: "10vh" }} /></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}>PRAKAH PATIL </p>
                           <p style={{  color: "#626262", lineHeight:"0cm" }} >  TECHNICAL LEAD</p>
                        </Col>
                        <Col md={4} lg={4} xs={12} >
                            <div className="image-container" style={{ paddingTop: "20px" }}>
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{ paddingTop: "30px",fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}>JITENDRIY AMEHER</p>
                            <p style={{  color: "#626262", lineHeight:"0cm"  }} >  ASSOCIATE ARCHITECT</p>
                        </Col>
                        <Col md={4} xs={12} >
                            <div className="image-container" style={{ paddingTop: "20px" }}>
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}>SURESHAT TANOOR</p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} >   MM CONSULTANT</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }} >
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000" , lineHeight:"0cm" }}>RADHA T Y</p>
                           <p style={{  color: "#626262", lineHeight:"0cm"  }} >  PEOPLE STRATEGY </p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000" , lineHeight:"0cm" }}> ANUPKUMAR METI</p>
                            <p style={{  color: "#626262", lineHeight:"0cm"  }} >  TECHNICAL LEAD</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }} >
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                         <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}> RASOOL</p>
                         <p style={{  color: "#626262", lineHeight:"0cm"  }} >   SENIOR SOLUTION ARCHITECT</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{paddingTop: "30px",  fontWeight: "bold", color: "#000000", lineHeight:"0cm"  }}>ADITYA GHATIKAR</p>
                           <p style={{ color: "#626262" , lineHeight:"0cm" }} >  SOFTWARE ENGINEER</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }} >
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                          <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> ADITYA SRIVASTAV </p>
                          <p style={{  color: "#626262", lineHeight:"0cm" }} >   SOFTWARE ENGINEER</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> SHIVARAJ YADAGIRI</p>
                           <p style={{  color: "#626262", lineHeight:"0cm" }} >   ANDROID DEVELOPER</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> LAKSHMI</p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} >  IOS DEVELOPER</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000" , lineHeight:"0cm"}}> NEELANGOUDA</p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} >   SOFTWARE ENGINEER</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000" , lineHeight:"0cm"}}>ARUN </p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} > SOFTWARE ENGINEER</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> GIRISHHIREMATH</p>
                           <p style={{  color: "#626262", lineHeight:"0cm" }} >  ART DIRECTOR</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{ paddingTop: "30px",fontWeight: "bold", lineHeight:"0cm" }}> SHRISHAIL</p>
                           <p style={{  color: "#626262" , lineHeight:"0cm"}} >  UX/UI SENIOR CONSULTANT</p>
                        </Col>
                        <Col md={4} xs={12} style={{ paddingTop: "20px" }}>
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                            <p style={{paddingTop: "30px", fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}>NANDAN </p>
                            <p style={{  color: "#626262", lineHeight:"0cm" }} >    SOFTWARE ENGINEER</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h2 style={{ paddingTop: "10vh", fontFamily: "LatoLight" ,fontSize:36}}>FINANCE MANAGEMENT</h2>
                    <hr />
                    <Row style={{ paddingTop: "20px", fontSize: "12px", textAlign: "center", fontFamily: "Open Sans, sans-serif", letterSpacing: "2px" }}>
                        <Col md={6} lg={4} xs={12} >
                            <div className="image-container">
                                <div className="image-overlay"></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                           <p style={{ paddingTop: "30px",fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}> SUNIKUMAR</p>
                           <p style={{  color: "#626262", lineHeight:"0cm" }} >   TAX CONSULTANT</p>
                        </Col>
                        <Col md={6}lg={4}  xs={12} >
                            <div className="image-container">
                                <div className="image-overlay"><AiOutlineLine style={{ color: "white", width: "30px", height: "10vh" }} /></div>

                                <img src={Profile2} alt="Profile2" style={{ width: "100%" }} />
                            </div>
                          <p style={{  paddingTop: "30px",fontWeight: "bold", color: "#000000", lineHeight:"0cm" }}>YAMUNA</p>
                          <p style={{ color: "#626262", lineHeight:"0cm" }} >    TAX CONSULTANT</p>
                        </Col>
                    </Row>
                </div>
            </Container>

            <div style={{ paddingTop: "30px" }}>
                <div className="parallax-container" >

                    <Row className="g-0 justify-content-end" >
                        <Col md={12} lg={6} className="Employess" style={{ backgroundColor: "#e6af2a", padding: "65px" }}>

                            <h1 style={{ color: "white", fontFamily: " inherit", letterSpacing: "1px}" }}>THE TALENT BEHIND<br />
                                THE REPUTATION</h1>
                            <p style={{ fontSize: "13px" }}>Twelve years, two companies, 150+ employees list of<br /> fastest-growing companies later, We have learned<br /> that the only way to build a company with great<br /> success and scale is to build a great team.</p>
                            <p style={{ fontSize: "13px" }}>No matter how smart, talented, driven, or<br /> passionate you are, your success as an entrepreneur<br /> depends on your ability to build and inspire a team.<br /> A successful leader is one who can spur his or her<br /> team members to work well together toward a<br /> common vision and goals</p>
                            <div class="d-flex justify-content-start">

                                <button className="btn services-button">
                                    OUR SERVICES
                                </button>
                                <button className="btn services-button" style={{ marginLeft: "20px" }}>
                                    LET'S TALK
                                </button>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
            <div>
                <h3 style={{ textAlign: "center", paddingTop: "20vh" }}>CREATIVE THINKERS, CLEVER DEVELOPER AND<br /> MARKETING SUPERHEROES APPLY HERE</h3>
                <div class="d-flex justify-content-center">

                    <button className="btn " id="custom-button">
                        APPLY NOW!
                    </button>

                </div>
            </div>


        </div>
        </div>

    )
}

export default TeamMembers;