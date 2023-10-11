import { useState } from 'react';
import MouseOverLayout from './MouseOverlayout';
import TopBarComponent from './topbar';
import '../Style/AdvisoryBoard.css';
function AdvisoryBoard() {
    const [empDetails, setEmpDetails] = useState([
        { name: 'VADIRAJS BILGI', jobRole: 'SENIOR ADVISOR', description: 'FORMER CFO, AIRTEL LTD.' },
        { name: 'RAMAKRISHNA YARLAPATI', jobRole: 'SENIOR ADVISOR', description: 'SENIOR VICE PRESIDENT AND GLOBAL EXECUTIVE, RESPONSIBLE FOR SAP OIL AND GAS SOLUTION AND HEAD OF BUSINESS SUITE CORE PRODUCTS AT SAP LABS INDIA' },
        { name: 'MAYANK PRATAP', jobRole: 'SENIOR ADVISOR', description: 'CO-FOUNDER & COO ENGINEERBABU' }

    ])

    return (
        <div>
            <TopBarComponent/>
            {/* <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#EFEFEF', paddingLeft: 100, paddingRight: 100, paddingTop: 20, paddingBottom: 20 }}>
                <h1 style={{ letterSpacing: 2, flex: 1 ,fontWeight:2,fontSize:18,marginLeft:20}}>ADVISORY BOARD</h1>
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1,justifyContent:'end'}}>
                    <p><a href='/' style={{ textDecoration: 'none' }}>HOME</a> <span style={{ borderRight: '1px solid gray', marginLeft: 10, marginRight: 10 }}></span></p>
                    <p>ADVISORY BOARD</p>
                </div>
            </div> */}

<div  style={{ backgroundColor: "#f6f6f6" }}>
        <div className="container col2-layout">
          <div style={{ paddingTop:40,paddingLeft:13, paddingRight:13  }} className="row Fadein_animation">
            <div className="col-lg-8 col-md-7 col-sm-4 animated fadeInUp">
            <p style={{ fontSize: 20, letterSpacing: 4, fontWeight: 600 }}>ADVISORY BOARD</p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12">
              {/* <ul>
                <li style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}>HOME</li>
                <li style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}>| NEWS</li>
              </ul> */}
            <p className="animate_content animated" style={{ fontWeight: "lighter", color: "gray", fontSize: "14px" }}> <a href="/" style={{ textDecoration: 'none', color: 'gray',padding:"0px 10px" }}>HOME</a> <span style={{marginRight: 10}}>|</span> ADVISORY BOARD</p>
            </div>
          </div>
        </div>
      </div>


            <div className='container'
            //  style={{ paddingLeft: 100, paddingRight: 100 }}
            >
                {/* <div style={{display:'flex',flexDirection:'row',backgroundColor:'#EFEFEF'}}>
        <h1 style={{letterSpacing:2,flex:1}}>ADVISORY BOARD</h1>
        <div style={{display:'flex',flexDirection:'row',flex:1}}>
            <p><a href='#' style={{textDecoration:'none'}}>HOME</a> <span style={{borderRight:'1px solid gray',marginLeft:10,marginRight:10}}></span></p>
            <p>ADVISORY BOARD</p>
        </div>
        </div> */}
         {/* style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} */}
                <h1 style={{ fontFamily: 'LatoLight', fontSize: '2.25rem',fontWeight:1, margin: "2.062rem 0" }}>ADVISORY BOARD</h1>
                <div style={{ borderTop: '1px solid #EFEFEF', marginBottom: 30 }}></div>
                <div className='row'>
                    {
                        empDetails.map((val) => {
                            return (
                                <MouseOverLayout val={val} />


                            )
                        })
                    }
                </div>


                {/* <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <div style={{position:'relative',flex:1}}><img src={Profile}></img><p><b> VADIRAJS BILGI</b></p><p>SENIOR ADVISOR</p>
            <div style={{position:'absolute',backgroundColor:'#000000',color:'#FFFFFF',padding:15,height:'50%',bottom:70,width:331}}><p>SENIOR VICE PRESIDENT AND GLOBAL EXECUTIVE, RESPONSIBLE FOR SAP OIL AND GAS SOLUTION AND HEAD OF BUSINESS SUITE CORE PRODUCTS AT SAP LABS INDIA</p></div>
            </div>
            <div style={{flex:1}}><img src={Profile} ></img><p><b>RAMAKRISHNA YARLAPATI</b></p><p>SENIOR ADVISOR</p></div>
            <div style={{flex:1}}><img src={Profile} ></img><p><b>MAYANK PRATAP</b></p><p>SENIOR ADVISOR</p></div>
        </div> */}
                {
                    //OUR VALUES
                }
                <div>
                    <h1 style={{ fontFamily: 'LatoLight', fontSize: '2.25rem',fontWeight:1 }}>OUR VALUES</h1>
                    <div style={{ borderTop: '1px solid #EFEFEF', marginBottom: 10, marginTop: 30 }}></div>
                    <div className='row'
                    //  style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', fontSize: '1rem', lineHeight: '1.5rem' }}
                     >
                        <div className='col-sm-4' 
                        // style={{ flex: 1, marginRight: 10 }}
                        >
                            <p><span style={{ border: '1px solid black', paddingLeft: 15, paddingRight: 15, paddingTop: 7, paddingBottom: 7, backgroundColor: '#000000', color: '#FFFFFF', fontSize: 18 }}>01</span></p>
                            <h5 style={{ letterSpacing: 2, fontSize: 13, marginLeft: 0, paddingTop: 0}}>FLEXIBILITY</h5>
                            <p style={{ fontFamily: "inherit", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 400 }}>We work agile and try to involve all, but no more than necessary, team members needed at each specific stage of the project. Thanks to our reputation and management skills, we can easily scale the team working on your project exactly when it’s needed.</p>
                        </div>
                        <div className='col-sm-4' 
                        // style={{ flex: 1, marginRight: 10 }}
                        >
                            <p><span style={{ border: '1px solid black', paddingLeft: 15, paddingRight: 15, paddingTop: 7, paddingBottom: 7, backgroundColor: '#000000', color: '#FFFFFF', fontSize: 18 }}>02</span></p>
                            <h5 style={{ letterSpacing: 2, fontSize: 13, marginLeft: 0, paddingTop: 0}}>PREDICTABILITY AND TRANSPARENCY</h5>
                            <p style={{ fontFamily: "inherit", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 400 }}>We adopt a customer-oriented approach to our work, which, for us, particularly means understanding and representing customer interests. In doing so, we act in a pragmatic, flexible and goal-oriented manner. We give our employees freedom and responsibility and consider mistakes to be valuable experiences through which we as a company learn and grow.</p>
                        </div>
                        <div className='col-sm-4'
                        //  style={{ flex: 1 }}
                         >
                            <p><span style={{ border: '1px solid black', paddingLeft: 15, paddingRight: 15, paddingTop: 7, paddingBottom: 7, backgroundColor: '#000000', color: '#FFFFFF', fontSize: 18 }}>03</span></p>
                            <h5 style={{ letterSpacing: 2, fontSize: 13, marginLeft: 0, paddingTop: 0}}>READINESS TO MEET CHALLENGES</h5>
                            <p style={{ fontFamily: "inherit", fontSize: "1rem", lineHeight: "1.5rem", fontWeight: 400 }}>We specialise and research further possibilities in the complex fields of intelligent transportation, connected mobility and payment integration, but we are also open to other demanding business opportunities.</p>
                        </div>

                    </div>
                </div>



            </div>


            <div style={{ height: 70, backgroundColor: '#EFEFEF' }}></div>
            <div style={{ height: 50, backgroundColor: '#000000', color: '#565656', paddingLeft: 100, paddingTop: 20, paddingBottom: 20, fontSize: 12, display: 'flex', alignItems: 'center' }}><label>© 25/05/2016 PRADEEPIT CONSULTING SERVICES PVT LTD</label></div>
        </div>
    )
}
export default AdvisoryBoard;