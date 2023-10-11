import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carrosel1 from '../Assets/development1.jpg'
import Carrosel2 from '../Assets/business.jpg'
import Carrosel3 from '../Assets/lap1.jpg'
import Carrosel4 from '../Assets/iphone.jpg'
import Laptop1 from '../Assets/laptop.jpg';
import Tablet from '../Assets/tablet.jpg';
import Office1 from '../Assets/office1.jpg'
import Office2 from '../Assets/office2.jpg'
import Office3 from '../Assets/office3.jpg'
import Adope from '../Assets/adobemagento.png'
import Commerce from '../Assets/ecommerce-2607114_960_720.jpg';
import Shopping from '../Assets/shopping-3407232_960_720.jpg'
import Card1 from '../Assets/card1.png';
import Card2 from '../Assets/card2.png';
import Card3 from '../Assets/card3.png';
import Card4 from '../Assets/card4.png';
import Card5 from '../Assets/card5.png';
import Card6 from '../Assets/card6.png';
import Card7 from '../Assets/card7.png';
import Phone from '../Assets/phone.png';
import Box from '../Assets/suggestion-box.png'
import Announce from '../Assets/marketing.png'
import Cart from '../Assets/trolley.png'
import Spy from '../Assets/spy.png'
import Desktop from '../Assets/desktop.png'
import Airbaloon from '../Assets/hot-air-balloon.png'
import Camera from '../Assets/camera.png'
import Trophy from '../Assets/trophy.png'
import Cloud from '../Assets/cloud.png'
import Development from '../Assets/app-development.png'
import TopBarComponent from './topbar';
// import laptop from '../Assets/laptop.png';
// import suitcase from '../Assets/suitcase.png';
// import monitor from '../Assets/computer-monitor.png';
import HomeNumber from "./HomeNumber";
import '../Style/Digital.css';


              const Digital = () => {

    const [toggle, setToggle] = useState(1);

    const UpdateToggle = (id) => {
        setToggle(id)
    }

    return (

          <>

        <TopBarComponent />

        <div>




            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="1" class="me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="2" class="me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="3" class="me-2"></li>

                </ol>

                <div class="carousel-inner" >
                    <div class="item active Image1">
                        <img src={Carrosel1} class='image-fluid' alt="Los Angeles" style={{ width: '100%', height: '80vh' }} />
                        <div class="Top">
                            <h2 class="Top1"  >Outsourcing Service for Sap Hypris</h2>
                            <p class="Top2"> We know it's hards to find a reliable sap hypris expert when you need
                                one which is why we have set on a miison to bring them all to one place
                            </p>
                        </div>
                    </div>

                    <div class="item">
                        <img src={Carrosel2} class='image-fluid' alt="Chicago" style={{ width: '100%', height: '80vh' }} />
                        <div class="Top">
                            <h2 class="Top1">Outsourcing Service for Java Development</h2>
                            <p class="Top2"> We know it's hards to find a reliable sap hypris expert when you need
                                one which is why we have set on a miison to bring them all to one place
                            </p>
                        </div>

                    </div>

                    <div class="item">
                        <img src={Carrosel3} class='image-fluid' alt="New york" style={{ width: '100%', height: '80vh' }} />
                        <div class="Top">
                            <h2 class="Top1" >Give Wings To Your Business, Develop a Mobile App</h2>
                            <p class="Top2"> We know it's hards to find a reliable sap hypris expert when you need
                                one which is why we have set on a miison to bring them all to one place
                            </p>
                        </div>

                    </div>

                    <div class="item">
                        <img src={Carrosel4} class='image-fluid' alt="New york" style={{ width: '100%', height: '80vh' }} />
                        <div class="Top">
                            <h2 class="Top1" >We Develop Ideas Into Pioneering Website</h2>
                            <p class="Top2"> We know it's hards to find a reliable sap hypris expert when you need
                                one which is why we have set on a miison to bring them all to one place
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FBDA44', justifyContent: 'center', height: '100px', paddingTop: '40px' }}>
                <span style={{ color: '#000000', fontSize: '14px' }}><b>
                    WEB DESIGN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    GRAPHICS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    MAGENTO  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    WORDPRESS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    APPLICATIONS
                </b>
                </span>
            </div>


            <div class="container-fluid" style={{ overflow: "hidden", fontSize: 14 }}>

                <div class="row animated animatedFadeInUp fadeInUp" style={{ marginTop: 60, textAlign: "start", paddingLeft: 100, paddingRight: 100, fontSize: 12 }}>
                    <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={Spy} style={{ height: 50, width: 80, marginTop: 40 }} />
                        <p>

                            <div class="separator-line bg-yellow no-margin-lr"></div>
                            <h4 style={{ marginLeft: '25%', marginBottom: '5%' }}>OUTSOURCING SERVICE PROVIDER</h4>
                            <hr style={{ width: '10%', marginLeft: '26%', fontWeight: 900, backgroundColor: '#FBDA44' }} />
                            <p style={{ fontSize: '15px', paddingLeft: '15%', paddingRight: '15%' }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                            <ul class="Listitems">
                                <li>Full stack Java Developer</li>
                                <li>SAP CX/hybris Consultants</li>
                                <li>Full stack PHP Developer</li>
                                <li>Full stack UI/UX Developer</li>
                                <li>Freelancer Funtional Consultants</li>
                                <li>Freelancer Andriod & IOS Developer</li>
                                <li>Freelancer Big Data & Hadoop</li>
                            </ul>

                        </p>
                    </div>
                    <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={Desktop} style={{ height: 50, width: 80, marginTop: 40 }} />
                        <p>
                            <div class="separator-line bg-yellow no-margin-lr"></div>

                            <h4 style={{ marginLeft: '25%', marginBottom: '5%' }}>WEB DEVELOPMENT</h4>
                            <hr style={{ width: '10%', marginLeft: '26%', fontWeight: 900, backgroundColor: '#FBDA44' }} />

                            <p style={{ fontSize: '15px', paddingLeft: '15%', paddingRight: '15%' }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                            <ul class="Listitems">
                                <li>Full stack Java Developer</li>
                                <li>SAP CX/hybris Consultants</li>
                                <li>Full stack PHP Developer</li>
                                <li>Full stack UI/UX Developer</li>
                                <li>Freelancer Funtional Consultants</li>
                                <li>Freelancer Andriod & IOS Developer</li>
                                <li>Freelancer Big Data & Hadoop</li>
                            </ul>


                        </p>
                    </div>
                    <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={Airbaloon} style={{ height: 50, width: 80, marginTop: 40 }} />
                        <p>

                            <div class="separator-line bg-yellow no-margin-lr"></div>
                            <h4 style={{ marginLeft: '25%', marginBottom: '5%' }}>DIGITAL MARKETING</h4>
                            <hr style={{ width: '10%', marginLeft: '26%', fontWeight: 900, backgroundColor: '#FBDA44' }} />

                            <p style={{ fontSize: '15px', paddingLeft: '15%', paddingRight: '15%' }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                            <ul class="Listitems">
                                <li>Full stack Java Developer</li>
                                <li>SAP CX/hybris Consultants</li>
                                <li>Full stack PHP Developer</li>
                                <li>Full stack UI/UX Developer</li>
                                <li>Freelancer Funtional Consultants</li>
                                <li>Freelancer Andriod & IOS Developer</li>
                                <li>Freelancer Big Data & Hadoop</li>
                            </ul>

                        </p>
                    </div>
                </div>
                <div class="row animated animatedFadeInUp fadeInUp" style={{ marginTop: 30, textAlign: "start", paddingLeft: 100, paddingRight: 100, fontSize: 12 }}>
                    <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={Camera} style={{ height: 50, width: 80, marginTop: 40 }} />

                        <p>

                            <div class="separator-line bg-yellow no-margin-lr"></div>

                            <h4 style={{ marginLeft: '25%', marginBottom: '5%' }}>OUTSOURCING SERVICE PROVIDER</h4>
                            <hr style={{ width: '10%', marginLeft: '26%', fontWeight: 900, backgroundColor: '#FBDA44' }} />

                            <p style={{ fontSize: '15px', paddingLeft: '15%', paddingRight: '15%' }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                            <ul class="Listitems">
                                <li>Full stack Java Developer</li>
                                <li>SAP CX/hybris Consultants</li>
                                <li>Full stack PHP Developer</li>
                                <li>Full stack UI/UX Developer</li>
                                <li>Freelancer Funtional Consultants</li>
                                <li>Freelancer Andriod & IOS Developer</li>
                                <li>Freelancer Big Data & Hadoop</li>
                            </ul>

                        </p>
                    </div>
                    <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={Trophy} style={{ height: 50, width: 80, marginTop: 40 }} />
                        <p>

                            <div class="separator-line bg-yellow no-margin-lr"></div>
                            <h4 style={{ marginLeft: '25%', marginBottom: '5%' }}>WEB DEVELOPMENT</h4>
                            <hr style={{ width: '10%', marginLeft: '26%', fontWeight: 900, backgroundColor: '#FBDA44' }} />

                            <p style={{ fontSize: '15px', paddingLeft: '15%', paddingRight: '15%' }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                            <ul class="Listitems">
                                <li>Full stack Java Developer</li>
                                <li>SAP CX/hybris Consultants</li>
                                <li>Full stack PHP Developer</li>
                                <li>Full stack UI/UX Developer</li>
                                <li>Freelancer Funtional Consultants</li>
                                <li>Freelancer Andriod & IOS Developer</li>
                                <li>Freelancer Big Data & Hadoop</li>
                            </ul>

                        </p>
                    </div>
                    <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                        <img src={Cloud} style={{ height: 50, width: 80, marginTop: 40 }} />

                        <p>

                            <div class="separator-line bg-yellow no-margin-lr"></div>

                            <h4 style={{ marginLeft: '25%', marginBottom: '5%' }}>DIGITAL MARKETING</h4>
                            <hr style={{ width: '10%', marginLeft: '26%', fontWeight: 900, backgroundColor: '#FBDA44' }} />
                            <p style={{ fontSize: '15px', paddingLeft: '15%', paddingRight: '15%' }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                            <ul class="Listitems">
                                <li>Full stack Java Developer</li>
                                <li>SAP CX/hybris Consultants</li>
                                <li>Full stack PHP Developer</li>
                                <li>Full stack UI/UX Developer</li>
                                <li>Freelancer Funtional Consultants</li>
                                <li>Freelancer Andriod & IOS Developer</li>
                                <li>Freelancer Big Data & Hadoop</li>
                            </ul>

                        </p>
                    </div>
                </div>
            </div>



            <div class="container-fluid Laptop1">
                <div class="row">

                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <img src={Laptop1} class="img-fluid" style={{ width: '100%', height: '40vh' }} />
                    </div>

                </div>
                <div class="row Laptop">
                    <div class="col-md-3 col-sm-3 col-xs-3" style={{ fontSize: '20px', fontWeight: 800 }}>
                        <h1 style={{ marginLeft: 20 }}>15</h1>
                        <p>Years of Experience</p>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3" style={{ fontSize: '20px', fontWeight: 800 }}>
                        <h1 style={{ marginLeft: 20 }}>304</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3" style={{ fontSize: '20px', fontWeight: 800 }}>
                        <h1 style={{ marginLeft: 30 }}>16</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div class="col-md-3 col-sm-3 col-xs-3" style={{ fontSize: '20px', fontWeight: 800 }}>
                        <h1 style={{ marginLeft: 30 }}>3</h1>
                        <p>Number of Countries</p>
                    </div>
                </div>

            </div>

            {/* tab design */}

            <div class="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><h2 style={{ marginLeft: '40%', fontWeight: '800', marginTop: '3%', marginBottom: '3%' }}> LATEST WORK</h2>
                <p style={{ fontSize: '16px', paddingBottom: '30px', color: '#7F93C1' }}>We are technology leaders and have crafted intuitive and lasting online and mobile experiences for hundreds of associations and non-profits.</p>
            </div>
            <div id="exTab3" class="container-fluid">
                <ul class="nav nav-pills" style={{display:'flex',flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
                    <li class="active">
                        <a style={{fontSize:12}} href="#1b" data-toggle="tab">ALL</a>
                    </li>
                    <li><a style={{fontSize:12}} href="#2b" data-toggle="tab">SAP</a>
                    </li>
                    <li><a style={{fontSize:12}} href="#3b" data-toggle="tab">WEBSITE DESIGN</a>
                    </li>
              
                </ul>

                <div class="tab-content clearfix">
                    <div class="tab-pane active" id="1b">
                        <img src={Card1} class="me-2" />
                        {/* <p>LERBS -GERMANY,HAMBURG</p> */}
                        <img src={Card2} class="me-2" />
                        <img src={Card3} class="me-2" />
                        <img src={Card4} class="me-2" />
                        <img src={Card5} class="me-2" />
                        <img src={Card6} class="me-2" />
                        <img src={Card7} class="me-2" />

                    </div>
                    <div class="tab-pane" id="2b">
                        <img src={Card1} class="me-2" />
                        <img src={Card2} class="me-2" />
                        <img src={Card3} class="me-2" />
                        <img src={Card4} class="me-2" />
                        <img src={Card5} class="me-2" />
                    </div>
                    <div class="tab-pane" id="3b">
                        <img src={Card6} class="me-2" />
                        <img src={Card7} class="me-2" />
                    </div>
                </div>
            </div>

<HomeNumber/>



            {/* <div class="container" 
            style={{ paddingLeft: 100,  height: '50vh', paddingTop: "8%" }}
            >
                <div class="row">
                    <div class="col-md-3 col-sm-3 c0l-xs-6 Project">
                        <div class="image">
                        <h2 style={{ color: '#FDDA4C', fontSize: '45px', paddingLeft: '10px' }}>01</h2>
                        <h4>STRATEGY</h4>
                        <hr style={{ width: 40}} />
                        </div>
                        <div class="overlay" >
                            <div class="text">
                                <img src={laptop} style={{width:50,height:50}}></img>
                                <p>PROJECTS INVOLVES CONTENT STRATEGY,
                                    BUSINESS STRATEGY, LEAD GENERATION
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 c0l-xs-6 Project">
                    <div class="image">
                        <h2 style={{ color: '#FDDA4C', fontSize: '45px', paddingLeft: '10px' }}>02</h2>
                        <h4>PLANNING</h4>
                        <hr style={{ width: 40}} /></div>
                        <div class="overlay">
                            <div class="text">
                            <img src={suitcase} style={{width:50,height:50}}></img>
                                <p>DESIGNED TO CONTROL & EXECUTION OF BRD/FSD,
                                     HLD, LLD, TECHNICAL ARCHITECTUR
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 c0l-xs-6 Project">
                    <div class="image">
                        <h2 style={{ color: '#FDDA4C', fontSize: '45px', paddingLeft: '10px' }}>03</h2>
                        <h4>DEVELOPMENT</h4>
                        <hr style={{ width: 40}}/></div>
                        <div class="overlay">
                            <div class="text">
                            <img src={monitor} style={{width:50,height:50,color:'#FDD947'}}></img>
                                <p>SET OF ACTIVITIES IN SYSTEMS
                                     TO COLLECT CHALLENGES,
                                     DEVELOP SOLUTIONS, AND
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 c0l-xs-6 Project">
                    <div class="image">
                        <h2 style={{ color: '#FDDA4C', fontSize: '45px', paddingLeft: '10px' }}>04</h2>
                        <h4>LAUNCH</h4>
                        <hr style={{ width: 40}} /></div>
                        <div class="overlay">
                            <div class="text">
                                <p>DESIGN DEVELOPMENT LAUNCH UAT SYSTEM 
                                    DEPLOY IN CLOUD  INFRASTRUCTURE.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div> */}


            <div class="container-fluid" style={{ height: '30vh', backgroundColor: '#FDD947',paddingTop:'5%' }}>

                <div class="row justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12 ps-5" style={{ display: 'flex', flexDirection: 'row' }}>
                        <img src={Box} style={{ width: 37, height: 39 }} />
                        <h5 style={{ fontSize: '20px',paddingTop:'10px',paddingLeft:'10px' }}>WANT TO SEE MORE AMAZING WORKS?</h5>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 ps-5">
                        <button type="button" class="Btn1"><b>VIEW PORTFOLIO</b></button>
                        <button type="button" class="Btn2"><b>SUBSCRIBE US</b></button>
                    </div>
                </div>

            </div>

            <div class="container pt-5">
                <div class="d-flex row justify-content-center">
                    <div class="col-md-2">
                        <h2>OUR SERVICES</h2>
                    </div>
                </div>
            </div>


            <div class="container pt-5">
                <div class="row">
                    <div class="col-md-4 col-sm-4 col-xs-6 ps-3">
                        <img src={Announce} style={{ width: 42, height: 45, marginLeft: '55px' }} />
                        <h3>DIGITAL MARKETING</h3></div>

                    <div class="col-md-4 col-sm-4 col-xs-6 ps-3">
                        <img src={Cart} style={{ width: 42, height: 45, marginLeft: '55px' }} />
                        <h3>E-COMMERCE SOLUTIONS</h3></div>

                    <div class="col-md-4 col-sm-4 col-xs-6 ps-3">
                        <img src={Development} style={{ width: 42, height: 45, marginLeft: '55px' }} />
                        <h3>WEB DEVELOPMENT</h3></div>
                </div>
            </div>


            <div class="container-fluid pt-5">
                <div class="row">
                    <div class="col-md-6 col-sm-10 col-xs-10 Laptop1">
                        <img src={Tablet} class="img-fluid" style={{ opacity: '0.6' }} />
                        <div class="Laptop" style={{ fontSize: '20px', fontWeight: 800 }}>
                        <h1 style={{ marginLeft: 80,color:'yellow' }}>01</h1>
                        <p>DIGITAL MARKETING</p>
                    </div>
                    </div>
                    <div class="col-md-6 col-sm-10 col-xs-10 d-flex  justify-content-center flex-column Read1" >
                        <img src={Announce} style={{ width: 42, height: 45, marginLeft: '95px' }} />
                        <h2 style={{ fontSize: '30px', fontWeight: 800 }}>DIGITAL MARKETING</h2>
                        <p style={{ fontSize: '20px' }} class="col-md-6 col-sm-6 col-xs-10">We ensure organizations reach their full potential in the online space through marketing strategies based on deep analytics and customer journeys.</p>

                        <button class="Read">READ MORE <i class="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>




            <div id="myCarousel" class="carousel slide" data-ride="carousel" >
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="1" class="me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="2" class="me-2"></li>

                </ol>

                <div class="carousel-inner" >
                    <div class="item active">
                        <div class="container-fluid ">
                            <div class="row d-flex align-items-center ps-5 Phone" >
                                <div class="col-md-6 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }}>
                                    </div>

                                    <img src={Phone} style={{ paddingLeft: '15%' }}></img>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 class="ps-5">01</h1>
                                    </div>

                                    <h4 class="ps-4" style={{ fontSize: '20px' }}>M3 WALLET POWERED BY YES BANK</h4>
                                    <h6 style={{ fontSize: '14px' }}>MAKE INSTANT MONEY TRANSFER & DIGITAL PAYMENTS</h6>
                                    <p style={{ fontSize: '18px', color: '#5E5E5E' }}>Mobile wallets are no longer just a trend they have become<br></br>
                                        a need of the time. However to relish the benifits of this<br></br>
                                        fast evolving market ,you need to ensure flawless<br></br>
                                        implementation of facts and features
                                    </p>

                                    <button class="btn btn-outline-dark btn-lg">VIEW CASE STUDY</button>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="item">
                        <div class="container-fluid">
                            <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#F6F6F6', height: '70vh' }}>
                                <div class="col-md-6 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 class="ps-3">02</h1>
                                    </div>

                                    <h4 class="ps-4" style={{ fontSize: '20px' }}>CLUSTER INDIA</h4>
                                    <h6 style={{ fontSize: '14px' }}>WEB DESIGN | BRAND STRATEGY</h6>
                                    <p style={{ fontSize: '18px', color: '#5E5E5E' }}>Cluster is platform for eco sysytem which enables a<br></br>
                                        Candiate to Learn ,Experience,Execute and therby<br></br>
                                        Become a smart Software Developer in a short span of time
                                    </p>

                                    <button class="btn btn-outline-dark btn-lg">VIEW CASE STUDY</button>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-10">

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="item">
                        <div class="container-fluid">
                            <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#F6F6F6', height: '70vh' }}>
                                <div class="col-md-6 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 class="ps-5">03</h1>
                                    </div>

                                    <h4 class="ps-4" style={{ fontSize: '20px' }}>M3 WALLET POWERED BY YES BANK</h4>
                                    <h6 style={{ fontSize: '14px' }}>MAKE INSTANT MONEY TRANSFER & DIGITAL PAYMENTS</h6>
                                    <p style={{ fontSize: '18px', color: '#5E5E5E' }}>Mobile wallets are no longer just a trend they have become<br></br>
                                        a need of the time. However to relish the benifits of this<br></br>
                                        fast evolving market ,you need to ensure flawless<br></br>
                                        implementation of facts and features
                                    </p>

                                    <button class="btn btn-outline-dark btn-lg">VIEW CASE STUDY</button>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-10">

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div class="container-fluid d-flex justify-content-center" style={{ paddingTop: 60, paddingLeft: 50, paddingBottom: 40 }}>
                <div class="row ">
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <img src={Office1} style={{ height: 220, width: 220, borderRadius: 110, paddingLeft: 30 }} />

                        <div class="d-flex column">

                        </div>
                        <p style={{ fontSize: '15px', paddingLeft: 8, paddingRight: 8, paddingBottom: 20 }}>Developing high quality business strategies and plans ensuring their alignment with short-term and long-term objectives</p>
                        <h5 style={{ fontWeight: 600 }}>VINOD KUMAR - PRINCIPAL CONSULTANT</h5>
                        <h1 style={{ marginLeft: '25%', color: '#FDD947' }}><b>""</b></h1>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <img src={Office3} style={{ height: 220, width: 220, borderRadius: 110 }} />


                        <div class="d-flex column">

                        </div>
                        <p style={{ fontSize: '15px', paddingLeft: 8, paddingRight: 8, paddingBottom: 10 }}>Abdul Mannan is an expert in getting the best out of the people. Usually in one session of just two hours, his clients see their life is changed 180 degrees in the positive direction.</p>
                        <h5 style={{ fontWeight: 600 }}>HAMZAH ALI- TECHNICAL MANAGER</h5>
                        <h1 style={{ marginLeft: '25%', color: '#FDD947' }}><b>""</b></h1>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <img src={Office3} style={{ height: 220, width: 220, borderRadius: 110 }} />

                        <div class="d-flex column">

                        </div>
                        <p style={{ fontSize: '15px', paddingLeft: 8, paddingRight: 8, paddingBottom: 10 }}>He was CFO at Airtel Ltd during the boom in the cellular and telecommunication industry in India and the demand for technical support staff was on the rise</p>
                        <h5 style={{ fontWeight: 600 }}>PRAKASH PATIL-LEAD CONSULTANT</h5>
                        <h1 style={{ marginLeft: '25%', color: '#FDD947' }}><b>""</b></h1>
                    </div>

                </div>
            </div>


            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 col-sm-6 col-xs-10">
                        <img src={Adope} class="Adope" style={{ height: 190, width: '80%', marginBottom: 50 }} />
                        <h4>

                            MAGENTO ACQUISITION: WILL IT TAKES MAGENTO COMMERCE INTO NEW HEIGHT</h4>

                        <h6 style={{ marginTop: 20, marginBottom: 10 }}>POSTED BY ADMIN | 24 FEBRUARY 2016</h6>
                        <p style={{ fontSize: '14px' }}>Last month, IT industry had got big surprise about <br />
                            magento acquisition by adobe industry. This made<br /> not only a surprise
                            but shocked to leading ecommerce...</p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-10">
                        <img src={Commerce} class="Commerce" style={{ height: 240, width: "80%", marginBottom: 50 }} />
                        <h4>WILL ECOMMERCE OVERCOME TOMORROWS
                            RETAIL CHALLENGES…?</h4>

                        <h6 style={{ marginTop: 20, marginBottom: 10 }}>POSTED BY ADMIN | 24 FEBRUARY 2016</h6>
                        <p style={{ fontSize: '14px' }}>After discovering new way of supply chain<br /> into market and distribution of products to customers,<br /> which has made remarkable industry growth<br /> into so called retail...</p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-10">
                        <img src={Shopping} class="Shopping" style={{ height: 240, width: 400, marginBottom: 50 }} />
                        <h4>

                            VOICE BASED SHOPPING:
                            NEXT GENERATION OF ECOMMERCE</h4>

                        <h6 style={{ marginTop: 20, marginBottom: 10 }}>POSTED BY ADMIN | 24 FEBRUARY 2016</h6>
                        <p style={{ fontSize: '14px' }}>In the technology revolution, the innovation has no limit in any filed where technology taking forward into next level. As earlier days in the last...</p>
                    </div>
                </div>
                <div class="d-flex row justify-content-center" style={{ alignItems: 'center', width: '10%', marginLeft: '44%', paddingBottom: 30, paddingTop: 20 }}>
                    <button class="Blog"><b>VIEW ALL BLOG</b></button>
                </div>

            </div>





            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="1" class="me-2"></li>
                    <li data-target="#myCarousel" data-slide-to="2" class="me-2"></li>

                </ol>

                <div class="carousel-inner" >
                    <div class="item active">
                        <div class="container-fluid">
                            <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#000000', color: 'white', height: '50vh' }}>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }}>
                                        <h1 ><i class="bi bi-camera-fill"></i></h1>
                                    </div>

                                    <h5 class="ps-4">CONSIDERED DESIGN</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                        PROJECT’S OBJECTIVES.</p>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 class="ps-5"><i class="bi bi-bullseye"></i></h1>
                                    </div>

                                    <h5 class="ps-4">CREATIVE COLLABORATION</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                        WHO EMBRACE THE DESIGN
                                    </p>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 class="ps-5"><i class="bi bi-megaphone"></i></h1>
                                    </div>
                                    <h5 class="ps-4">IMPECCABLE SERVICE</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>GREAT SERVICE IS ACHIEVED<br></br>
                                        THROUGH PROFESSIONALISM
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="item">
                        <div class="container-fluid">
                            <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#000000', color: 'white', height: '50vh' }}>
                                <div class="col-md-4 col-sm-6 col-xs-10 ps-5">
                                    <div style={{ paddingLeft: '40px' }} >
                                        <h1 ><i class="bi bi-geo-alt"></i></h1>
                                    </div>
                                    <h5 class="ps-4">ALL DESIGN</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                        PROJECT’S OBJECTIVES.</p>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '50px' }} >
                                        <h1 ><i class="bi bi-balloon-fill"></i></h1>
                                    </div>
                                    <h5 class="ps-4">CREATIVE COLLABORATION</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                        WHO EMBRACE THE DESIGN
                                    </p>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '50px' }} >
                                        <h1 ><i class="bi bi-pencil-fill"></i></h1>
                                    </div>
                                    <h5 class="ps-4">IMPECCABLE SERVICE</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>GREAT SERVICE IS ACHIEVED<br></br>
                                        THROUGH PROFESSIONALISM
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="item">
                        <div class="container-fluid">
                            <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#000000', color: 'white', height: '50vh' }}>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 ><i class="bi bi-envelope"></i></h1>
                                    </div>
                                    <h5 class="ps-4">ALL DESIGN</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                        PROJECT’S OBJECTIVES.</p>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1 ><i class="bi bi-laptop"></i></h1>
                                    </div>
                                    <h5 class="ps-4">CREATIVE COLLABORATION</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                        WHO EMBRACE THE DESIGN
                                    </p>
                                </div>
                                <div class="col-md-4 col-sm-6 col-xs-10">
                                    <div style={{ paddingLeft: '70px' }} >
                                        <h1><i class="bi bi-pencil-fill"></i></h1>
                                    </div>
                                    <h5 class="ps-4">IMPECCABLE SERVICE</h5>
                                    <p style={{ fontSize: '14px', color: '#5E5E5E' }}>GREAT SERVICE IS ACHIEVED<br></br>
                                        THROUGH PROFESSIONALISM
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div class="container-fluid" style={{ backgroundColor: '#B7B3B2', paddingTop: '5%' }}>
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-10">
                        <h1 class="text-white" style={{ paddingLeft: '190px', paddingTop: '90px', fontSize: '32px' }}>WE PROVIDE INNOVATIVE IT <br></br>
                            SOLUTIONS FOR YOUR <br></br>
                            BUSINESS GROWTH</h1>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-10" style={{ padding: 50 }}>
                        <div class="d-flex  justify-content-center flex-column" style={{ padding: 20, border: '1px solid white', backgroundColor: '#F6F6F6' }} >
                            <h3 style={{ fontSize: '22px' }}>Reach us for all web design service you need</h3><br></br>


                            <input type="text" placeholder="YOUR NAME" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />
                            <input type="text" placeholder="YOUR EMAIL" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />
                            <input type="text" placeholder="YOUR PHONE" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />
                            <label>I'M LOOKING FOR</label>

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input class="me-2 mb-3" type="checkbox" /><label class="mt-1">Web Designing</label>
                                <input class="me-2 ms-2 mb-3" type="checkbox" /><label class="mt-1">Search Engine Optimization</label>
                                <input class="me-2 ms-2 mb-3" type="checkbox" /><label class="mt-1">Digital Marketing</label>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input class="me-2 mb-3" type="checkbox" /><label class="mt-1">Corporate Training</label>
                                <input class="me-2 ms-2 mb-3" type="checkbox" /><label class="mt-1">Outsourcing</label>
                                <input class="me-2 ms-2 mb-3" type="checkbox" /><label class="mt-1">Video Production</label>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input class="me-2 mb-3" type="checkbox" /><label class="mt-1">E-Commerce Web Design</label>
                                <input class="me-2 ms-2 mb-3" type="checkbox" /><label class="mt-1">CMS Website</label>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <input class="me-2  mb-3" type="checkbox" /><label class="mt-1">Payment Gateway Integration </label></div>
                            <h3>HOW DID YOU FIND US</h3>

                            <select style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }}>
                                <option>Select</option>
                                <option>Friend or Business Refferel</option>
                                <option>Google</option>
                                <option>Facebook</option>
                                <option>Press Article</option>
                                <option>Advertisement</option>
                            </select>

                            <input type="text" placeholder="YOUR MESSAGE" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />

                            <button style={{ width: '20%', backgroundColor: '#5CB85C', color: 'white', padding: 5, border: '1px solid #DFDFDF' }}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>




            <div style={{ height: '20vh' }}>

            </div>
            <div style={{ height: '20vh', backgroundColor: '#F4F4F4' }}>

            </div>
            <div style={{ height: '20vh', backgroundColor: '#252525', paddingTop: '40px', paddingLeft: '30px' }}>
                <p class="text-white">© 25/05/2016 PRADEEPIT CONSULTING SERVICES PVT LTD</p>
            </div>

        </div>
        </>

    )
};
export default Digital;