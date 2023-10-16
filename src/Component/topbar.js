import React,{useState} from 'react';
import { Navbar, Nav, NavDropdown ,NavLink,Dropdown,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import logo2 from '../Assets/download.png'
// import logo1 from '../Images/pradeepitwhite.jpg'
import { DropdownSubmenu} from "react-bootstrap-submenu";
import "react-bootstrap-submenu/dist/index.css"
import '../Style/topbar.css'
function TopBarComponent() {
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [ fix, setFix] = useState(false);

const setFixed = () =>{
  if(window.scrollY >= 1){
    setFix(true);
  }
  else{
    setFix(false);
  }
}
window.addEventListener("scroll",setFixed);
  return (
    <Navbar expand="lg"  variant="" 
    // style={{color:fix?'#000000':'#FFFFFF'}}
    className={ fix ? 'main_bgcolor ' : 'main'} 
     fixed='top'>
        <Container  >
          
        <Navbar.Brand href="#home"> 
        {
          fix?
          <img className='logo' src={logo2} width={230} height={60}/>
          :
          <img src='https://pradeepit.com/wp-content/uploads/2018/05/Pradeep_vector2.png' width={230} height={60}></img>
        }
         </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
     
        <Nav className="mx-auto gap-4"
         style={{color:fix?'#000000':'#FFFFFF'}}
        >
      
          <NavDropdown  show={isCompanyDropdownOpen}
           onMouseEnter={() => setIsCompanyDropdownOpen(true)}
           onMouseLeave={() => setIsCompanyDropdownOpen(false)}
              title={<label className={ fix ? 'navbarColorChange ' : 'navbarColor'}>COMPANY</label>}
              // menuVariant={fix?"dark":"light"}
              menuVariant="dark"
             
              >
                
            <NavDropdown.Item href="/AboutCompany"
            // className={ fix ? 'navbarColorChange ' : 'navbarColor'} 
            >ABOUT COMPANY</NavDropdown.Item>
            <NavDropdown.Item href="/AdvisoryBoard">ADVISORY BOARD</NavDropdown.Item>
            <NavDropdown.Item href="#">TEAM MEMBERS</NavDropdown.Item>
          </NavDropdown>
      
           <Dropdown
                as={Nav.Item}
                show={isServicesDropdownOpen}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <NavLink
                 style={{color:fix?'#000000':'#FFFFFF'}}
                >SERVICES </NavLink>
               
               
                <Dropdown.Menu >
                  <DropdownSubmenu
                  title="OUTSOURCING"
                  > 
                
                    <NavDropdown.Item href="#action/8.1">SAP CX OUTSOURCING</NavDropdown.Item>
                    <NavDropdown.Item href="#action/8.1">JAVA OUTSOURCING</NavDropdown.Item>
                  </DropdownSubmenu>

                  <DropdownSubmenu title="WEB DEVELOPMENT">
                    <NavDropdown.Item href="#action/8.1">E-COMMERCE + CMS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/8.1">CMS WEB DEVELOPMENT</NavDropdown.Item>
                    <NavDropdown.Item href="#action/8.1">CMS + PAYMENT GATEWAY</NavDropdown.Item>
                  </DropdownSubmenu>

                  <DropdownSubmenu title="TRAINING">
                    <NavDropdown.Item href="#action/8.1">CORPORATE TRAINING</NavDropdown.Item>
                  </DropdownSubmenu>

                  <DropdownSubmenu title="DIGITAL MARKETING">
                    <NavDropdown.Item href="#action/8.1">DIGITAL MARKETING SERVICES</NavDropdown.Item>
                  </DropdownSubmenu>

                  <NavDropdown.Item href="#video-production">VIDEO PRODUCTION</NavDropdown.Item>
                </Dropdown.Menu>
              </Dropdown> 
          <Nav.Link href="#"
           style={{color:fix?'#000000':'#FFFFFF'}}
          >BLOGS</Nav.Link>
          <Nav.Link href="/News"
           style={{color:fix?'#000000':'#FFFFFF'}}
          >NEWS</Nav.Link>
          <NavDropdown 
          show={isDropdownOpen}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              title={<label className={ fix ? 'navbarColorChange ' : 'navbarColor'}>RECRUIT</label>} 
              // title="RECRUIT"
              menuVariant="dark">
            <NavDropdown.Item href="#">CAREERS</NavDropdown.Item>
            <NavDropdown.Item href="#">PROCESS</NavDropdown.Item>
            <NavDropdown.Item href="#">OUTING</NavDropdown.Item>
           
          </NavDropdown>
          <Nav.Link href="/Contactus"
           style={{color:fix?'#000000':'#FFFFFF'}}
          >CONTACT US</Nav.Link>
         
        </Nav>
       
      </Navbar.Collapse>
     </Container>
    </Navbar>
  );
}

export default TopBarComponent;