import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DropdownItem, NavDropdown, NavLink } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import logo from '../Images/download.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-bootstrap-submenu/dist/index.css"
import Dropdown from 'react-bootstrap/Dropdown';
import '../Style/topbar.css';

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
  return (
    <div className={fix ? 'navber_fixed nav_position' : ''}>
      <Navbar bg="" expand="lg"  >
        <Container  >
          <Navbar.Brand href="#home"><img src={logo} width={250} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto gap-4 navbarList" navbarScroll >

              <Dropdown className='companydropdown' as={Nav.Item} show={isCompanyDropdownOpen}
                onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)} >
                <NavLink className='topbarhead'>
                  COMPANY
                </NavLink>
                <Dropdown.Menu className='bg-dark rounded-0'>
                  <Dropdown.Item href="/AboutCompany" style={{ textDecoration: 'none' }} className='text-light bg-dark'>ABOUT COMPANY</Dropdown.Item>
                  <Dropdown.Item href="/AdvisoryBoard" style={{ textDecoration: 'none' }} className='text-light bg-dark'>ADVISORY BOARD</Dropdown.Item>
                  <Dropdown.Item href="#company-action2" style={{ textDecoration: 'none' }} className='text-light bg-dark'>TEAM MEMBERS</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>

              <Dropdown
                as={Nav.Item}
                show={isServicesDropdownOpen}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <NavLink>SERVICES  </NavLink>


                <Dropdown.Menu className='bg-dark rounded-0'>
                  <DropdownSubmenu 
                  title="OUTSOURCING"
                   className='text-light bg-dark'>
                    
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>SAP CX OUTSOURCING</NavDropdown.Item>
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>JAVA OUTSOURCING</NavDropdown.Item>
                  </DropdownSubmenu>

                  <DropdownSubmenu title="WEB DEVELOPMENT" className='text-light bg-dark'>
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>E-COMMERCE + CMS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>CMS WEB DEVELOPMENT</NavDropdown.Item>
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>CMS + PAYMENT GATEWAY</NavDropdown.Item>
                  </DropdownSubmenu>

                  <DropdownSubmenu title="TRAINING" className='text-light bg-dark'>
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>CORPORATE TRAINING</NavDropdown.Item>
                  </DropdownSubmenu>

                  <DropdownSubmenu title="DIGITAL MARKETING" className='text-light bg-dark'>
                    <NavDropdown.Item href="#action/8.1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>DIGITAL MARKETING SERVICES</NavDropdown.Item>
                  </DropdownSubmenu>

                  <NavDropdown.Item href="#video-production" style={{ textDecoration: 'none' }} className='text-light bg-dark'>VIDEO PRODUCTION</NavDropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link href="#action1" >BLOGS</Nav.Link>
              <Nav.Link href="/News" >NEWS</Nav.Link>

              <Dropdown as={Nav.Item} show={isDropdownOpen}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)} >
                <NavLink id="company-dropdown">
                  RECRUIT
                </NavLink>
                <Dropdown.Menu className='bg-dark rounded-0'>
                  <Dropdown.Item href="#company-action1" style={{ textDecoration: 'none' }} className='text-light bg-dark'>CAREERS</Dropdown.Item>
                  <Dropdown.Item href="#company-action2" style={{ textDecoration: 'none' }} className='text-light bg-dark'>PROCESS</Dropdown.Item>
                  <Dropdown.Item href="#company-action2" style={{ textDecoration: 'none' }} className='text-light bg-dark'>OUTING</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/Contactas" >CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default TopBarComponent;