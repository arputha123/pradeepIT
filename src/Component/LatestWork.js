import React from "react";
import Card1 from '../Assets/card1.png';
import Card2 from '../Assets/card2.png';
import Card3 from '../Assets/card3.png';
import Card4 from '../Assets/card4.png';
import Card5 from '../Assets/card5.png';
import Card6 from '../Assets/card6.png';
import Card7 from '../Assets/card7.png';



   const Latestworks = () => {




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
                <div class="container-fluid">
                    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                        <div style={{flex:1}} class="Lerbs1" >
                            <img src={Card1} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>LERBS-GERMANY,HAMBURG</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} />
                            </div>

                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card2} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>SAP CD-INDIA,BANGALORE</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card3} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>DIGITAL MEDIA CENTRE- STUTTGART,GERMANY</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card4} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>EPLUS-CGI,GERMANY DUSSELDORF</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid mt-4">
                    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card5} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>FUTURE GROUP-INDIA, BANGALORE</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>

                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card6} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>LANDMARK DOWNSHIPS</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card7} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>KANNADAMASSALA.COM</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div style={{flex:1}}>

                        </div>

                    </div>
                </div>



            </div>
            <div class="tab-pane" id="2b">
                <div class="container-fluid">
                    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card1} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>LERBS-GERMANY,HAMBURG</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} />
                            </div>

                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card2} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>SAP CD-INDIA,BANGALORE</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card3} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>DIGITAL MEDIA CENTRE- STUTTGART,GERMANY</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div style={{flex:1}} class="Lerbs1">
                            <img src={Card4} class="image-fluid" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>EPLUS-CGI,GERMANY DUSSELDORF</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                    </div>
                </div>

                <div style={{flex:1}} class="Lerbs1">
                    <img src={Card5} class="image-fluid" />
                    <div class="Lerbs">
                        <h6 style={{ fontSize: 13 }}>FUTURE GROUP-INDIA, BANGALORE</h6>
                        <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                </div>
            </div>

            <div class="tab-pane" id="3b">
                <div class="container-fluid mt-4">
                    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>

                        <div class="Lerbs1">
                            <img src={Card6} class="image-fluid mb-4 me-1" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>LANDMARK DOWNSHIPS</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
                        </div>
                        <div class="Lerbs1" >
                            <img src={Card7} class="image-fluid mb-4 me-1" />
                            <div class="Lerbs">
                                <h6 style={{ fontSize: 13 }}>KANNADAMASSALA.COM</h6>
                                <hr style={{ width: '15%', marginLeft: '40%', border: '3px solid #FDDA4C' }} /></div>
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