import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import '../Style/KeyPerson.css'


function KeyPerson() {

const [geeta, setGeeta] = useState(false)
const [abdul, setAbdul] = useState(false)
const [vadiraj, setVadiraj] = useState(false)
 
const handleMouseEnter1 = () =>{
    setGeeta(true)
}
const handleMouseLeave1 = () =>{
    setGeeta(false)
}
const handleMouseEnter2 = () =>{
    setAbdul(true)
}
const handleMouseLeave2 = () =>{
    setAbdul(false)
}
const handleMouseEnter3 = () =>{
    setVadiraj(true)
}
const handleMouseLeave3 = () =>{
    setVadiraj(false)
}

    return (
        <>
            <div style={{ height: "auto", width: "100%", fontFamily: "'Open Sans', sans-serif", padding: "100px 0px",marginBottom:400 }}>

                <div class="d-flex justify-content-center" style={{}}>
                    <h3 className='pb-0 mb-0' style={{ fontSize: "20px", fontWeight: 700, color: "#000000" }}>KEY PERSON</h3>
                </div>

                <div class="row mt-3" style={{backgroundColor:"", width: "100%"}}>
                   <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12 d-flex justify-content-center align-items-center p-3" >
                   <h4 class="text-center" style={{ fontSize: "16px", lineHeight: 1.5, fontWeight: 400, color: "#7f7f7f", wordSpacing: 1 }}>We are a multi-discipline design studio with an extensive <br/>  network of the finest talent, allowing us to build the perfect <br/> team to respond to your brief.</h4>
                   </div>
            </div>

                <div class="row g-5 p-4" style={{ width: "100%",height:"auto" ,rowGap:250}}>
                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={{backgroundColor:"",height:"auto"}}  >

                        <div class="card " style={{ width: "25rem",height:"100%", border: "none"}}>
                            <div class="d-flex justify-content-center align-items-center ">
                                <img alt=""    src="https://pradeepit.com/wp-content/uploads/2018/07/WhatsApp-Image-2018-07-10-at-9.57.15-PM-1.jpeg" width="160" height="160"   style={{position:"relative"}}/> 
                            </div>
                            <div class="d-flex justify-content-center align-items-center "  >
                            <div style={{height:"160px",width:"160px",backgroundColor:geeta?"#f6f6f688":"transparent",position:"absolute",top:geeta?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:geeta? 50:160,transition:"ease-in-out 0.8s",backgroundColor:geeta ? "white":"transparent",width:"100%"}}
                            >
                            <hr class="m-0 p-0 divider"   />
                            <div class="card-body" >
                                <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "11px", color: "#000000", fontWeight: 600 }}>GEETA ARI</label>
                                </div>
                                <div class="d-flex justify-content-center align-items-center mt-1">
                                    <label style={{ fontSize: "11px", color: "#626262", fontWeight: 400 }}>FOUNDER AND CEO</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-3 p-2" style={{ width: "100%" }}>
                                   <a  href="https://facebook.com/"><FaFacebookF class="me-3" style={{ fontSize:18,cursor:"pointer" }}   id="hover-icon"/></a> 
                                   <a  href="https://twitter.com/"> <FaTwitter class="me-3" style={{ fontSize:18,cursor:"pointer" }}  id="hover-icon" /></a>
                                   <a   href="https://plus.google.com/"> <FaGooglePlusG class="me-3" style={{ fontSize:22,cursor:"pointer" }}  id="hover-icon" /></a>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-2 " style={{ width: "100%" }}>
                                    <p class="mb-3 text-center" style={{ fontSize: "13px", color: "#626262", wordSpacing: 1,letterSpacing:"0.02em" }}>Developing high quality business strategies and plans ensuring their alignment with short-term and long-term objectives</p>

                                </div>

                            </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12  d-flex justify-content-center" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} style={{backgroundColor:"",height:"auto"}}>
                        <div class="card" style={{width: "25rem", border: "none", backgroundColor: "",height:"auto" }}>
                            <div class="d-flex justify-content-center align-items-center second-card">
                                <img alt="" srcset="https://pradeepit.com/wp-content/uploads/2019/01/profile-picture.jpg 160w, https://pradeepit.com/wp-content/uploads/2019/01/profile-picture-150x150.jpg 150w, https://pradeepit.com/wp-content/uploads/2019/01/profile-picture-81x81.jpg 81w" sizes="(max-width: 160px) 100vw, 160px" src="https://pradeepit.com/wp-content/uploads/2019/01/profile-picture.jpg" width="160" height="160"  style={{position:"relative"}} />
                            </div>
                            <div class="d-flex justify-content-center align-items-center "  >
                            <div style={{height:"160px",width:"160px",backgroundColor:abdul?"#f6f6f688":"transparent",position:"absolute",top:abdul?0:100}} >

                            </div>
                            </div>
                            <div 
                            style={{position:"absolute",top:abdul? 50:160,transition:"ease-in-out 0.8s",backgroundColor:abdul ? "white":"transparent"}}
                            >
                            <hr class="m-0 p-0" />
                            <div class="card-body">
                                <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "11px", color: "#000000", fontWeight: 600 }}>ABDUL MANNAN</label>
                                </div>
                                <div class="d-flex justify-content-center align-items-center mt-1">
                                    <label style={{ fontSize: "11px", color: "#626262", fontWeight: 400 }}>BUSINESS HEAD & LIFE COACH</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-3 p-2" style={{ width: "100%" }}>
                                <a  href="https://facebook.com/"><FaFacebookF class="me-3" style={{ fontSize:18,cursor:"pointer" }}   id="hover-icon"/></a> 
                                   <a  href="https://twitter.com/"> <FaTwitter class="me-3" style={{ fontSize:18,cursor:"pointer" }}  id="hover-icon" /></a>
                                   <a   href="https://plus.google.com/"> <FaGooglePlusG class="me-3" style={{ fontSize:22,cursor:"pointer" }}  id="hover-icon" /></a>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-2 " style={{ width: "100%" }}>
                                    <p class="mb-3 text-center" style={{ fontSize: "13px", color: "#626262", wordSpacing: 1 ,letterSpacing:"0.02em"}}>Abdul Mannan is an expert in getting the best out of the people. Usually in one session of just two hours, his clients see their life is changed 180 degrees in the positive direction.</p>

                                </div>

                            </div>
                          </div>


                        </div>
                    </div>



                    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{backgroundColor:"",height:"auto"}}>

                        <div class="card" style={{ width: "25rem", border: "none",height:"auto" }}>
                            <div class="d-flex justify-content-center align-items-center third-card">
                                <img alt="" srcset="https://pradeepit.com/wp-content/uploads/2018/07/BILGI-SIR.png 120w, https://pradeepit.com/wp-content/uploads/2018/07/BILGI-SIR-81x95.png 81w" sizes="(max-width: 120px) 100vw, 120px" src="https://pradeepit.com/wp-content/uploads/2018/07/BILGI-SIR.png" width="160" height="160"  style={{position:"relative"}} />
                            </div>
                            <div class="d-flex justify-content-center align-items-center "  >
                            <div style={{height:"160px",width:"160px",backgroundColor:vadiraj?"#f6f6f688":"transparent",position:"absolute",top:vadiraj?0:100}} >

                            </div>
                            </div>
                           
                            <div style={{position:"absolute",top:vadiraj? 50:160,transition:"ease-in-out 0.8s",backgroundColor:vadiraj ? "white":"transparent"}}>
                           
                            <hr class="m-0 p-0" />
                            <div class="card-body">
                                <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "11px", color: "#000000", fontWeight: 600 }}>VADIRAJ S BILGI</label>
                                </div>
                                <div class="d-flex justify-content-center align-items-center mt-1">
                                    <label style={{ fontSize: "11px", color: "#626262", fontWeight: 400 }}>ADVISORY BOARD</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-3 p-2" style={{ width: "100%" }}>
                                <a  href="https://facebook.com"><FaFacebookF class="me-3" style={{ fontSize:18,cursor:"pointer" }}   id="hover-icon"/></a> 
                                   <a  href="https://twitter.com"> <FaTwitter class="me-3" style={{ fontSize:18,cursor:"pointer" }}  id="hover-icon" /></a>
                                   <a   href="https://plus.google.com"> <FaGooglePlusG class="me-3" style={{ fontSize:22,cursor:"pointer" }}  id="hover-icon" /></a>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-2 " style={{ width: "100%" }}>
                                    <p class="mb-3 text-center" style={{ fontSize: "13px", color: "#626262", wordSpacing: 1,letterSpacing:"0.02em" }}>He was CFO at Airtel Ltd during the boom in the cellular and telecommunication industry in India and the demand for technical support staff was on the rise</p>

                                </div>

                            </div>
                        </div>
</div>

                    </div>
                </div>










            </div>
        </>
    )
}

export default KeyPerson;

