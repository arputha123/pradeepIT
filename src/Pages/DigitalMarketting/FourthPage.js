import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { TfiDesktop } from "react-icons/tfi";
import { BsTrophy } from "react-icons/bs";
import { GiAirBalloon } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { BsScissors } from "react-icons/bs";
import { TbTools } from "react-icons/tb";
import '../../Pages/DigitalMarketting/FourthPage.css'






function FourthPage() {


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


    return (
        <div style={{ width: "100%", height: "auto" }}>
            <div style={{ height: "auto", backgroundColor: "#FFFFFF", padding: "30px" }}>

                <div class="d-flex justify-content-center">
                    <h4 style={{ fontSize: 20, paddingBottom: 100, fontWeight: 700, letterSpacing: 2,color:"black",letterSpacing:2 }}>WHY CHOOSE US.?</h4>
                </div>

                <div class="row g-0 row-gap-5 fade-in" style={{ width: "100%", height: "auto", padding: "10px 40px" }}>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TfiDesktop style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>THE CORE</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsTrophy style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>STRATEGY</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <GiAirBalloon style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5 ,color:"black",fontWeight:600}}>DELIVERY EXCELLENCE</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TbTargetArrow style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>CONTENT EXPERTS</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsScissors style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5 ,color:"black",fontWeight:600}}>STRATEGIC ANALYTICS</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TbTools style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px", letterSpacing: 1.5,color:"black",fontWeight:600 }}>LATEST TECHNOLOGY SPECIFIC</h5>
                                <div class="mt-3 mb-3" style={{ marginLeft: 0, marginRight: 0, height: 2, backgroundColor: "#e6af2a", width: 30 }}></div>
                                <p class="mb-3" style={{ fontSize: "13px", color: "#626262" }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default FourthPage;