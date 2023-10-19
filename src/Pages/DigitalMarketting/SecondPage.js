import React,{useState,useEffect,useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../../Assets/logo.png'
import LogoPurple from '../../Assets/logo_purple_80.png';
import LogoH from '../../Assets/logo-h_small.png';
import Standard from '../../Assets/Standardtouch-logo.png';
import KouChoun from "../../Assets/Kou-Chan-logo-1.png"
import Embitel from "../../Assets/embitel-logo2.jpg";
import Pradeeep from "../../Assets/predeep.png";
import '../../Pages/DigitalMarketting/SecondPage.css';
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
                <h3 style={{ fontSize: 20, fontWeight: 700, backgroundColor: "", padding: "5px 5px",color:"black",letterSpacing:2}}>WE WORKED WITH THESE BUSINESS</h3>
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
                    <h4 style={{ fontSize: 20, paddingBottom: 100 ,fontWeight:700,color:"black",letterSpacing:2}}>WHAT WE DO</h4>
                </div>

                <div class="row g-0 row-gap-5 fade-in" style={{ width: "100%", height: "auto"}} >
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4" style={{position:"relative"}}>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{}}>
                                <TfiDesktop style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>TEXT CONTENT MARKETING</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >SMS</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Whatsapp</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Performance Content</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Mobile Marketing</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsTrophy style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>SOCIAL MEDIA</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Facebook Marketing</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Instagram</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Twitter</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Performance media</li>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <GiAirBalloon style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>CONTENT WRITING</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Blog</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Articles</li>
                                <li class="mb-1 ps-4" style={{ fontSize: "13px", color: "#626262",listStyleType:"square" }} >Loreum Ipsum</li>
                                                          </div>
                        </div>
                    </div>
                   
                   
                </div>
               
            </div>
        </div>
    )
}

export default SecondPage;
