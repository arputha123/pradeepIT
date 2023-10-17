import React,{useState,useEffect,useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../Assets/logo.png'
import LogoPurple from '../../Assets/logo_purple_80.png';
import LogoH from '../../Assets/logo-h_small.png';
import Standard from '../../Assets/Standardtouch-logo.png';
import KouChoun from "../../Assets/Kou-Chan-logo-1.png"
import Embitel from "../../Assets/embitel-logo2.jpg";
import Pradeeep from "../../Assets/predeep.png";
import '../../Pages/CMSPayment/SecondPage.css';
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
          threshold : 1
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

    const images = [Logo, LogoPurple, LogoH, Standard, KouChoun, Embitel, Pradeeep];

    const options = {
        items: 1,
        loop: true,
        margin: 10,
        dots:false,
        nav: true,
        autoplay: true,
        playing:true,
        autoplayTimeout: 1000, 
           navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
        responsive: {
            0: {
                items: 7
            },
            600: {
                items: 7
            },
            1000: {
                items: 7
            },
            390:{
                items:2
            }
        }
    };
    

    return (
        <div  style={{ width: "100%", height: "auto" }}>

            <div class="d-flex justify-content-center" style={{ paddingBottom: 40 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, backgroundColor: "", padding: "5px 5px",color:"black"}}>WE WORKED WITH THESE BUSINESS</h3>
            </div>

            <div  style={{ paddingBottom: "120px", height:"auto",padding:"10px 60px",cursor:"ew-resize" }} className="custom-owl-carousel" >
                <OwlCarousel  options={options} class="owl-carousel" style={{postion:"relative",backgroundColor:"",height:"auto",padding:"50px 20px",display:"flex",justifyContent:"space-around"}}  >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Logo ${index + 1}`} style={{ height: "40px", width: "100px"}}  />
                        </div>
                    ))}
                    
                    <div>&nbsp;</div>
                    

                </OwlCarousel>
               
                
            </div>

            <div style={{ height: "auto", backgroundColor: "#E5E5E5", padding: "100px" }}>

                <div class="d-flex justify-content-center" >
                    <h4 style={{ fontSize: 20, paddingBottom: 100,fontWeight:700,color:"black" }}>WHAT WE DO</h4>
                </div>

                <div class="row g-0 row-gap-5 fade-in" style={{ width: "100%", height: "auto"}} >
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4" style={{position:"relative"}}>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{}}>
                                <TfiDesktop style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>CMS WEBSITE</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >CMS design</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Content management</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Product Management</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Mobile responsive</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsTrophy style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>CATALOG MANAGEMENT</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >CMS design</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Content management</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Product Management</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Mobile responsive</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <GiAirBalloon style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>CUSTOMER MANAGEMENT</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Customer Detail</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Social Login</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Multiple address</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Performance check</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TbTargetArrow style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>PAYMENT GATEWAY</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Payment Gateway</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >NetBanking Integration</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Credit/Debit Card Integration</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Wallet Integration</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsScissors style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5 ,color:"black",fontWeight:600}}>SHOPPING CART</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Secure Shopping</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Multiple Product</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Restriction Based</li>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TbTools style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5 ,color:"black",fontWeight:600}}>ORDER MANAGEMENT</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Order management</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Order Track</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Faster Delivery</li>
                                
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default SecondPage;
