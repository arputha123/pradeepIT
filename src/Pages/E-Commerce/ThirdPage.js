import React, { useState } from 'react';
import { AiOutlinePicture } from "react-icons/ai";
import '../../Pages/E-Commerce/ThirdPage.css'
import { TbTools } from "react-icons/tb";
import { CiMobile2 } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

function ThirdPage() {

    const [picture, setPicture] = useState(true)
    const [camera, setCamera] = useState(false)
    const [tool, setTool] = useState(false)
    const [mobile, setMobile] = useState(false)




    const handlePicture = () => {
        setPicture(true)
        setCamera(false)
        setTool(false)
        setMobile(false)
    }
    const handleCamera = () => {
        setCamera(true)
        setPicture(false)
        setTool(false)
        setMobile(false)
    }
    const handleTool = () => {
        setTool(true)
        setCamera(false)
        setMobile(false)
        setPicture(false)
    }
    const handleMobile = () => {
        setMobile(true)
        setPicture(false)
        setTool(false)
        setCamera(false)
    }
    return (
        <>
            <div style={{ width: "100%", height: "auto" }}>

                <div class="d-flex justify-content-center" style={{ marginBottom: 50 }}>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#000000" }}>E-COMMERCE WEB DEVELOPMENT SERVICES</h3>
                </div>


                <div class="row g-4" style={{ padding: "10px 60px",cursor:"pointer" }}>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="text-center">
                                <AiOutlinePicture style={{ width: 50, height: 40, color:picture?"black": "#9A9A9A",marginBottom:6 }} onClick={handlePicture} />
                                <div>
                                    <span class="e-commerce" style={{fontSize:11, letterSpacing: 2 ,color:picture ? "black": "#9A9A9A",fontWeight:picture? 700:600}}>CUSTOM E - COMM DEVELOPMENT</span>
                                </div>
                            </div>

                            <div id="verical-line" style={{ height: 80, backgroundColor: "#d7d7d7", width: 1 }}></div>
                        </div>

                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="text-center">
                                <TbTools style={{ height: 50, width: 40, color: tool ?"black":"#9A9A9A" }} onClick={handleTool} />
                                <div>
                                    <span class="e-commerce" style={{fontSize:11, letterSpacing: 2,fontWeight:tool ? 700: 600,color: tool ?"black":"#9A9A9A" }}>SHOPPING CART</span>
                                </div>
                            </div>

                            <div id="verical-line" style={{ height: 80, backgroundColor: "#d7d7d7", width: 1 }}></div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="text-center">
                                <CiMobile2 style={{ width: 50, height: 40, color:mobile?"black": "#9A9A9A",marginBottom:6 }} onClick={handleMobile} />
                                <div>
                                    <span class="e-commerce" style={{fontSize:11, letterSpacing: 2 ,color:mobile?"black": "#9A9A9A",fontWeight:mobile? 700 : 600}}>PAYMENT GATEWAY</span>
                                </div>
                            </div>

                            <div id="verical-line" style={{ height: 80, backgroundColor: "#d7d7d7", width: 1 }}></div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="text-center">
                                <CiCamera style={{ width: 50, height: 40, color:camera?"black": "#9A9A9A",marginBottom:7 }} onClick={handleCamera} />
                                <div>
                                    <span class="e-commerce" style={{fontSize:11, letterSpacing: 2 ,color:camera?"black": "#9A9A9A" ,fontWeight:camera ? 700 : 600}}>PLUGIN DEVELOPMENT</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div class="row g-4" style={{ marginTop: 30 }}>

                    {picture && <>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
                            <div style={{ height: "80vh", backgroundColor: "#666666", paddingTop: "350px", paddingBottom: "50px" }}>

                                <div class="d-flex justify-content-center">
                                    <h2 style={{ fontSize: 35, color: "#e6af2a" }}>01</h2>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h3 style={{ fontSize: 20, color: "white", letterSpacing: 7 }}>CUSTOM E-COMMERCE DEVELOPMENT</h3>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: "50px" }}>
                            <div style={{ height: "80vh", border: "5px solid #D7D7D7", padding: "30px 10px" }}>
                                <div class="d-flex justify-content-center">
                                    <AiOutlinePicture style={{ width: 80, height: 80, color: "#e6af2a" }} />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h1 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 0, padding: "20px",color:"black" }}>INTELLIGENCE IS NOTHING WITHOUT AMBITION.</h1>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <p class="" style={{ color: "#9A9A9A", fontSize: 14, margin: "30px auto", textAlign: "center", width: "60%" }}>We understand retail & eComerce customers and provide end-to-end solutions for that.</p>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div className='View-videos' style={{ backgroundColor: "#e75e50", color: "white", padding: "3px 10px", fontWeight: "500", fontSize: 10, letterSpacing: 2 }}>VIEW VIDEOS <span><BsArrowRight style={{ height: "15px", width: "15px" }} /></span> </div>
                                </div>
                            </div>
                        </div>
                    </>
                    }

                    {camera && <>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div style={{ height: "80vh", backgroundColor: "#666666", paddingTop: "350px", paddingBottom: "50px" }}>

                                <div class="d-flex justify-content-center">
                                    <h2 style={{ fontSize: 35, color: "#e6af2a" }}>04</h2>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h3 style={{ fontSize: 20, color: "white", letterSpacing: 7 }}>CUSTOM PLUGIN DEVELOPMENT</h3>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: "50px" }}>
                            <div class="container" style={{ height: "80vh", border: "5px solid #D7D7D7", padding: "30px 10px" }}>
                                <div class="d-flex justify-content-center">
                                    <CiCamera style={{ width: 80, height: 80, color: "#e6af2a" }} />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h1 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 0, padding: "20px",color:"black" }}>WE SPECIALISE IN CREATING SUCCESS BRANDS.</h1>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <p class="" style={{ color: "#9A9A9A", fontSize: 14, margin: "30px auto", textAlign: "center", width: "60%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div className='View-videos' style={{ backgroundColor: "#e75e50", color: "white", padding: "3px 10px", fontWeight: "500", fontSize: 10, letterSpacing: 2 }}>READ MORE <span><BsArrowRight style={{ height: "15px", width: "15px" }} /></span> </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    {tool && <>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div style={{ height: "80vh", backgroundColor: "#666666", paddingTop: "350px", paddingBottom: "50px" }}>

                                <div class="d-flex justify-content-center">
                                    <h2 style={{ fontSize: 35, color: "#e6af2a" }}>02</h2>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h3 style={{ fontSize: 20, color: "white", letterSpacing: 7 }}>FASTER SHOPPING CART CHECKOUT</h3>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: "50px" }}>
                            <div style={{ height: "80vh", border: "5px solid #D7D7D7", padding: "30px 10px" }}>
                                <div class="d-flex justify-content-center">
                                    <TbTools style={{ width: 80, height: 80, color: "#e6af2a" }} />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h1 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 0, padding: "20px",color:"black" }}>WE SPECIALISE IN CREATING SUCCESS BRANDS.</h1>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <p class="" style={{ color: "#9A9A9A", fontSize: 14, margin: "30px auto", textAlign: "center", width: "60%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div className='View-videos' style={{ backgroundColor: "#e75e50", color: "white", padding: "3px 10px", fontWeight: "500", fontSize: 10, letterSpacing: 2 }}>READ MORE <span><BsArrowRight style={{ height: "15px", width: "15px" }} /></span> </div>
                                </div>
                            </div>
                        </div>
                    </>}

                    {mobile && <>

                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div style={{ height: "80vh", backgroundColor: "#666666", paddingTop: "350px", paddingBottom: "50px" }}>

                                <div class="d-flex justify-content-center">
                                    <h2 style={{ fontSize: 35, color: "#e6af2a" }}>03</h2>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h3 style={{ fontSize: 20, color: "white", letterSpacing: 7 }}>PAYMENT GATEWAY INTEGRATION</h3>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ paddingRight: "50px" }}>
                            <div style={{ height: "80vh", border: "5px solid #D7D7D7", padding: "30px 10px" }}>
                                <div class="d-flex justify-content-center">
                                    <CiMobile2 style={{ width: 80, height: 80, color: "#e6af2a" }} />
                                </div>
                                <div class="d-flex justify-content-center">
                                    <h1 style={{ fontSize: 36, fontWeight: 700, textAlign: "center", marginBottom: 0, padding: "20px",color:"black" }}>INTELLIGENCE IS NOTHING WITHOUT AMBITION.</h1>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <p class="" style={{ color: "#9A9A9A", fontSize: 14, margin: "30px auto", textAlign: "center", width: "60%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div className='View-videos' style={{ backgroundColor: "#e75e50", color: "white", padding: "3px 10px", fontWeight: "500", fontSize: 10, letterSpacing: 2 }}>READ MORE <span><BsArrowRight style={{ height: "15px", width: "15px" }} /></span> </div>
                                </div>
                            </div>
                        </div>




                    </>

                    }


                </div>







            </div>

        </>
    )
}

export default ThirdPage