import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "react-bootstrap-submenu/dist/index.css";
import '../Style/topBarComponent.css'
import logo2 from '../Images/download.png'

function TopBarCommon() {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const [isOutsourcingMenuOpen, setIsOutsourcingMenuOpen] = useState(false);
  const [isWebdevelopmentMenuOpen, setIsWebdevelopmentMenuOpen] = useState(false);
  const [isTraningMenuOpen, setIsTraningMenuOpen] = useState(false);
  const [isDigitalMenuOpen, setIsDigitalMenuOpen] = useState(false);

  return (
    <>
      <div>
        <Navbar expand="lg" variant=""
        className='topbarcomponentMain'
          fixed='top'
          >

          <Navbar.Brand href="#home">
            <img src={logo2} width={230} height={60}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='navbar-collapse collapse' id="basic-navbar-nav">


            <Nav className="mx-auto gap-4 topbarComponentnav" >

              <NavDropdown show={isCompanyDropdownOpen}
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                title={<label className='topbarComponentColor'>COMPANY</label>}
                menuVariant="dark"
              >
                <NavDropdown.Item href="/AboutCompany">ABOUT COMPANY</NavDropdown.Item>
                <NavDropdown.Item href="/AdvisoryBoard">ADVISORY BOARD</NavDropdown.Item>
                <NavDropdown.Item href="#">TEAM MEMBERS</NavDropdown.Item>
              </NavDropdown>




              <Dropdown
                show={isServicesDropdownOpen}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Dropdown.Toggle as={Nav.Link} style={{ textDecoration: "none" }} ><label className='topbarComponentColor'>SERVICES</label></Dropdown.Toggle>
                <Dropdown.Menu
                  as='ul'
                  className='dropdown-menu'
                  style={{ padding: "5px", margin: "0px" }}
                >
                  <li
                    onMouseEnter={() => setIsOutsourcingMenuOpen(true)}
                    onMouseLeave={() => setIsOutsourcingMenuOpen(false)}
                    className='submenu-item' style={{ padding: "5px 5px" }}
                  >
                     <Nav.Link 
                      style={{backgroundColor:"black",fontSize:11,border:"none",color:"#595959"}}
                       class=" ms-0 ps-0"> <label className='menu'>OUTSOURCING</label><span style={{color:"white",fontSize:'11px',paddingLeft:108}} class="arrow-right">❯</span></Nav.Link>
                      {isOutsourcingMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 0,
                            backgroundColor: 'black',                         
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>SAP CX OUTSOURCING</Nav.Link>
                        </li>
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>JAVA OUTSOURCING</Nav.Link>
                        </li>
                      </ul>
                    )}
                  </li>




                  <li
                    onMouseEnter={() => setIsWebdevelopmentMenuOpen(true)}
                    onMouseLeave={() => setIsWebdevelopmentMenuOpen(false)}
                    className='submenu-item' style={{ padding: "5px 5px" }}
                  >
                    <Nav.Link style={{backgroundColor:"black",color:"white",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label className='menu' >WEB DEVELOPMENT</label><span style={{color:"white",fontSize:'11px',paddingLeft:70}} class="arrow-right">❯</span> </Nav.Link>
                      {isWebdevelopmentMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 35,
                            backgroundColor: 'black',
                          
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>E-COMMERCE + CMS</Nav.Link>
                        </li>
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>CMS WEB DEVELOPMENT</Nav.Link>
                        </li>
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>CMS + PAYMENT GATEWAY</Nav.Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onMouseEnter={() => setIsTraningMenuOpen(true)}
                    onMouseLeave={() => setIsTraningMenuOpen(false)}
                    className='submenu-item' style={{ padding: "5px 5px" }}
                  >
                    <Nav.Link style={{backgroundColor:"black",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label className='menu'  >TRANING</label><span style={{color:"white",fontSize:'11px',paddingLeft:132}} class="arrow-right">❯</span> </Nav.Link>
                      {isTraningMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 65,
                            backgroundColor: 'black',
                        
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>CORPORATE TRANING</Nav.Link>
                        </li>

                      </ul>
                    )}
                  </li>

                  <li
                    onMouseEnter={() => setIsDigitalMenuOpen(true)}
                    onMouseLeave={() => setIsDigitalMenuOpen(false)}
                    className='submenu-item' style={{ padding: "5px 5px" }}
                  >
                     <Nav.Link   style={{backgroundColor:"black",fontSize:11,border:"none"}} class="ms-0 ps-0"> <label className='menu'  >DIGITAL MARGETING</label><span style={{color:"white",fontSize:'11px',paddingLeft:70}} class="arrow-right">❯</span> </Nav.Link>
                      {isDigitalMenuOpen && (
                        <ul
                          className='submenu'
                          style={{
                            position: 'absolute',
                            left: '100%', 
                            top: 95,
                            backgroundColor: 'black',
                          
                            padding:'0px',
                            margin:'0px',
                            width:'100%'
                          }}
                        >
                        <li>
                          <Nav.Link href='#' style={{ color: "white", fontSize: 11, textDecoration: "none" }}>DIGITAL MARGETING SERVICES</Nav.Link>
                        </li>

                      </ul>
                    )}
                  </li>

                  <NavDropdown.Item href="#video-production" className='topbarCommonSubmenu'>VIDEO PRODUCTION</NavDropdown.Item>
                </Dropdown.Menu>
              </Dropdown>



              <Nav.Link href="/Contactus"><label className='topbarComponentColor'>BLOGS</label></Nav.Link>
              <Nav.Link href="/NewsView"><label className='topbarComponentColor'>NEWS</label></Nav.Link>
              <NavDropdown
                show={isDropdownOpen}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                title={<label className='topbarComponentColor'>RECRUIT</label>}
                menuVariant="dark"

              >
                <NavDropdown.Item href="#">CAREERS</NavDropdown.Item>
                <NavDropdown.Item href="#">PROCESS</NavDropdown.Item>
                <NavDropdown.Item href="#">OUTING</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="/Contactus"><label className='topbarComponentColor'>CONTACT US</label></Nav.Link>

            </Nav>

          </Navbar.Collapse>

        </Navbar>
      </div>
    </>
  );
}

export default TopBarCommon;





