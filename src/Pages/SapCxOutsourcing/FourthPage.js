import React,{useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { TfiDesktop } from "react-icons/tfi";
import { BsTrophy } from "react-icons/bs";
import { GiAirBalloon } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import { BsScissors } from "react-icons/bs";
import { TbTools } from "react-icons/tb";
import '../../Pages/SapCxOutsourcing/FourthPage.css'






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
                    <h4 style={{ fontSize: 20, paddingBottom: 100,fontWeight:700 ,color:"black"}}>KEY BENEFITS</h4>
                </div>

                <div class="row g-0 row-gap-5 animated-text fade-in" style={{ width: "100%", height: "auto",padding:"10px 40px" }}>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                        <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TfiDesktop style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px",letterSpacing:1.5 ,color:"black",fontWeight:700}}>100% CLIENT  SATISFICATION</h5>
                               <div  class="mt-3 mb-3"style={{marginLeft:0,marginRight:0,height:2,backgroundColor:"#e6af2a",width:30}}></div>
                                <p  class="mb-3" style={{ fontSize: "13px",color:"#626262" }} >Till date, we have successfully completed 100+ projects of varying sizes including commercial grade software applications.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                    <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsTrophy style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px",letterSpacing:1.5,color:"black",fontWeight:700 }}>INTEGRITY & TRANSPARENCY</h5>
                                <div  class="mt-3 mb-3"style={{marginLeft:0,marginRight:0,height:2,backgroundColor:"#e6af2a",width:30}}></div>
                                <p class="mb-3" style={{ fontSize: "13px",color:"#626262" }} >Your idea is safe with us as we respect your secrecy, work transparently and our Java app developers follow NDA throughout the process.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                    <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <GiAirBalloon style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px",letterSpacing:1.5,color:"black",fontWeight:700 }}>TRUSTED & SKILLED DEVELOPERS</h5>
                                <div  class="mt-3 mb-3"style={{marginLeft:0,marginRight:0,height:2,backgroundColor:"#e6af2a",width:30}}></div>
                                <p class="mb-3" style={{ fontSize: "13px",color:"#626262" }} >We pair you with our in-house developers whose skillsets match your needs afterwards. they reliably and dedicatedly work for you.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                    <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TbTargetArrow style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px",letterSpacing:1.5,color:"black",fontWeight:700 }}>HERE A TEAM OF YOUR CHOICE</h5>
                                <div  class="mt-3 mb-3"style={{marginLeft:0,marginRight:0,height:2,backgroundColor:"#e6af2a",width:30}}></div>
                                <p  class="mb-3" style={{ fontSize: "13px",color:"#626262" }} >You interview every dedicated Java developer you hire. If you decide not to continue, we will either provide replacement, or you get a refund.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                    <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <BsScissors style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px",letterSpacing:1.5,color:"black",fontWeight:700 }}>FREE NO OBLIGATION QUOTE</h5>
                                <div  class="mt-3 mb-3"style={{marginLeft:0,marginRight:0,height:2,backgroundColor:"#e6af2a",width:30}}></div>
                                <p class="mb-3" style={{ fontSize: "13px",color:"#626262" }} >When you share your idea, we listen & provide you with a no-cost estimate, usually within 24 working hours.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-xs-12 col-sm-12" >
                    <div class="row g-4">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <TbTools style={{ height: 50, width: 150, color: "#9A9A9A" }} />
                            </div>
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <h5 style={{ fontSize: "11px" ,letterSpacing:1.5,color:"black",fontWeight:700}}>MAINTENANCE & SUPPORT</h5>
                                <div  class="mt-3 mb-3"style={{marginLeft:0,marginRight:0,height:2,backgroundColor:"#e6af2a",width:30}}></div>
                                <p class="mb-3" style={{ fontSize: "13px",color:"#626262" }} >We provide round-the-clock maintenance and support services to ensure smooth and seamless online shopping experiences.</p>
                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    )
}

export default FourthPage;