import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import business from '../Assets/business4.png'
import mobile3 from '../Assets/mobile3.png'
import Adope from '../Assets/adobemagento.png'
import Commerce from '../Assets/ecommerce-2607114_960_720.jpg';
import Shopping from '../Assets/shopping-3407232_960_720.jpg';
import TopBarComponent from './topbar';
import HomeNumber from "./HomeNumber";
import OurService from "./HomeOurService";
import MobileCarosel from "./MobileCarosel";
import ImageComponent from "./ImageComponent";
import KeyPerson from "./KeyPerson";
import WhyChooseUs from "./whyChooseUS";
import Latestworks from "./LatestWork";
import Message from '../Assets/open-message.png';
import Laptop from '../Assets/laptop-screen.png';
import Pencil from '../Assets/stationery-tool.png';
import Baloon from '../Assets/hot-air-balloon (2).png'
import Location from '../Assets/map.png';
import buy from '../Assets/buy5.png';
import CamaraPNG from '../Assets/camera-6-256.png';
import targetCircle from '../Assets/targetCircle.png';
import SpeakerPNG from '../Assets/SpeakerPNG.png';
import ThumbsUp from '../Assets/thumbsup.png';
import delhiveryBox from '../Assets/delhiveryBox.png';
import world from '../Assets/world.png';
import happyClient from '../Assets/man.png';
import wethink from '../Assets/weThinkAudience.jpg';
import seo from '../Assets/seo.jpg';
import '../Style/Digital.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Digital = () => {

    const [count, setCount] = useState(0);
    const [years, setYears] = useState(0)
    const [clients, setClients] = useState(0)
    const [country, setCountry] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200, // Autoplay speed in milliseconds
    };

    useEffect(() => {
        const appearOptions = {
            threshold: 0
        };
        const faders = document.querySelectorAll('.fade-in');
        const appearOnScrool = new IntersectionObserver(function (entries, appearOnScrool) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScrool.unobserve(entry.target);
                }
            })
        }, appearOptions)
        faders.forEach(fader => {
            appearOnScrool.observe(fader);
        })
    });

    useEffect(() => {
        const interval = setInterval(function () {

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
        const interval = setInterval(function () {

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
        const interval = setInterval(function () {

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
        const interval = setInterval(function () {

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
                            <img src={wethink} class='Carrosel' alt="Los Angeles" style={{ width: '100%', height: '100vh', position: 'relative' }} />

                            <div class="Backround">
                                <div class="Top" style={{ width: '100%', height: '100vh', backgroundColor: '#00000032' }}>
                                    <h2 class="Top1">Outsourcing Service for Sap Hypris</h2>
                                    <p class="Top2"> We know it's hards to find a reliable sap hypris expert when you need
                                        one which is why we have set on a miison to bring them all to one place
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="item Image1">
                            <img src={seo} class='Carrosel' alt="Chicago" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh', backgroundColor: '#55555564' }}>
                                <h2 class="Top1">Outsourcing Service for Java Development</h2>
                                <p class="Top2"> WE WILL PROVIDE JAVA INDUSTRY JAVA PROFESSIONALS TO SOFTWERE INDUSTRY
                                </p>
                            </div>

                        </div>

                        <div class="item Image1">
                            <div className="Carrosel" style={{ width: '100%', height: '100vh' }}>
                                <img src={mobile3} style={{ width: '100%' }} />
                                <div class="Top" style={{ width: '100%', height: '100vh', backgroundColor: '#0000001A' }}>
                                    <h2 class="Topp" >Give Wings To Your Business, Develop a Mobile App</h2>
                                    <p class="Top2"> Our Mobile App Solutions will make your business a touch away on iPhone, Android or iPad. We develop creative and customer centric mobile apps to give your users and customers a ceaseless friendly experience.
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div class="item Image1">
                            <img src={business} class='Carrosel' alt="New york" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh', backgroundColor: '#00000032' }}>
                                <h2 class="Top1" >We Develop Ideas Into Pioneering Websites</h2>
                                <p class="Top2">Our services such as corporate Website Design & Development, Search Engine Optimization(SEO), logo design, Magento web development, digital marketing approaches, Google Adwords, WordPress website development at a single place.
                                </p>
                            </div>
                        </div>

                        <div class="item Image1">
                            <img src={buy} class='Carrosel' alt="Chicago" style={{ width: '100%', height: '100vh' }} />
                            <div class="Top" style={{ width: '100%', height: '100vh', backgroundColor: '#332a10B3' }}>
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

                <WhyChooseUs />

                <div class="container-fluid">
                    <div class="row ImageMove">
                        <div class="row ImageMoveContent">
                            <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3" style={{ fontSize: 18 }}>
                                <img src={delhiveryBox} style={{ height: 50, width: 60, marginLeft: 20, marginBottom: 5 }} />
                                <h1 style={{ marginLeft: 20 }}>{years}</h1>
                                <p>Years of Experience</p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3" style={{ fontSize: 18 }}>
                                <img src={ThumbsUp} style={{ height: 50, width: 50, marginLeft: 20, marginBottom: 5 }} />
                                <h1 style={{ marginLeft: 20 }}>{count}</h1>
                                <p>Projects Completed</p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3" style={{ fontSize: 18 }}>
                                <img src={happyClient} style={{ height: 50, width: 50, marginLeft: 20, marginBottom: 5 }} />
                                <h1 style={{ marginLeft: 30 }}>{clients}</h1>
                                <p>Happy Clients</p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6 col-lg-3" style={{ fontSize: 18 }}>
                                <img src={world} style={{ height: 50, width: 50, marginLeft: 20, marginBottom: 5 }} />
                                <h1 style={{ marginLeft: 30 }}>{country}</h1>
                                <p>Number of Countries</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* tab design */}
                <Latestworks />


                <HomeNumber />
                <OurService />
                <KeyPerson />

                <MobileCarosel />
                <ImageComponent />

                <hr style={{ width: '100%', marginBottom: 100, marginTop: 50 }}></hr>

                <div class="container-fluid container" >
                    <h2 style={{ textAlign: 'center', marginBottom: 80, fontWeight: 550, letterSpacing: 1 }}>LATEST BLOGS</h2>
                    <div class="row fade-in">
                        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12 " >


                            <div className="img-wrapper">

                                <img src={Adope} alt="" className="hover-zoom" />
                                <div className="image-overlay"></div>
                            </div>


                            <p style={{ margin: "40px 0px 0px", color: "#000000", fontFamily: "12px", fontFamily: "Open Sans, sans-serif" }}>

                                MAGENTO ACQUISITION: WILL IT TAKES MAGENTO COMMERCE INTO NEW HEIGHT</p>

                            <h6 style={{ margin: "10px 0px 0px", fontFamily: "Open Sans, sans-serif" }}>POSTED BY ADMIN | 24 FEBRUARY 2016</h6>
                            <p style={{ fontSize: '14px', margin: "40px 0px 0px", fontFamily: "Open Sans, sans-serif" }}>Last month, IT industry had got big surprise about <br />
                                magento acquisition by adobe industry. This made<br /> not only a surprise
                                but shocked to leading ecommerce...</p>
                        </div>
                        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">

                            <div className="img-wrapper">
                                <img src={Commerce} alt="" className="hover-zoom" />
                                <div className="image-overlay"></div>
                            </div>


                            <p style={{ margin: "40px 0px 0px", color: "#000000", fontFamily: "12px" }}>WILL ECOMMERCE OVERCOME TOMORROWS
                                RETAIL CHALLENGES…?</p>

                            <h6 style={{ margin: "10px 0px 0px" }}>POSTED BY ADMIN | 24 FEBRUARY 2016</h6>
                            <p style={{ fontSize: '14px', margin: "40px 0px 0px" }}>After discovering new way of supply chain<br /> into market and distribution of products to customers,<br /> which has made remarkable industry growth<br /> into so called retail...</p>
                        </div>

                        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">


                            <div className="img-wrapper">
                                <img src={Shopping} alt="" className="hover-zoom" />
                                <div className="image-overlay"></div>
                            </div>
                            <p style={{ margin: "40px 0px 0px", color: "#000000", fontFamily: "12px" }}>

                                VOICE BASED SHOPPING:
                                NEXT GENERATION OF ECOMMERCE</p>

                            <h6 style={{ margin: "10px 0px 0px" }}>POSTED BY ADMIN | 24 FEBRUARY 2016</h6>
                            <p style={{ fontSize: '14px', margin: "40px 0px 0px" }}>In the technology revolution, the innovation has no limit in any filed where technology taking forward into next level. As earlier days in the last...</p>
                        </div>
                    </div>
                    <div class="d-flex row justify-content-center"
                        style={{ alignItems: 'center', width: '10%', marginLeft: '44%', paddingBottom: 30, paddingTop: 20 }}
                    >
                        <button class="Blog fade-in" style={{ fontSize: 12 }}>VIEW ALL BLOG</button>
                    </div>
                </div>

                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="1" class="me-2 p-0"></li>
                        <li data-target="#myCarousel" data-slide-to="2" class="me-2 p-0"></li>

                    </ol>

                    <div class="carousel-inner" style={{ backgroundColor: '#000000', color: 'white', paddingLeft: "10%" }}>
                        <div class="item active">
                            <div class="container-fluid">
                                <div class="row d-flex align-items-center justify-content-center" style={{ backgroundColor: '#000000', color: 'white', height: '70vh' }}>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }}>
                                            <img src={CamaraPNG} style={{ height: 50, width: 60 }} />
                                        </div>

                                        <h5 class="ps-4" style={{ color: '#FFFFFF' }}>CONSIDERED DESIGN</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                            PROJECT’S OBJECTIVES.</p>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }} >
                                            <img src={targetCircle} style={{ height: 50, width: 60 }} />
                                        </div>

                                        <h5 class="ps-4" style={{ color: '#FFFFFF' }}>CREATIVE COLLABORATION</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                            WHO EMBRACE THE DESIGN
                                        </p>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }} >
                                            <img src={SpeakerPNG} style={{ height: 50, width: 60 }} />
                                        </div>
                                        <h5 class="ps-4" style={{ color: '#FFFFFF' }}>IMPECCABLE SERVICE</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>GREAT SERVICE IS ACHIEVED<br></br>
                                            THROUGH PROFESSIONALISM
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="item">
                            <div class="container-fluid">
                                <div class="row d-flex align-items-center ps-5" style={{ backgroundColor: '#000000', color: 'white', height: '70vh' }}>
                                    <div class="col-md-4 col-sm-6 col-xs-10 ps-5">
                                        <div style={{ paddingLeft: '40px' }} >
                                            <img src={Message} style={{ height: 50, width: 60 }} />
                                        </div>
                                        <h5 class="ps-4 text-white">ENHANCE AMPLIFY</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WORKING WITH THE LATEST<br></br>
                                            TECHNOLOGY WE DESIGN .</p>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '50px' }} >
                                            <img src={Laptop} style={{ height: 50, width: 60 }} />
                                        </div>
                                        <h5 class="ps-4 text-white">CONSIDERED DESIGN</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE RESPOND DIRECTLY TO A<br></br>
                                            PROJECT’S OBJECTIVES.
                                        </p>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '50px' }} >
                                            <img src={Pencil} style={{ height: 50, width: 60 }} />
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
                                <div class="row d-flex align-items-center justify-content-center" style={{ backgroundColor: '#000000', color: 'white', height: '70vh' }}>
                                    <div class="col-md-3 col-sm-6 col-xs-10">
                                        <div style={{ paddingLeft: '70px' }} >
                                            <img src={Pencil} style={{ height: 50, width: 60 }} />
                                        </div>
                                        <h5 class="ps-4 text-white">CREATIVE COLLABORATION</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>WE LOVE WORKING WITH PEOPLE<br></br>
                                            WHO EMBRACE THE DESIGN
                                        </p>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-10" style={{ marginLeft: 50 }}>
                                        <div style={{ paddingLeft: '70px' }} >
                                            <img src={Baloon} style={{ height: 50, width: 60 }} />

                                        </div>
                                        <h5 class="ps-4 text-white">IMPECCABLE SERVICE</h5>
                                        <p style={{ fontSize: '14px', color: '#5E5E5E' }}>GREAT SERVICE IS ACHIEVED<br></br>
                                            THROUGH PROFESSIONALISM
                                        </p>
                                    </div>
                                    <div class="col-md-3 col-sm-6 col-xs-10" style={{ marginLeft: 50 }}>
                                        <div style={{ paddingLeft: '70px' }} >
                                            <img src={Location} style={{ height: 50, width: 60 }} />

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

                <div class="container-fluid" style={{ backgroundColor: '#B7B3B2', paddingTop: '5%', width: '100%' }}>
                    <div
                    //  class="flex-row d-flex"
                    >
                        <div class="col-md-6 col-sm-12 col-xs-12">
                            <h1 class="text-white Growth">WE PROVIDE INNOVATIVE IT <br></br>
                                SOLUTIONS FOR YOUR <br></br>
                                BUSINESS GROWTH</h1>
                        </div>
                        <div class="col-md-6 col-sm-12 col-xs-12" style={{ padding: 50 }}>
                            <div class="d-flex  justify-content-center flex-column" style={{ padding: 20, border: '1px solid white', backgroundColor: '#F6F6F6' }} >
                                <h3 style={{ fontSize: '22px' }}>Reach us for all web design service you need</h3><br></br>


                                <input type="text" placeholder="YOUR NAME" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />
                                <input type="text" placeholder="YOUR EMAIL" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />
                                <input type="text" placeholder="YOUR PHONE" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />
                                <label>I'M LOOKING FOR</label>

                                <div class="Check1">
                                    <input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-1 me-1">Web Designing</label>
                                    <div class="Input2"><input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-2 me-1">Search Engine Optimization</label></div>
                                    <div class="Input3"><input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-2">Digital Marketing</label></div>
                                </div>
                                <div class="Check2">
                                    <input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-1 me-1">Corporate Training</label>
                                    <div class="Input2"> <input class="me-2  mt-2 mb-3" type="checkbox" /><label class="mb-1 me-1">Outsourcing</label></div>
                                    <div class="Input3"><input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-1">Video Production</label></div>
                                </div>
                                <div class="Check3">

                                    <div><input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-1">E-Commerce Web Design</label></div>
                                    <div class="Input4"><input class="me-2  mb-1 mt-2" type="checkbox" /><label class="mb-1">CMS Website</label></div>
                                </div>
                                <div Class="Check">
                                    <input class="me-2 mt-2 mb-3" type="checkbox" /><label class="mb-2">Payment Gateway Integration </label></div>
                                <h3 class="mt-3 mb-3">HOW DID YOU FIND US</h3>

                                <select style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }}>
                                    <option>Select</option>
                                    <option>Friend or Business Refferel</option>
                                    <option>Google</option>
                                    <option>Facebook</option>
                                    <option>Press Article</option>
                                    <option>Advertisement</option>
                                </select>

                                <input type="text" placeholder="YOUR MESSAGE" style={{ marginBottom: '10px', padding: 10, border: '1px solid #DFDFDF' }} />

                                <button class="submit" >SUBMIT</button>
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