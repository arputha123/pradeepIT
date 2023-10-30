import React,{useState} from "react";
import Card1 from '../Assets/card1.png';
import Card2 from '../Assets/card2.png';
import Card3 from '../Assets/card3.png';
import Card4 from '../Assets/card4.png';
import Card5 from '../Assets/card5.png';
import Card6 from '../Assets/card6.png';
import Card7 from '../Assets/card7.png';
import 'bootstrap/dist/css/bootstrap.min.css';


   const Latestworks = () =>    {

    const [card1, setCard1] = useState(false)
    const [card2, setCard2] = useState(false)
    const [card3, setCard3] = useState(false)
    const [card4, setCard4] = useState(false)
    const [card5, setCard5] = useState(false)
    const [card6, setCard6] = useState(false)
    const [card7, setCard7] = useState(false)

const handleMouseEnter1 = () =>{
    setCard1(true)
}
const handleMouseLeave1 = () =>{
    setCard1(false)
}
const handleMouseEnter2 = () =>{
    setCard2(true)
}
const handleMouseLeave2 = () =>{
    setCard2(false)
}
const handleMouseEnter3 = () =>{
    setCard3(true)
}
const handleMouseLeave3 = () =>{
    setCard3(false)
}
const handleMouseEnter4 = () =>{
    setCard4(true)
}
const handleMouseLeave4 = () =>{
    setCard4(false)
}
const handleMouseEnter5 = () =>{
    setCard5(true)
}
const handleMouseLeave5 = () =>{
    setCard5(false)
}
const handleMouseEnter6 = () =>{
    setCard6(true)
}
const handleMouseLeave6 = () =>{
    setCard6(false)
}
const handleMouseEnter7 = () =>{
    setCard7(true)
}
const handleMouseLeave7 = () =>{
    setCard7(false)
}

    return(
        <>
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
                <div class="row row-gap-5 g-5" style={{ width: "100%",height:"auto",backgroundColor:"" }}>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell',backgroundColor:""}}  onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <div class="card" style={{height:"100%", border: "none",backgroundColor:""}}>
                            <div>
                            <img src={Card1}  style={{position:"relative"}} className="img-fluid"
                            />
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card1?"#f6f6f688":"transparent",position:"absolute",top:card1?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card1? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card1 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" style={{height:'auto'}} >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>LERBS-GERMANY,HAMBURG</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: 1, width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell',backgroundColor:""}}  onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card2}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card2?"#f6f6f688":"transparent",position:"absolute",top:card2?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card2? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card2 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>SAP CD-INDIA,BANGALORE</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center"  onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{cursor:'cell'}}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card3}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card3?"#f6f6f688":"transparent",position:"absolute",top:card3?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card3? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card3 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "10px", color: "#626262", fontWeight: 400 }}>DIGITAL MEDIA CENTRE- STUTTGART,GERMANY</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>
                      
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell'}}  onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card4}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card4?"#f6f6f688":"transparent",position:"absolute",top:card4?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card4? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card4 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "12px", color: "#626262", fontWeight: 400 }}>EPLUS-CGI,GERMANY DUSSELDORF</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>
                 
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell'}}  onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card5}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card5?"#f6f6f688":"transparent",position:"absolute",top:card5?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card5? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card5 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-4">
                                    <label style={{ fontSize: "12px", color: "#626262", fontWeight: 400 }}>FUTURE GROUP-INDIA, BANGALORE</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 me-3 d-flex justify-content-center" style={{cursor:'cell'}} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                        <div class="card " style={{ height:"100%", border: "none"}}>
                            <div>
                            <img src={Card6}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card6?"#f6f6f688":"transparent",position:"absolute",top:card6?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card6? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card6 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-4">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>LANDMARK DOWNSHIPS</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell'}} onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card7}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card7?"#f6f6f688":"transparent",position:"absolute",top:card7?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card7? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card7 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-4">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>KANNADAMASSALA.COM</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>
                      
                       

                       
                    </div>
                

                



            </div>




{/* sap */}
<div class="tab-pane active" id="2b">
                <div class="row row-gap-5 g-5" style={{ width: "100%",height:"auto",backgroundColor:"" }}>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell',backgroundColor:""}}  onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                        <div class="card" style={{height:"100%", border: "none",backgroundColor:""}}>
                            <div>
                            <img src={Card1}  style={{position:"relative"}} className="img-fluid"
                            />
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card1?"#f6f6f688":"transparent",position:"absolute",top:card1?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card1? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card1 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" style={{height:'auto'}} >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>LERBS-GERMANY,HAMBURG</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: 1, width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell',backgroundColor:""}}  onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card2}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card2?"#f6f6f688":"transparent",position:"absolute",top:card2?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card2? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card2 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>SAP CD-INDIA,BANGALORE</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center"  onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} style={{cursor:'cell'}}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card3}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card3?"#f6f6f688":"transparent",position:"absolute",top:card3?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card3? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card3 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "10px", color: "#626262", fontWeight: 400 }}>DIGITAL MEDIA CENTRE- STUTTGART,GERMANY</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>
                      
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell'}}  onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card4}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card4?"#f6f6f688":"transparent",position:"absolute",top:card4?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card4? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card4 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-3">
                                    <label style={{ fontSize: "12px", color: "#626262", fontWeight: 400 }}>EPLUS-CGI,GERMANY DUSSELDORF</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>
                 
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell'}}  onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card5}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card5?"#f6f6f688":"transparent",position:"absolute",top:card5?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card5? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card5 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-4">
                                    <label style={{ fontSize: "12px", color: "#626262", fontWeight: 400 }}>FUTURE GROUP-INDIA, BANGALORE</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                                           
                      
                       

                       
                    </div>
                

                



            </div>





{/* webdesign */}


     <div class="tab-pane active" id="3b">
                <div class="row row-gap-5 g-5" style={{ width: "100%",height:"auto",backgroundColor:"" }}>
                  
                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 me-3 d-flex justify-content-center" style={{cursor:'cell'}} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                        <div class="card " style={{ height:"100%", border: "none"}}>
                            <div>
                            <img src={Card6}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card6?"#f6f6f688":"transparent",position:"absolute",top:card6?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card6? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card6 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-4">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>LANDMARK DOWNSHIPS</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
                            </div>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center" style={{cursor:'cell'}} onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
                        <div class="card " style={{height:"100%", border: "none"}}>
                            <div>
                            <img src={Card7}  style={{position:"relative"}} className="img-fluid"/>
                            </div>
                            <div class="d-flex"  >
                            <div style={{height:"180px",width:"320px",backgroundColor:card7?"#f6f6f688":"transparent",position:"absolute",top:card7?0:100}} >
                            </div>
                            </div>
                            <div
                            style={{position:"absolute",top:card7? 100:160,transition:"ease-in-out 0.2s",backgroundColor:card7 ? "white":"transparent",width:"320px",height:'50%'}}
                            >
                             <div class="card-body" >
                             <div class="d-flex justify-content-center align-items-center mt-4">
                                    <label style={{ fontSize: "13px", color: "#626262", fontWeight: 400 }}>KANNADAMASSALA.COM</label>
                                </div>
                                <div className="d-flex justify-content-center align-items-center mt-1 mb-3" style={{ width: "100%" }}>
                                    <div style={{ borderBottom: "2px solid #e6af2a", height: "1", width: "30px" }}></div>
                                </div>
                          
                            </div>
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
   export default Latestworks;