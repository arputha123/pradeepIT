import React, {useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carrosel2 from '../Assets/business.jpg'
import Carrosel3 from '../Assets/lap1.jpg'
import Carrosel4 from '../Assets/iphone.jpg'
import Laptop1 from '../Assets/laptop.jpg';
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
import Spy from '../Assets/spy.png'
import Desktop from '../Assets/desktop.png'
import Airbaloon from '../Assets/hot-air-balloon.png'
import Camera from '../Assets/camera.png'
import Trophy from '../Assets/trophy.png'
import Cloud from '../Assets/cloud.png'
import TopBarComponent from './topbar';
import HomeNumber from "./HomeNumber";
import OurService from "./HomeOurService";
import MobileCarosel from "./MobileCarosel";
import ImageComponent from "./ImageComponent";
import Message from '../Assets/email (1).png';
import Laptop from '../Assets/laptop-screen.png';
import Pencil from '../Assets/stationery-tool.png';
import Baloon from '../Assets/hot-air-balloon (2).png'
import Location from '../Assets/map.png';
import officeStaff from '../Assets/officeStaff.png';
import CamaraPNG from '../Assets/camera-6-256.png';
import targetCircle from '../Assets/targetCircle.png';
import SpeakerPNG from '../Assets/SpeakerPNG.png';
import ThumbsUp from '../Assets/thumbsup.png';
import delhiveryBox from '../Assets/delhiveryBox.png';
import world from '../Assets/world.png';
import '../Style/Digital.css';


const Digital = () => {


    const [count, setCount] = useState(0);
    const [years,setYears] = useState(0)
    const [clients,setClients] = useState(0)
    const [country ,setCountry] = useState(0)

    useEffect(() => {
        const appearOptions = {
          threshold : 0
        };
        const faders = document.querySelectorAll('.fade-in'); 
        const appearOnScrool = new IntersectionObserver(function(entries,appearOnScrool){
          entries.forEach(entry =>{
            if(!entry.isIntersecting){
              return;
            }
            else{
              entry.target.classList.add('appear');
              appearOnScrool.unobserve(entry.target);
            }
          })
        }, appearOptions)
        faders.forEach(fader =>{
          appearOnScrool.observe(fader);
        })
      });

      
  
      useEffect(() => {     
       const  interval = setInterval(function() {
  
          if (count < 304) {
              setCount(prevCount => prevCount + 1);
            }
         else {
              clearInterval(interval); 
            } 
          }, 2)
  
          return () => {
              clearInterval(interval); 
            };
  
      }, [count])
  
      useEffect(() => {     
          const  interval = setInterval(function() {
     
             if (years < 15) {
              setYears(prevCount => prevCount + 1);
               }
            else {
                 clearInterval(interval); 
               } 
             }, 100)
     
             return () => {
                 clearInterval(interval); 
               };
     
         }, [years])
  
         useEffect(() => {     
          const  interval = setInterval(function() {
     
             if (clients < 16) {
              setClients(prevCount => prevCount + 1);
               }
            else {
                 clearInterval(interval); 
               } 
             }, 100)
     
             return () => {
                 clearInterval(interval); 
               };
     
         }, [clients])
  
         useEffect(() => {     
          const  interval = setInterval(function() {
     
             if (country < 3) {
              setCountry(prevCount => prevCount + 1);
               }
            else {
                 clearInterval(interval); 
               } 
             }, 400)
     
             return () => {
                 clearInterval(interval); 
               };
     
         }, [country])

    return (

        <>
            <TopBarComponent />

            <div>

            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="1" class="me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="2" class="me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="3" class="me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="4" class="me-2 p-0"></li>

                    </ol>

                    <div class="carousel-inner" >
                        <div class="item active Image1">
                            <img src={officeStaff} class='Carrosel' alt="Los Angeles" style={{ width: '100%', height: '100vh' }} />
                            <div class="Backround">
                            <div class="Top" style={{ width: '100%', height: '100vh',backgroundColor:'#00000099'}}>
                                <h2 class="Top1">Outsourcing Service for Sap Hypris</h2>
                                <p class="Top2"> We know it's hards to find a reliable sap hypris expert when you need
                                    one which is why we have set on a miison to bring them all to one place
                                </p>
                            </div>
                            </div>
                        </div>

                        <div class="item Image1">
                            <img src={Carrosel2} class='Carrosel' alt="Chicago" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh',backgroundColor:'#00000099'}}>
                                <h2 class="Top1">Outsourcing Service for Java Development</h2>
                                <p class="Top2"> WE WILL PROVIDE JAVA INDUSTRY JAVA PROFESSIONALS TO SOFTWERE INDUSTRY
                                </p>
                            </div>

                        </div>

                        <div class="item Image1">
                            <img src={Carrosel3} class='Carrosel' alt="New york" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh',backgroundColor:'#00000099'}}>
                                <h2 class="Topp" >Give Wings To Your Business, Develop a Mobile App</h2>
                                <p class="Top2"> Our Mobile App Solutions will make your business a touch away on iPhone, Android or iPad. We develop creative and customer centric mobile apps to give your users and customers a ceaseless friendly experience.
                                </p>
                            </div>

                        </div>

                        <div class="item Image1">
                            <img src={Carrosel4} class='Carrosel' alt="New york" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh',backgroundColor:'#00000099'}}>
                                <h2 class="Top1" >We Develop Ideas Into Pioneering Websites</h2>
                                <p class="Top2">Our services such as corporate Website Design & Development, Search Engine Optimization(SEO), logo design, Magento web development, digital marketing approaches, Google Adwords, WordPress website development at a single place.
                                </p>
                            </div>
                        </div>

                        <div class="item Image1">
                            <img src={Carrosel2} class='Carrosel' alt="Chicago" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh',backgroundColor:'#00000099'}}>
                                <h2 class="Top1">E commerce Development: Sell Your Products in Online Bazar</h2>
                                <p class="Top2"> PradeepIT delivers efficient <b>custom eCommerce store development services</b> 
                                <b>eCommerce development solutions </b> along with a huge list of offerings including extensions development, theme customization and maintenance services.
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


                <div class="container" style={{ overflow: "hidden", fontSize: 14 }}>

                    <div class="row animated animatedFadeInUp fadeInUp fade-in" style={{ marginTop: 60, textAlign: "start", fontSize: 12 }}>
                        <h2 style={{textAlign:'center',wordSpacing:5}}><b>WHY CHOOSE US?</b></h2>
                        <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                            <img src={Spy} style={{ height: 50, width: 80, marginTop: 40 }} />
                            <p>

                                <div class="separator-line bg-yellow no-margin-lr"></div>
                                <h4 style={{ marginLeft: 35, fontSize: 12 }}>OUTSOURCING SERVICE PROVIDER</h4>
                                <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900,height:2,backgroundColor:'#e6af2a',color:'#e6af2a' }} />
                                <p style={{ fontSize: 14, marginLeft: 35, marginRight: 20 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
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

                                <h4 style={{ marginLeft: 35, fontSize: 12 }}>WEB DEVELOPMENT</h4>
                                <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900,height:2,backgroundColor:'#e6af2a',color:'#e6af2a'  }} />

                                <p style={{ fontSize: 14, marginLeft: 35}}>
                                    We provide field expertise and complete support right from the initial requirement design all the way to launch and post-implementation.Our expertise in Web Development involves Creating</p>
                                <ul class="Listitems">
                                    <li>Static Website</li>
                                    <li>CMS Website</li>
                                    <li>Ecommerce Website</li>
                                    <li>Website Re-Design</li>
                                    <li>Web Hosting & Server Maintainance</li>
                                    <li>WordPress Website</li>
                                    <li>Responsive Website</li>
                                </ul>


                            </p>
                        </div>
                        <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                            <img src={Airbaloon} style={{ height: 50, width: 80, marginTop: 40 }} />
                            <p>

                                <div class="separator-line bg-yellow no-margin-lr"></div>
                                <h4 style={{ marginLeft: 35, fontSize: 12 }}>DIGITAL MARKETING</h4>
                                <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900,height:2,backgroundColor:'#e6af2a',color:'#e6af2a'  }} />

                                <p style={{ fontSize: 14, marginLeft: 35}}>
                                    We believe that the work we do must have a real impact in the online world as well as in the conventional marketplace with help of Our Digital Marketing Experts and we exposed to measure ROI of digital media channels and Our services are</p>
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
                    <div class="row animated animatedFadeInUp fadeInUp fade-in" style={{ marginTop: 30, textAlign: "start", fontSize: 12 }}>
                        <div class="col-md-4 col-sm-9" style={{ display: "flex", flexDirection: "row" }}>
                            <img src={Camera} style={{ height: 50, width: 80, marginTop: 40 }} />

                            <p>

                                <div class="separator-line bg-yellow no-margin-lr"></div>

                                <h4 style={{ marginLeft: 35, fontSize: 12 }}>VIEDO PRODUCTION</h4>
                                <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900,height:2,backgroundColor:'#e6af2a',color:'#e6af2a'  }} />

                                <p style={{ fontSize: 14, marginLeft: 35,marginRight:20}}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
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
                                <h4 style={{ marginLeft: 35, fontSize: 12 }}>CORPORATE & ONLINE TRANINING</h4>
                                <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900,height:2,backgroundColor:'#e6af2a',color:'#e6af2a'  }} />

                                <p style={{ fontSize: 14, marginLeft:35,marginRight:20 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
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

                                <h4 style={{ marginLeft: 35, fontSize: 12 }}>CLOUD APPLICATION DEVELOPMENT</h4>
                                <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900,height:2,backgroundColor:'#e6af2a',color:'#e6af2a'  }} />
                                <p style={{ fontSize: 14, marginLeft:35 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
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



                <div class="container-fluid" style={{ position: 'relative' }}>
                    <div class="row">
                        <img src={Laptop1} class="img-fluid" style={{ width: '100%', height: '50vh' }} />

                    </div>
                    <div class="row" style={{ position: 'absolute', bottom: 0, backgroundColor: '#000000C3', left: 15, width: '99%', height: '50vh', padding: 100, color: '#FFFFFF' }}>
                        <div class="col-md-3 col-sm-3 col-xs-3" style={{ fontSize: 18 }}>
                        <img  src={delhiveryBox} style={{height:50,width:60,marginLeft:20,marginBottom:5}}/>
                           <h1 style={{ marginLeft: 20 }}>{years}</h1>
                            <p>Years of Experience</p>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3" style={{  fontSize: 18 }}>
                        <img  src={ThumbsUp} style={{height:50,width:50,marginLeft:20,marginBottom:5}}/>
                            <h1 style={{ marginLeft: 20 }}>{count}</h1>
                            <p>Projects Completed</p>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3" style={{  fontSize: 18 }}>
                        <img  src={ThumbsUp} style={{height:50,width:50,marginLeft:20,marginBottom:5}}/>
                        <h1 style={{ marginLeft: 30 }}>{clients}</h1>
                            <p>Happy Clients</p>
                        </div>
                        <div class="col-md-3 col-sm-3 col-xs-3" style={{  fontSize: 18 }}>
                        <img  src={world} style={{height:50,width:50,marginLeft:20,marginBottom:5}}/>
                        <h1 style={{ marginLeft: 30 }}>{country}</h1>
                            <p>Number of Countries</p>
                        </div>
                    </div>

                </div>
                {/* tab design */}

                <div class="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><h2 style={{ marginLeft: '40%', fontWeight: '800', marginTop: '3%', marginBottom: '3%' }}> LATEST WORK</h2>
                    <p style={{ fontSize: '16px', paddingBottom: '30px', color: '#7F93C1' }}>We are technology leaders and have crafted intuitive and lasting online and mobile experiences for hundreds of associations and non-profits.</p>
                </div>
                <div id="exTab3" class="container-fluid">
                    <ul class="nav nav-pills" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <li class="active">
                            <a style={{fontSize: 14}} href="#1b" data-toggle="tab">ALL</a>
                        </li>
                        <li><a style={{fontSize: 14}} href="#2b" data-toggle="tab">SAP</a>
                        </li>
                        <li><a style={{fontSize: 14}} href="#3b" data-toggle="tab">WEBSITE DESIGN</a>
                        </li>

                    </ul>

                    <div class="tab-content clearfix">
                        <div class="tab-pane active" id="1b">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3 col-sm-4 col-xs-10 CARD">
                                        <img src={Card1} class="me-2 mb-4 Card1 Lerbs" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>LERBS-GERMANY,HAMBURG</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} />
                                        </div>

                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card2} class="me-2 mb-4 Card2" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>SAP CD-INDIA,BANGALORE</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card3} class="me-2 mb-4 Card3" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>DIGITAL MEDIA CENTRE- STUTTGART,GERMANY</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card4} class="me-2 mb-4 Card4" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>EPLUS-CGI,GERMANY DUSSELDORF</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                </div>
                            </div>

                            <div class="container-fluid mt-4">
                                <div class="row">
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card5} class="me-2 mb-4 Card5" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>FUTURE GROUP-INDIA, BANGALORE</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>

                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card6} class="me-2 mb-4 Card6" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>LANDMARK DOWNSHIPS</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card7} class="me-2 mb-5 Card7" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>KANNADAMASSALA.COM</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>

                                </div>
                            </div>



                        </div>
                        <div class="tab-pane" id="2b">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-md-3 col-sm-4 col-xs-10 CARD">
                                        <img src={Card1} class="me-2 mb-4 Card1" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>LERBS-GERMANY,HAMBURG</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} />
                                        </div>

                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card2} class="me-2 mb-4 Card2" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>SAP CD-INDIA,BANGALORE</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card3} class="me-2 mb-4 Card3" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>DIGITAL MEDIA CENTRE- STUTTGART,GERMANY</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card4} class="me-2 mb-4 Card4" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>EPLUS-CGI,GERMANY DUSSELDORF</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-4 col-xs-10">
                                <img src={Card5} class="me-2 mb-4 Card5" />
                                <div class="Lerbs">
                                    <h6 style={{ fontSize: 13 }}>FUTURE GROUP-INDIA, BANGALORE</h6>
                                    <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                            </div>
                        </div>
                        <div class="tab-pane" id="3b">
                            <div class="container-fluid mt-4">
                                <div class="row">


                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card6} class="me-2 mb-4 Card6" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>LANDMARK DOWNSHIPS</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>
                                    <div class="col-md-3 col-sm-4 col-xs-10">
                                        <img src={Card7} class="me-2 mb-5 Card7" />
                                        <div class="Lerbs">
                                            <h6 style={{ fontSize: 13 }}>KANNADAMASSALA.COM</h6>
                                            <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <HomeNumber />
                <OurService />
                <MobileCarosel />
                <ImageComponent />

                <div class="container-fluid container">
                    <div class="row fade-in">
                        <div class="col-md-4 col-sm-6 col-xs-10">
                            <img src={Adope} class="Adope" style={{ height: 190, width: '80%', marginBottom: 50}} />
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
                    <div class="d-flex row justify-content-center" 
                    style={{ alignItems: 'center', width: '10%', marginLeft: '44%', paddingBottom: 30, paddingTop: 20 }}
                    >
                        <button class="Blog fade-in" style={{fontSize:12}}>VIEW ALL BLOG</button>
                    </div>

                </div>





                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="1" class="me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="2" class="me-2 p-0"></li>

                    </ol>

                    <div class="carousel-inner" >
                        <div class="item active">
                            <div class="container-fluid">
                                <div class="row d-flex align-items-center justify-content-center ps-5" style={{ backgroundColor: '#000000', color: 'white', height: '50vh'}}>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }}>
                                        <img src={CamaraPNG}  style={{ height: 50, width: 60, marginTop: 40}}/>
                                        </div>

                                        <h5 class="ps-4" style={{color:'#FFFFFF'}}>CONSIDERED DESIGN</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                            PROJECT’S OBJECTIVES.</p>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }} >
                                        <img src={targetCircle}  style={{ height: 50, width: 60, marginTop: 40}}/>
                                        </div>

                                        <h5 class="ps-4" style={{color:'#FFFFFF'}}>CREATIVE COLLABORATION</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                            WHO EMBRACE THE DESIGN
                                        </p>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }} >
                                        <img src={SpeakerPNG}  style={{ height: 50, width: 60, marginTop: 40}}/>
                                        </div>
                                        <h5 class="ps-4" style={{color:'#FFFFFF'}}>IMPECCABLE SERVICE</h5>
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
                                            <img src={Message}  style={{ height: 40, width: 60, marginTop: 40}}/>
                                            </div>
                                            <h5 class="ps-4 text-white">ENHANCE AMPLIFY</h5>
                                            <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WORKING WITH THE LATEST<br></br>
                                                TECHNOLOGY WE DESIGN .</p>
                                        </div>
                                        <div class="col-md-4 col-sm-6 col-xs-10">
                                            <div style={{ paddingLeft: '50px' }} >
                                            <img src={Laptop}  style={{ height: 40, width: 60, marginTop: 40}}/>
                                            </div>
                                            <h5 class="ps-4 text-white">CONSIDERED DESIGN</h5>
                                            <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                            PROJECT’S OBJECTIVES.
                                            </p>
                                        </div>
                                        <div class="col-md-4 col-sm-6 col-xs-10">
                                            <div style={{ paddingLeft: '50px' }} >
                                            <img src={Pencil}  style={{ height: 40, width: 60, marginTop: 40}}/>
                                            </div>
                                            <h5 class="ps-4 text-white">CREATIVE COLLABORATION</h5>
                                            <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                                WHO EMBRACE THE DESIGN
                                            </p>
                                        </div>
                                    </div>
                                </div>

                        </div>

                        <div class="item">
                        <div class="container-fluid">
                                    <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#000000', color: 'white', height: '50vh' }}>
                                        <div class="col-md-3 col-sm-6 col-xs-10">
                                            <div style={{ paddingLeft: '70px' }} >
                                            <img src={Pencil}  style={{ height: 40, width: 60, marginTop: 40}}/>
                                            </div>
                                            <h5 class="ps-4 text-white">CREATIVE COLLABORATION</h5>
                                            <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                                WHO EMBRACE THE DESIGN
                                            </p>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-10">
                                            <div style={{ paddingLeft: '70px' }} >
                                            <img src={Baloon}  style={{ height: 40, width: 60, marginTop: 40}}/>
    
                                            </div>
                                            <h5 class="ps-4 text-white">IMPECCABLE SERVICE</h5>
                                            <p style={{ fontSize: '14px', color: '#5E5E5E' }}>GREAT SERVICE IS ACHIEVED<br></br>
                                                THROUGH PROFESSIONALISM
                                            </p>
                                        </div>
                                        <div class="col-md-3 col-sm-6 col-xs-10">
                                            <div style={{ paddingLeft: '70px' }} >
                                            <img src={Location}  style={{ height: 40, width: 60, marginTop: 40}}/>
    
                                            </div>
                                            <h5 class="ps-4 text-white">UNDERSTAND SITUATION</h5>
                                            <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WORKING WITH THE LATEST<br></br>
                                                TECHNOLOGY WE DESIGN .</p>
                                        </div>
                                    </div>
                                </div>

                        </div>

                    </div>
                </div>


                <div class="container-fluid" style={{ backgroundColor: '#B7B3B2', paddingTop: '5%' }}>
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-10">
                            <h1 class="text-white" style={{ paddingLeft: 100, paddingTop:50, fontSize: 40,textAlign:'center' }}>WE PROVIDE INNOVATIVE IT <br></br>
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