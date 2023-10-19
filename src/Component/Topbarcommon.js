import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap-submenu/dist/index.css"
import '../Style/topbar.css';
import logo2 from '../Images/download.png'

function TopBarComponent() {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 1) {
      setFix(true);
    }
    else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [isOutsourcingMenuOpen, setIsOutsourcingMenuOpen] = useState(false);
  const [isWebdevelopmentMenuOpen, setIsWebdevelopmentMenuOpen] = useState(false);
  const [isTraningMenuOpen, setIsTraningMenuOpen] = useState(false);
  const [isDigitalMenuOpen, setIsDigitalMenuOpen] = useState(false);


  const handleMouseEnterOutsourcing = () => {
    setIsOutsourcingMenuOpen(true);
    setIsWebdevelopmentMenuOpen(true);
    setIsTraningMenuOpen(true);
    setIsDigitalMenuOpen(true);
  };

  const handleMouseLeaveOutsourcing = () => {
    setIsOutsourcingMenuOpen(false);
    setIsWebdevelopmentMenuOpen(false);
    setIsTraningMenuOpen(false);
    setIsDigitalMenuOpen(false);
  };


  return (
    <>
      <div className='topbarall'>
        <Navbar expand="lg" variant=""
    
          fixed='top'>
         

            <Navbar.Brand href="#home">

                      <div className='logonormal'>
          <img  src={logo2} width={230} height={60}/>
         </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='navbar-collapse collapse' id="basic-navbar-nav">


              <Nav className="topbarnav mx-auto gap-4 " >
               
                <NavDropdown show={isCompanyDropdownOpen}
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  title={<label    className='colorchange' >COMPANY</label>}
                  menuVariant="dark"
                  className='colorchange'
                >
                  <NavDropdown.Item href="/AboutCompany">ABOUT COMPANY</NavDropdown.Item>
                  <NavDropdown.Item href="/AdvisoryBoard">ADVISORY BOARD</NavDropdown.Item>
                  <NavDropdown.Item href="#">TEAM MEMBERS</NavDropdown.Item>
                </NavDropdown>




                <Dropdown className='services'
                  show={isServicesDropdownOpen}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <Dropdown.Toggle as={Nav.Link} style={{ textDecoration: "none" }} ><label    className='colorchange' >SERVICES</label></Dropdown.Toggle>
                  <Dropdown.Menu
                    as='ul'
                    className='dropdown-menu'
                    style={{padding:"5px",margin:"0px"}}
                  >
                    <li
                      onMouseEnter={() => setIsOutsourcingMenuOpen(true)}
                      onMouseLeave={() => setIsOutsourcingMenuOpen(false)}
                      className='submenu-item' style={{padding:"5px 5px"}}
                    >
                      <Nav.Link style={{backgroundColor:"black",color:"white",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label className={fix ? 'navbarColorChange ' : 'navbarColor'}  >OUTSOURCING</label> </Nav.Link>
                      {isOutsourcingMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 0,
                            backgroundColor: 'black',
                            color: 'white',
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>SAP CX OUTSOURCING</Nav.Link>
                          </li>
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>JAVA OUTSOURCING</Nav.Link>
                          </li>
                        </ul>
                      )}
                    </li>
  

                 
                    
                    <li
                      onMouseEnter={() => setIsWebdevelopmentMenuOpen(true)}
                      onMouseLeave={() => setIsWebdevelopmentMenuOpen(false)}
                      className='submenu-item' style={{padding:"5px 5px"}}
                    >
                      <Nav.Link style={{backgroundColor:"black",color:"white",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label    className='colorchange' >WEB DEVELOPMENT</label> </Nav.Link>
                      {isWebdevelopmentMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 0,
                            backgroundColor: 'black',
                            color: 'white',
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>E-COMMERCE + CMS</Nav.Link>
                          </li>
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>CMS WEB DEVELOPMENT</Nav.Link>
                          </li>
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>CMS + PAYMENT GATEWAY</Nav.Link>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li
                      onMouseEnter={() => setIsTraningMenuOpen(true)}
                      onMouseLeave={() => setIsTraningMenuOpen(false)}
                      className='submenu-item' style={{padding:"5px 5px"}}
                    >
                      <Nav.Link style={{backgroundColor:"black",color:"white",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label    className='colorchange' >TRANING</label> </Nav.Link>
                      {isTraningMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 0,
                            backgroundColor: 'black',
                            color: 'white',
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>CORPORATE TRANING</Nav.Link>
                          </li>
            
                        </ul>
                      )}
                    </li>

                    <li
                      onMouseEnter={() => setIsDigitalMenuOpen(true)}
                      onMouseLeave={() => setIsDigitalMenuOpen(false)}
                      className='submenu-item' style={{padding:"5px 5px"}}
                    >
                      <Nav.Link style={{backgroundColor:"black",color:"white",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label    className='colorchange' >DIGITAL MARGETING</label> </Nav.Link>
                      {isDigitalMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 0,
                            backgroundColor: 'black',
                            color: 'white',
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                          <li>
                            <Nav.Link href='#' style={{color:"white",fontSize:11,textDecoration:"none"}}>DIGITAL MARGETING SERVICES</Nav.Link>
                          </li>
            
                        </ul>
                      )}
                    </li>

                    <NavDropdown.Item href="#video-production">VIDEO PRODUCTION</NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>



                <Nav.Link href="/Contactus"><label    className='colorchange'>BLOGS</label></Nav.Link>
                <Nav.Link href="/NewsView"><label    className='colorchange'>NEWS</label></Nav.Link>
                <NavDropdown
                  show={isDropdownOpen}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  title={<label    className='colorchange'>RECRUIT</label>}
                  menuVariant="dark"

                >
                  <NavDropdown.Item href="#">CAREERS</NavDropdown.Item>
                  <NavDropdown.Item href="#">PROCESS</NavDropdown.Item>
                  <NavDropdown.Item href="#">OUTING</NavDropdown.Item>

                </NavDropdown>
                <Nav.Link href="/Contactus"><label    className='colorchange'>CONTACT US</label></Nav.Link>

              </Nav>

            </Navbar.Collapse>
        
        </Navbar>
      </div>
    </>
  );
}

export default TopBarComponent;

