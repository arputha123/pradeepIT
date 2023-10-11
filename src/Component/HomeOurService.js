import Box from '../Assets/suitcaseBlack.png'
import Announce from '../Assets/marketing.png'
import Cart from '../Assets/trolley.png'
import Tablet from '../Assets/tablet.jpg';
import Mobile from '../Assets/smartphone.png';

function OurService() {
    return (
        <>
            <div class="container-fluid ourserviceWant"
            >

                <div class="row justify-content-center">
                    <div class="col-md-6 col-sm-6 col-xs-12 ps-5" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <img src={Box} style={{ width: 50, height: 45 }} />
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
                <div class="row" style={{ paddingLeft: 70 }}>
                    <div class="col-md-4 col-sm-4 col-xs-6">
                        <img src={Announce} style={{ width: 55, height: 55, marginLeft: 55 }} />
                        <p>DIGITAL MARKETING</p></div>

                    <div class="col-md-4 col-sm-4 col-xs-6">
                        <img src={Cart} style={{ width: 55, height: 55, marginLeft: 55 }} />
                        <p>E-COMMERCE SOLUTIONS</p></div>

                    <div class="col-md-4 col-sm-4 col-xs-6">
                        <img src={Mobile} style={{ width: 55, height: 55, marginLeft: 55 }} />
                        <p>WEB DEVELOPMENT</p></div>
                </div>
            </div>


            <div class="container-fluid pt-5">
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
                            <button class="Read">READ MORE <i class="bi bi-arrow-right"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default OurService;