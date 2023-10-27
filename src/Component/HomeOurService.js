import React,{useState,useEffect} from 'react';
import Box from '../Assets/suitcaseBlack.png'
import Announce from '../Assets/marketing.png'
import Cart from '../Assets/trolley.png'
import Tablet from '../Assets/tablet.jpg';
import Mobile from '../Assets/smartphone.png';
import ecommerce from '../Assets/corporate.jpg'
import Arrow from "../Assets/right-arrow.png"
import "../Style/HomeOurService.css";


function OurService() {
    const digit = 'DIGITAL MARKETING';
    const eCom = 'E-COMMERCE SOLUTIONS';
    const web = 'WEB DEVELOPMENT';
    const [showTabs, setShowTabs] = useState(digit)

    
    useEffect(() => {
        const appearOptions = {
            threshold: 0
        };
        const faders = document.querySelectorAll('.fade-in');
        const appearOnScrool = new IntersectionObserver(function (entries, appearOnScrool) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                }
                else {
                    entry.target.classList.add('appear');
                    appearOnScrool.unobserve(entry.target);
                }
            })
        }, appearOptions)
        faders.forEach(fader => {
            appearOnScrool.observe(fader);
        })
    });
    return (
        <>
            <div class="container-fluid "
            >

                <div class="row ourserviceWant justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12 ps-5" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <img className='imgour ' src={Box}   />
                        <h5 style={{ fontSize: 14, paddingTop: 20, marginLeft: 5 }}>WANT TO SEE MORE AMAZING WORKS?</h5>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 ps-5">
                        <button type="button" class="Btn1"><b>VIEW PORTFOLIO</b></button>
                        <button type="button" class="Btn2"><b>SUBSCRIBE US</b></button>
                    </div>
                </div>

            </div>

            <div class="container" style={{ marginTop: 80 }}>
                <div class="d-flex row justify-content-center">
                    <div class="col-md-2">
                        <h2><b>OUR SERVICES</b></h2>
                    </div>
                </div>
            </div>


            <div class="container" style={{ marginTop: 50 }}>
                <div class=" iconsmark" style={{ paddingLeft: 70 }}>
                    <div class="col-md-4 col-sm-4 col-xs-6" value="DIGITAL MARKETING" onClick={()=>{setShowTabs(digit)}} style={{ cursor: 'pointer' }}>
                        <img className='annou' src={Announce}  />
                        <p className='ppann'>DIGITAL MARKETING</p></div>
<div className='vlccode1' >

</div>
                    <div class="col-md-4 col-sm-4 col-xs-6   carrrrrt" value="E-COMMERCE SOLUTIONS" onClick={()=>{setShowTabs(eCom)}} style={{ cursor: 'pointer' }} >
                        <img src={Cart} className='cartt'  />
                        <p className='ppann'>E-COMMERCE SOLUTIONS</p>
                        </div>
                        <div className='vlccode' >

</div>

                    <div class="col-md-4 col-sm-4 col-xs-6 mobiii" value="WEB DEVELOPMENT" onClick={()=>{setShowTabs(web)}} style={{ cursor: 'pointer' }} >
                        <img src={Mobile} className='mobbi'  />
                        <p className='ppann'>WEB DEVELOPMENT</p></div>
                </div>
            </div>


            <div class="container-fluid pt-5">
            {
                    showTabs == digit &&
                <div class="ourService">
                    <div
                        class="col-md-6 col-sm-10 col-xs-10 Laptop1">
                        <img src={Tablet} class="img-fluid Tablet"
                        />
                        <div
                            className='Digital'>
                            <div class="Laptop"
                                style={{ fontSize: 22 }}
                            >
                                <h1 style={{ marginLeft: 30, color: '#FDD947', fontSize: 30 }}>01</h1>
                                <p>D I G I T A L   M A R K E T I N G</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-10 col-xs-10 d-flex  justify-content-center flex-column align-items-center Read1" >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={Announce} style={{ width: 55, height: 55, marginLeft: 25, flex: 1 }} />
                            <h2 style={{ fontSize: 28, fontWeight: 700, flex: 1, marginTop: 30 }}>DIGITAL MARKETING</h2>
                        </div>
                        <div style={{ padding: 30, backgroundColor: '#EFEFEF', marginTop: 30 }}>
                            <p style={{ fontSize: 14, lineHeight: 2, wordSpacing: 1, textAlign: 'center', width: '100%' }} class="col-md-6 col-sm-6 col-xs-10">We ensure organizations reach their full potential in the online space through marketing strategies based on deep analytics and customer journeys.</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button class="Read">READ MORE <img src={Arrow}/></button>
                        </div>

                    </div>
                </div>
}
{
                        showTabs == eCom &&
                            <div class="ourService">
                                <div
                                    class="col-md-6 col-sm-10 col-xs-10 Laptop1">
                                    <img src={ecommerce} class="img-fluid Tablet"
                                    />
                                    <div
                                        className='Digital'>
                                        <div class="Laptop"
                                            style={{ fontSize: 22 }}
                                        >
                                            <h1 style={{ marginLeft: 30, color: '#FDD947', fontSize: 30 }}>02</h1>
                                            <p>E C O M M E R C E  S O L U T I O N S</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6 col-sm-10 col-xs-10 d-flex  justify-content-center flex-column align-items-center Read1" >
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={Cart} style={{ width: 55, height: 55, marginLeft: 25, flex: 1 }} />
                                        <h2 style={{ fontSize: 28, fontWeight: 700, flex: 1, marginTop: 30 }}>ECOMMERCE SOLUTIONS</h2>
                                    </div>
                                    <div style={{ padding: 30, backgroundColor: '#EFEFEF', marginTop: 30 }}>
                                        <p style={{ fontSize: 14, lineHeight: 2, wordSpacing: 1, textAlign: 'center', width: '100%' }} class="col-md-6 col-sm-6 col-xs-10">We offer Ecommerce services for designing, developing, hosting, marketing and analytics, across industry verticals around the globe.</p>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <button class="Read">READ MORE  <img src={Arrow}/></button>
                                    </div>

                                </div>
                            </div>
}

{
                            showTabs == web ?
                                <div class="ourService">
                                    <div
                                        class="col-md-6 col-sm-10 col-xs-10 Laptop1">
                                        <img src={Tablet} class="img-fluid Tablet"
                                        />
                                        <div
                                            className='Digital'>
                                            <div class="Laptop"
                                                style={{ fontSize: 22 }}
                                            >
                                                <h1 style={{ marginLeft: 30, color: '#FDD947', fontSize: 30 }}>03</h1>
                                                <p>W E B  D E V E L O P M E N T</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-sm-10 col-xs-10 d-flex  justify-content-center flex-column align-items-center Read1" >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <img src={Mobile} style={{ width: 55, height: 55, marginLeft: 25, flex: 1 }} />
                                            <h2 style={{ fontSize: 28, fontWeight: 700, flex: 1, marginTop: 30 }}>WEB DEVELOPMENT</h2>
                                        </div>
                                        <div style={{ padding: 30, backgroundColor: '#EFEFEF', marginTop: 30 }}>
                                            <p style={{ fontSize: 14, lineHeight: 2, wordSpacing: 1, textAlign: 'center', width: '100%' }} class="col-md-6 col-sm-6 col-xs-10">We Make affordable & quality websites, which can offer you the best return for your investment. Create a successful online presence through good and extraordinary design according to your business.</p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <button class="Read">READ MORE  <img src={Arrow}/></button>
                                        </div>

                                    </div>
                                </div>
                                : ''
                }
            </div>


        </>
    )
}
export default OurService;