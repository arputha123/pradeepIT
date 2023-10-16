import laptop from '../Assets/desktopOrange.png';
import suitcase from '../Assets/briefcase.png';
import Airbaloon from '../Assets/airBaloon.png';

function HomeNumber (){

    return(
        <>

        <div class="container" 
        style={{ paddingLeft: 100,  height: '50vh', paddingTop: "8%"}}
        >
            <div class="row justify-content-center align-items-center">
                <div class="col-md-3 col-sm-6 col-xs-6 Project">
                    <div class="image">
                    <h2 style={{ color: '#FDDA4C', fontSize: 45, paddingLeft: 10 }}>01</h2>
                    <h4>STRATEGY</h4>
                    <hr style={{ width: 40}} />
                    </div>
                    <div class="overlay" style={{transition:'ease-in 500'}}>
                        <div class="text">
                            <img src={laptop} style={{width:50,height:50}}></img>
                            <p>PROJECTS INVOLVES CONTENT STRATEGY,
                                BUSINESS STRATEGY, LEAD GENERATION
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6 Project">
                <div class="image">
                    <h2 style={{ color: '#FDDA4C', fontSize:45, paddingLeft: 10 }}>02</h2>
                    <h4>PLANNING</h4>
                    <hr style={{ width: 40}} /></div>
                    <div class="overlay">
                        <div class="text">
                        <img src={suitcase} style={{width:50,height:50}}></img>
                            <p>DESIGNED TO CONTROL & EXECUTION OF BRD/FSD,
                                 HLD, LLD, TECHNICAL ARCHITECTUR
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6 Project">
                <div class="image">
                    <h2 style={{ color: '#FDDA4C', fontSize:45, paddingLeft: 10 }}>03</h2>
                    <h4>DEVELOPMENT</h4>
                    <hr style={{ width: 40}}/></div>
                    <div class="overlay">
                        <div class="text">
                        <img src={laptop} style={{width:50,height:50}}></img>
                            <p>SET OF ACTIVITIES IN SYSTEMS
                                 TO COLLECT CHALLENGES,
                                 DEVELOP SOLUTIONS, AND
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6 Project">
                <div class="image">
                    <h2 style={{ color: '#FDDA4C', fontSize:45, paddingLeft: 10 }}>04</h2>
                    <h4>LAUNCH</h4>
                    <hr style={{ width: 40}} /></div>
                    <div class="overlay">
                        <div class="text">
                        <img src={Airbaloon} style={{width:50,height:50,color:'#FDD947'}}></img>
                            <p>DESIGN DEVELOPMENT LAUNCH UAT SYSTEM 
                                DEPLOY IN CLOUD  INFRASTRUCTURE.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
     </>
     )
}
export default HomeNumber;