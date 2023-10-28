import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import '../Style/topbar.css'
import { BiChevronRight } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

const PradeepTopbar = () => {
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
    const [showServiceDropdown, setShowServiceDropdown] = useState(false);
    const [showRecruitDropdown, setShowRecruitDropdown] = useState(false);
    const [showOutsorcingSubmenu, setShowOutsorcingSubmenu] = useState(false);
    const [showWebSubmenu, setshowWebSubmenu] = useState(false);
    const [showTraningSubmenu, setshowTraningSubmenu] = useState(false);
    const [showDigitalSubmenu, setshowDigitalSubmenu] = useState(false);
    const [blog, setBlog] = useState(false)
    const [news, setNews] = useState(false)
    const [contact, setContact] = useState(false)
    const [fix, setFix] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const setFixed = () => {
        if (window.scrollY >= 1) {
            setFix(true);
        }
        else {
            setFix(false);
        }
    }
    window.addEventListener("scroll", setFixed);


    const handleMouseEnter1 = () => {
        setBlog(true)
    }
    const handleMouseLeave1 = () => {
        setBlog(false)
    }

    const handleMouseEnter2 = () => {
        setNews(true)
    }
    const handleMouseLeave2 = () => {
        setNews(false)
    }

    const handleMouseEnter3 = () => {
        setContact(true)
    }
    const handleMouseLeave3 = () => {
        setContact(false)
    }
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
      
       
        window.addEventListener("resize", handleResize);
      
       
        
      }, []); 
      
    
      const navbarBackground = windowWidth < 991 ? "black" : "transparent";
      

    return (

        <Navbar collapseOnSelect fixed='top' expand='lg' className={fix ? "WhiteNavbar" : "TransparentNavbar"} style={{width:"100%"}} transparent>
            <Navbar.Brand href="#" >
                {fix ? <div className="NormalLogo"></div> : <div className="TransparentLogo"></div>}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background: "white", borderRadius: 0, margin: 10 }} />
            <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: navbarBackground }}>
                <Nav className="d-flex justify-content-end gap-4" style={{ width: "100%", fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif' }}>


                    <NavDropdown
                        title={
                            <>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>COMPANY</span>
                                    <span className={`arrow-down ${window.innerWidth < 991 ? 'visible' : ''}`}><BsChevronDown style={{fontSize:15}} className="me-3"/></span>
                                </div>

                            </>
                        }

                        id="nav-dropdown"
                        show={showCompanyDropdown}
                        onMouseEnter={() => {
                            setShowCompanyDropdown(true);

                        }}
                        onMouseLeave={() => {
                            setShowCompanyDropdown(false);

                        }}
                     style={{position:"relative"}}
                        className={`custom-nav-dropdown ${(fix && showCompanyDropdown) ? 'black-border' : (showCompanyDropdown ? 'white-border' : 'transparent-border')}`}>

                        <div className="dropdown-menu-container" style={{fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif' }}>
                            <Dropdown.Item id="hover-dropdown" href="#ABOUT COMPANY" style={{ fontWeight: 600, paddingTop: 10, paddingLeft: 10, paddingBottom: 10, color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)",textDecoration:"none" }}>ABOUT COMPANY</Dropdown.Item>

                            <Dropdown.Item href="#ADVISORY BOARD" style={{ fontWeight: 600, paddingTop: 10, paddingLeft: 10, paddingBottom: 10, color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)" ,textDecoration:"none"}}>ADVISORY BOARD</Dropdown.Item>

                            <Dropdown.Item href="#TEAM MEMBERS" style={{ fontWeight: 600, paddingTop: 10, paddingLeft: 10, paddingBottom: 10, color: "#C8C8C8" ,textDecoration:"none"}}>TEAM MEMBERS</Dropdown.Item>
                        </div>

                    </NavDropdown>

                    <NavDropdown
                                              title={
                            <>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>SERVICES</span>
                                    <span className={`arrow-down ${window.innerWidth < 991 ? 'visible' : ''}`}><BsChevronDown  style={{fontSize:15}} className="me-3"/></span>
                                </div>

                            </>
                        }
                        id="nav-dropdown"
                        show={showServiceDropdown}
                        onMouseEnter={() => setShowServiceDropdown(true)}
                        onMouseLeave={() => setShowServiceDropdown(false)}
                        className={`custom-nav-dropdown ${(fix && showServiceDropdown) ? 'black-border' : (showServiceDropdown ? 'white-border' : 'transparent-border')}`}>


                        <Dropdown.Item
                            onMouseEnter={() => setShowOutsorcingSubmenu(true)}
                            onMouseLeave={() => setShowOutsorcingSubmenu(false)}
                            style={{ paddingTop: 5, paddingLeft: 10, paddingBottom: 10, fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', position: 'relative', color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)", display: "flex", justifyContent: "space-between",textDecoration:"none" }}

                        >
                            <label> OUTSOURCING</label>


                            <BiChevronRight style={{ width: "15px", height: "15px" }} />

                            {showOutsorcingSubmenu && (

                                <Dropdown.Menu style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', position: 'absolute', left: '100%', top: "-30%" ,textDecoration:"none"}}>
                                    <Dropdown.Item href="#SAP-CX OUTSOURCING" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontWeight: "600", color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2) ",textDecoration:"none" }}>SAP-CX OUTSOURCING</Dropdown.Item>

                                    <Dropdown.Item href="#JAVA OUTSOURCING" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontWeight: "600", color: "#C8C8C8",textDecoration:"none" }}>JAVA OUTSOURCING</Dropdown.Item>

                                </Dropdown.Menu>
                            )}
                        </Dropdown.Item>


                        <Dropdown.Item
                            onMouseEnter={() => setshowWebSubmenu(true)}
                            onMouseLeave={() => setshowWebSubmenu(false)}
                            style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)", display: "flex", justifyContent: "space-between" ,textDecoration:"none"}}
                        >
                            WEB DEVELOPMENT
                            <BiChevronRight style={{ width: "15px", height: "15px" }} />
                            {showWebSubmenu && (
                                <Dropdown.Menu style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', position: 'absolute', left: '100%', top: '20%' }}>
                                    <Dropdown.Item href="#E-COMMERCE" style={{ paddingTop: 5, paddingLeft: 10, paddingBottom: 8, fontWeight: "600", color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)",textDecoration:"none" }} >E-COMMERCE</Dropdown.Item>

                                    <Dropdown.Item href="#CMS WEB DEVELOPMENT " style={{ paddingTop: 5, paddingLeft: 10, paddingBottom: 8, fontWeight: "600", color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)",textDecoration:"none" }}> WEB DEVELOPMENT</Dropdown.Item>

                                    <Dropdown.Item href="#CMS WITH PAYMENT GATEWAY" style={{ paddingTop: 5, paddingLeft: 10, paddingBottom: 8, fontWeight: "600", color: "#C8C8C8",textDecoration:"none" }}>CMS WITH PAYMENT GATEWAY</Dropdown.Item>
                                </Dropdown.Menu>
                            )}
                        </Dropdown.Item>

                        <Dropdown.Item
                            onMouseEnter={() => setshowTraningSubmenu(true)}
                            onMouseLeave={() => setshowTraningSubmenu(false)}
                            style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)", display: "flex", justifyContent: "space-between",textDecoration:"none" }}
                        >
                            TRANING
                            <BiChevronRight style={{ width: "15px", height: "15px" }} />
                            {showTraningSubmenu && (
                                <Dropdown.Menu style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', position: 'absolute', left: '100%', top: '40%' }}>
                                    <Dropdown.Item href="#CORPORATE TRAINING" style={{ paddingTop: 3, paddingLeft: 10, fontWeight: "600" ,textDecoration:"none"}}>CORPORATE TRAINING</Dropdown.Item>

                                </Dropdown.Menu>
                            )}
                        </Dropdown.Item>

                        <Dropdown.Item
                            onMouseEnter={() => setshowDigitalSubmenu(true)}
                            onMouseLeave={() => setshowDigitalSubmenu(false)}
                            style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)", display: "flex", justifyContent: "space-between",textDecoration:"none" }}
                        >
                            DIGITAL MARKETING
                            <BiChevronRight style={{ width: "15px", height: "15px" }} />
                            {showDigitalSubmenu && (
                                <Dropdown.Menu style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', position: 'absolute', left: '100%', top: '60%' }}>
                                    <Dropdown.Item href="#DIGITAL MARKETING SERVICES" style={{ paddingTop: 3, paddingLeft: 10, fontWeight: 600, color: "#C8C8C8",textDecoration:"none" }}>DIGITAL MARKETING  SERVICES</Dropdown.Item>

                                </Dropdown.Menu>
                            )}
                        </Dropdown.Item>
                        <Dropdown.Item href="#VIDEO PRODUCTION" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 2, fontSize: "11px", margin: 0, fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif', color: "#C8C8C8",textDecoration:"none" }}>VIDIO PRODUCTION</Dropdown.Item>
                    </NavDropdown>



                    <Nav.Link href="#features"  className={`custom-nav-dropdown ${(fix && blog) ? 'black-border' : (blog ? 'white-border' : 'transparent-border')}`} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >BLOGS</Nav.Link>
                    <Nav.Link href="#features" className={`custom-nav-dropdown ${(fix && news) ? 'black-border' : (news ? 'white-border' : 'transparent-border')}`} onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>NEWS</Nav.Link>
                  
                  
                  
                    <NavDropdown
                        title={
                            <>
                                <div class="d-flex justify-content-between align-items-center">
                                    <span>RECRUIT</span>
                                    <span className={`arrow-down ${window.innerWidth < 991 ? 'visible' : ''}`}><BsChevronDown style={{fontSize:15}}  className="me-3"/></span>
                                </div>

                            </>
                        }
                        id="nav-dropdown"
                        show={showRecruitDropdown}
                        onMouseEnter={() => setShowRecruitDropdown(true)}
                        onMouseLeave={() => setShowRecruitDropdown(false)}
                        className={`custom-nav-dropdown ${(fix && showRecruitDropdown) ? 'black-border' : (showRecruitDropdown ? 'white-border' : 'transparent-border')}`}>
                        <div style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "1px", fontFamily: 'Open Sans, sans-serif' }}>
                            <Dropdown.Item href="#CAREERS" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontWeight: 600, color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)",textDecoration:"none" }}>CAREERS</Dropdown.Item>

                            <Dropdown.Item href="#PROCESS" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontWeight: 600, color: "#C8C8C8", borderBottom: "1px solid rgba(255, 255, 255,0.2)",textDecoration:"none" }}>PROCESS</Dropdown.Item>

                            <Dropdown.Item href="#OUTING" style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10, fontWeight: 600, color: "#C8C8C8" ,textDecoration:"none"}}>OUTING</Dropdown.Item>
                        </div>
                    </NavDropdown>


                    <Nav.Link href="#features" style={{ marginRight: "50px", color: "" }} className={`custom-nav-dropdown ${(fix && contact) ? 'black-border' : (contact ? 'white-border' : 'transparent-border')}`} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} >CONTACT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default PradeepTopbar;



