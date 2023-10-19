import React from 'react';
import laptop from '../Assets/desktopOrange.png';
import suitcase from '../Assets/briefcase.png';
import Airbaloon from '../Assets/airBaloon.png';
import 'bootstrap/dist/css/bootstrap.css';
import '../Style/HomeNumber.css'

function HomeNumber() {

    return (
        <>



            <div class="container" style={{ height: '50vh', paddingTop: "8%" }}>

                <div class="row d-flex justify-content-center" style={{ textAlign: "center" }}>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12  Project">
                        <div class="image">
                            <h2 style={{ color: '#FDDA4C', fontSize: 45 }}>01</h2>

                            <h4 className="mb-0">
                                STRATEGY
                                <hr className="strategy-line" />
                            </h4>

                        </div>
                        <div class="overlay" style={{ transition: 'ease-in 500' }}>
                            <div class="text">
                                <img src={laptop} style={{ width: 50, height: 50 }}></img>
                                <p>PROJECTS INVOLVES CONTENT STRATEGY,
                                    BUSINESS STRATEGY, LEAD GENERATION
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-3 col-md-6 col-sm-12 col-xs-12   Project">
                        <div class="image">
                            <h2 style={{ color: '#FDDA4C', fontSize: 45 }}>02</h2>
                            <h4 className="mb-0">PLANNING <hr className="strategy-line" /></h4>
                           
                            </div>
                        <div class="overlay">
                            <div class="text">
                                <img src={suitcase} style={{ width: 50, height: 50 }}></img>
                                <p>DESIGNED TO CONTROL & EXECUTION OF BRD/FSD,
                                    HLD, LLD, TECHNICAL ARCHITECTUR
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-lg-3 col-md-6 col-sm-12 col-xs-12   Project">
                        <div class="image">
                            <h2 style={{ color: '#FDDA4C', fontSize: 45 }}>03</h2>
                            <h4 className="mb-0">DEVELOPMENT  <hr className="strategy-line" /></h4>
                            
                            </div>
                        <div class="overlay">
                            <div class="text">
                                <img src={laptop} style={{ width: 50, height: 50 }}></img>
                                <p>SET OF ACTIVITIES IN SYSTEMS
                                    TO COLLECT CHALLENGES,
                                    DEVELOP SOLUTIONS, AND
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12  Project">
                        <div class="image">
                            <h2 style={{ color: '#FDDA4C', fontSize: 45 }}>04</h2>
                            <h4 className="mb-0">LAUNCH  <hr className="strategy-line" /></h4>
                           
                            </div>
                        <div class="overlay">
                            <div class="text">
                                <img src={Airbaloon} style={{ width: 50, height: 50, color: '#FDD947' }}></img>
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