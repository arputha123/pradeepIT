import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../../Pages/JavaOutsourcing/Sixth.css'

function SixthPage() {

    const [mouseEnter1, setMouseEnter1] = useState(null)
    const [mouseEnter2, setMouseEnter2] = useState(null)
    const [mouseEnter3, setMouseEnter3] = useState(null)
    const [dedicate, setDedicate] = useState(true)
    const [price, setPrice] = useState(false)

    const handleMouseEnter1 = () => {
        setMouseEnter1(true)
    }

    const handleMouseLeave1 = () => {
        setMouseEnter1(false)
    }
    const handleMouseEnter2 = () => {
        setMouseEnter2(true)
    }

    const handleMouseLeave2 = () => {
        setMouseEnter2(false)
    }
    const handleMouseEnter3 = () => {
        setMouseEnter3(true)
    }

    const handleMouseLeave3 = () => {
        setMouseEnter3(false)
    }
    const handleDedicated = () => {
        setDedicate(true)
        setPrice(false)
    }
    const handleFixed = () => {
        setPrice(true)
        setDedicate(false)
    }



    return (
        <div style={{ width: "100%", height: 'auto' }}>
            <div class="d-flex justify-content-center">
                <h3 style={{ fontSize: 20, fontWeight: 700, paddingBottom: 90,color:"black",fontWeight:700,letterSpacing:"0.02em" }}>OUR JAVA APPLICATION DEVELOPMENT PROCESS</h3>
            </div>

            <Nav className="justify-content-center" >
                <Nav.Item style={{border:"none"}}>
                    <Nav.Link id="NavLinks" onClick={handleDedicated} style={{ textDecoration: dedicate && "underline", color: dedicate ? "black" : "#626262", fontWeight:dedicate? 600:500, letterSpacing: 2,border: dedicate ? "1px solid transparent" : "1px solid transparent" }}>DEDICATED STAFF</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{border: "none"}}>
                    <Nav.Link id="NavLinks"  onClick={handleFixed} style={{ textDecoration: price && "underline", color: price ? "black" : "#626262", fontWeight:price?600: 500, letterSpacing: 2, border: price ? "1px solid transparent" : "1px solid transparent"  }}>FIXED PRICE</Nav.Link>
                </Nav.Item>
            </Nav>


            <div class="row pt-5" style={{marginTop:30,padding:"10px 65px",backgroundColor:""}}>
                {dedicate && <>

                    <div class="col-lg-4 col-md-12 col-xs-12 col-sm-12" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >
                        <div class="d-flex justify-content-center"  style={{ position: "relative" }}>
                            <div style={{}}>
                                <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: "#F7D23D" }}>01</h2>
                                <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: mouseEnter1 ? "#626262" : "transparent", transition: 'ease-in-out 800ms', position: "absolute", bottom: 0, top: mouseEnter1 ? 0 : 200, overflow: "hidden" }}>01</h2>
                            </div>
                            <div id="verical-line" style={{ height: 60, backgroundColor: mouseEnter1 ? "#F7D23D" : "#626262", width: mouseEnter1 ? 3 : 1, marginLeft: 20, marginRight: 20 }}></div>
                            <h3 class="mb-3" style={{ fontSize: 23, textDecoration: mouseEnter1 ? "line-through" : "none" ,color:"black"}}>TEAM SCREENING && SELECTION</h3>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", paddingLeft: 100 }}>

                            <h4 class="mb-3" style={{ fontSize: 14, letterSpacing: 2, color: "#626262", fontWeight: 700 }}>RESUME SCREENING & SHORTLISTING TIME IS SAVED</h4>
                        </div>
                        <ul style={{ listStyleType: "square", padding: 0, paddingLeft: 100 }}>
                            <li style={{ color: "#626262", fontSize: 13 }}>Our Java developer skills will reach with your business requirements.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>You are offered to conduct screening the developers before hiring.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>You may also discuss project details to get estimate of time to complete.</li>
                        </ul>


                    </div>
                    <div class="col-lg-4 col-md-12 col-xs-12 col-sm-12" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <div class="d-flex justify-content-center"  style={{ position: "relative" }}>
                            <div>
                            <h2 class="ms-2 me-2" style={{ fontSize: 50, color: "#F7D23D" }}>02</h2>
                            <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: mouseEnter2 ? "#626262" : "transparent", transition: 'ease-in-out 800ms', position: "absolute", bottom: 0, top: mouseEnter2 ? 0 : 200, overflow: "hidden" }}>02</h2>
                            </div>
                            <div id="verical-line" style={{ height: 60, backgroundColor: mouseEnter2 ? "#F7D23D" : "#626262", width: mouseEnter2 ? 3 : 1, marginLeft: 20, marginRight: 20 }} ></div>
                            <h3 class="mb-3" style={{ fontSize: 23, textDecoration: mouseEnter2 ? "line-through" : "none",color:"black" }}>DEVELOPMENT & REPORTING</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", paddingLeft: 110 }}>

                            <h4 class="mb-3" style={{ fontSize: 14, letterSpacing: 2, color: "#626262", fontWeight: 700 }}>EXPERIENCE HIGH-LEVEL PRODUCTIVITY FROM OUR EXPERTISE</h4>
                        </div>
                        <ul style={{ listStyleType: "square", padding: 0, paddingLeft: 110 }}>
                            <li style={{ color: "#626262", fontSize: 13 }}> The dedicated senior solution architects are available to assist you</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>Our developers will work dedicatedly on your business project.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>verify with code validations with up to date reporting sheet.</li>
                        </ul>



                    </div>
                    <div class="col-lg-4 col-md-12 col-xs-12 col-sm-12" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} >
                        <div class="d-flex justify-content-center" style={{position:"relative"}}>
                            <div>
                            <h2 class="ms-2 me-2" style={{ fontSize: 50, color: "#F7D23D" }}>03</h2>
                            <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: mouseEnter3 ? "#626262" : "transparent", transition: 'ease-in-out 800ms', position: "absolute", bottom: 0, top: mouseEnter3 ? 0 : 200, overflow: "hidden" }}>03</h2>
                            </div>
                            
                           
                            <div id="verical-line" style={{ height: 60, backgroundColor: mouseEnter3 ? "#F7D23D" : "#626262", width: mouseEnter3 ? 3 : 1, marginLeft: 20, marginRight: 20 }}></div>
                          
                           <h3 class="mb-3" style={{ fontSize: 23, textDecoration: mouseEnter3 ? "line-through" : "none",color:"black" }}>DELIVERY & FUTURE RELATIONS</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", paddingLeft: 110 }}>

                            <h4 class="mb-3" style={{ fontSize: 14, letterSpacing: 2, color: "#626262", fontWeight: 700 }}>YOUR TEAM STAYS WITH YOU IN ALL THE UPS AND DOWNS</h4>
                        </div>
                        <ul style={{ listStyleType: "square", padding: 0, paddingLeft: 110 }}>
                            <li style={{ color: "#626262", fontSize: 13 }}>You can assign one or multiple projects to them.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>Extent or reduce team size as per business needs.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>Work with the same team to get consistent Productivity.</li>
                        </ul>




                    </div>


                </>}
                {price && <>

                    <div class="col-lg-4 col-md-12 col-xs-12 col-sm-12" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} >
                        <div class="d-flex justify-content-center" style={{position:"relative"}}>
                           <div>
                           <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: "#F7D23D" }}>01</h2>
                           <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: mouseEnter1 ? "#626262" : "transparent", transition: 'ease-in-out 800ms', position: "absolute", bottom: 0, top: mouseEnter1 ? 0 : 200, overflow: "hidden" }}>01</h2>
                           </div>
                            
                           
                           
                            <div id="verical-line" style={{ height: 60, backgroundColor: mouseEnter1 ? "#F7D23D" : "#626262", width: mouseEnter1 ? 3 : 1, marginLeft: 20, marginRight: 20 }}></div>
                            <h3 class="mb-3" style={{ fontSize: 23, textDecoration: mouseEnter1 ? "line-through" : "none",color:"black" }}>REQUIREMENTS ANALYSIS</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", paddingLeft: 100 }}>

                            <h4 class="mb-3" style={{ fontSize: 14, letterSpacing: 2, color: "#626262", fontWeight: 700 }}>SAVING YOUR PROJECT CONSULTATION & ESTIMATION TIME</h4>
                        </div>
                        <ul style={{ listStyleType: "square", padding: 0, paddingLeft: 100 }}>
                            <li style={{ color: "#626262", fontSize: 13 }}>Once you share your idea, you can engage with our inhouse team.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>We will make high expertise team to plan your project.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>We will discuss your project plans first and  ETA with cost.</li>
                        </ul>


                    </div>
                    <div class="col-lg-4 col-md-12 col-xs-12 col-sm-12" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <div class="d-flex justify-content-center"  style={{position:"relative"}}>
                        <div>
                            <h2 class="ms-2 me-2" style={{ fontSize: 50, color: "#F7D23D" }}>02</h2>
                            <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: mouseEnter2 ? "#626262" : "transparent", transition: 'ease-in-out 800ms', position: "absolute", bottom: 0, top: mouseEnter2 ? 0 : 200, overflow: "hidden" }}>02</h2>
                            </div>
                          
                            <div id="verical-line" style={{ height: 60, backgroundColor: mouseEnter2 ? "#F7D23D" : "#626262", width: mouseEnter2 ? 3 : 1, marginLeft: 20, marginRight: 20 }} ></div>
                            <h3 class="mb-3" style={{ fontSize: 23, textDecoration: mouseEnter2 ? "line-through" : "none",color:"black" }}>DEVELOPMENT & REPORTING</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", paddingLeft: 110 }}>

                            <h4 class="mb-3" style={{ fontSize: 14, letterSpacing: 2, color: "#626262", fontWeight: 700 }}>EXPERIENCE HIGH-END PRODUCTIVITY FROM EXPERT DEVELOPERS</h4>
                        </div>
                        <ul style={{ listStyleType: "square", padding: 0, paddingLeft: 110 }}>
                            <li style={{ color: "#626262", fontSize: 13 }}> Our offshore Java developers are available for you round the clock.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>Developers will work dedicatedly on your project.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>verify the code validations with up to date reporting sheet.</li>
                        </ul>



                    </div>
                    <div class="col-lg-4 col-md-12 col-xs-12 col-sm-12" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                        <div class="d-flex justify-content-center"  style={{position:"relative"}}>
                        <div>
                            <h2 class="ms-2 me-2" style={{ fontSize: 50, color: "#F7D23D" }}>03</h2>
                            <h2 id="Number" class="ms-2 me-2" style={{ fontSize: 50, color: mouseEnter3 ? "#626262" : "transparent", transition: 'ease-in-out 800ms', position: "absolute", bottom: 0, top: mouseEnter3 ? 0 : 200, overflow: "hidden" }}>03</h2>
                            </div>
                            <div id="verical-line" style={{ height: 60, backgroundColor: mouseEnter3 ? "#F7D23D" : "#626262", width: mouseEnter3 ? 3 : 1, marginLeft: 20, marginRight: 20 }}></div>
                            <h3 class="mb-3" style={{ fontSize: 23, textDecoration: mouseEnter3 ? "line-through" : "none" ,color:"black"}}>EXECUTION & DELIVERY</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", paddingLeft: 110 }}>

                            <h4 class="mb-3" style={{ fontSize: 14, letterSpacing: 2, color: "#626262", fontWeight: 700 }}>CHOOSEN TEAM STAYS WITH YOU IN ALL THE PROCESS FOLLOWS</h4>
                        </div>
                        <ul style={{ listStyleType: "square", padding: 0, paddingLeft: 110 }}>
                            <li style={{ color: "#626262", fontSize: 13 }}>We work in adhere to the deadlines and the signed NDAs</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>You will get delivery of each project modules with detailed report.</li>
                            <li style={{ color: "#626262", fontSize: 13 }}>We work with the expertise team to get consistent Productivity.</li>
                        </ul>
                    </div>



                </>}


            </div>

        </div>
    )
}

export default SixthPage;