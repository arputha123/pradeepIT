import React, { useState, useEffect, useRef } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../Assets/logo.png'
import LogoPurple from '../../Assets/logo_purple_80.png';
import LogoH from '../../Assets/logo-h_small.png';
import Standard from '../../Assets/Standardtouch-logo.png';
import KouChoun from "../../Assets/Kou-Chan-logo-1.png"
import Embitel from "../../Assets/embitel-logo2.jpg";
import Pradeeep from "../../Assets/predeep.png";
import '../../Pages/SapCxOutsourcing/SecondPage.css';
import { TfiDesktop } from "react-icons/tfi";
import { BsTrophy } from "react-icons/bs";
import { GiAirBalloon } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { BsScissors } from "react-icons/bs";
import { TbTools } from "react-icons/tb";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function SecondPage() {


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



    useEffect(() => {
        const animatedText = document.querySelector('.animated-text');
        animatedText.classList.add('animate');

    }, []);

    const images = [Logo, LogoPurple, LogoH, Standard, KouChoun, Embitel, Pradeeep];

    const options = {
        items: 1,
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        autoplay: true,
        playing: true,
        autoplayTimeout: 1000,
        navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    };


    return (
        <div style={{ width: "100%", height: "auto" }}>

            <div class="d-flex justify-content-center" style={{ paddingBottom: 40 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, backgroundColor: "", padding: "5px 5px",color:"black",letterSpacing:"0.02em" }}>WE OUTSOURCED TO THESE COMPANIES</h3>
            </div>

            <div style={{ paddingBottom: "120px", height: "auto", padding: "10px 60px", cursor: "ew-resize" }} className="custom-owl-carousel" >
                <OwlCarousel options={options} class="owl-carousel" style={{ postion: "relative", backgroundColor: "", height: "auto", padding: "50px 20px", display: "flex", justifyContent: "space-around" }}  >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Logo ${index + 1}`} style={{ height: "40px", width: "100px" }} />
                        </div>
                    ))}

                    <div>&nbsp;</div>


                </OwlCarousel>


            </div>

            <div  style={{ height: "auto", backgroundColor: "#E5E5E5", padding: "100px 50px" }}>

                <div class="d-flex justify-content-center" >
                    <h4 style={{ fontSize: 20, paddingBottom: 100,fontWeight:700,color:"black",letterSpacing:"0.02em" }}>OUTSOURCING - HIRE SAP CX FULL STACK DEVELOPERS</h4>
                </div>

                <div>
                    <p style={{ textAlign: "center", color: "#626262", letterSpacing: "0.02em", marginBottom: 22, fontSize: 13 }}>PradeepIT founding team has executed end-to-end hybris projects successfully, with significant expertise and experience on the following hybris modules.With over  24+ digital commerce implementations, agnostic of eCommerce platforms, PradeepIT offers the best in class SAP/hybris consulting, SAP/hybris staffing services and SAP/hybris Support to all of our SAP Clients & Partners, with strong focus on quality and on-time implementations.</p>
                </div>
                <div>
                    <p style={{ textAlign: "center", color: "#626262", letterSpacing: "0.02em", marginBottom: 60, fontSize: 13 }}>Our SAP/hybris practice is based on a rich set of Expertise, Experience, Execution, and innovative solutions, assisting customers using the SAP hybris platform realize digital commerce potential with a full range of consulting services, beginning with digital commerce strategy and experience design, progressing through a comprehensive implementation approach, and offering hosting & support.</p>
                </div>


                <div class="row g-0 row-gap-5 fade-in" style={{ width: "100%", height: "auto" }} >
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4" style={{ position: "relative" }}>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" style={{}}>
                                <TfiDesktop style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h5 class="fade-in" style={{ fontSize: "11px", letterSpacing: 1.5,fontWeight:600,color:"black" }}>SAP HYBRIS PROJECT DELIVERY TEAM</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3 fade-in" style={{ fontSize: "13px", color: "#626262" }} >hybris PCM & Web Content Management
                                    hybris Cloud for Commerce
                                    hybris Telco , B2C & B2B Commerce
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <BsTrophy style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>HYBRIS MARKETING & INTEGRATION</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3 " style={{ fontSize: "13px", color: "#626262" }}  >hybris Marketing
                                    hybris CRM Integration
                                    hybris OMS Integration</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <GiAirBalloon style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600  }}>ECOMMERCE SOLUTIONS FOR VERTICALS THAT SUIT YOUR NEEDS</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >Fashion (Apparel/Footwear, Luxury/Sporting Goods & Wearables)
                                    Manufacturing
                                    Wholesale & Distribution</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <TbTargetArrow style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600  }}>HYBRIS CERTIFIED CONSULTANTS</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >With the best talent available in the industry
                                    to ensure excellence in project delivery.

                                    Rest assured rely on our mature processes,
                                    ensuring timely delivery of the project.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <BsScissors style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5 ,color:"black",fontWeight:600 }}>OUR UNIQUE SAP STAFFING MODEL</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} ><b>Onsite:</b> PradeepIT delivers any needed of
                                    SAP CX consultants directly to your facility {""}
                                    <b>Offsite/Offshore:</b> Remote SAP CX Resources are available to you as you
                                    need them both Near-shore and Offshore at very competetive pricing.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <TbTools style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600  }}>HOSTING & SUPPORT</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >We provide technical solutions that maintain the health
                                    and drive growth and profitability for your eCommerce site.
                                    Our Consultant will exposed to Support project with full Agile methodology adoption.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SecondPage;
