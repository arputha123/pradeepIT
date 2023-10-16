import Spy from '../Assets/spy.png';
import Desktop from '../Assets/desktop.png';
import Airbaloon from '../Assets/hot-air-balloon.png';
import Camera from '../Assets/camera.png';
import Trophy from '../Assets/trophy.png';
import Cloud from '../Assets/cloud.png';

function WhyChooseUs () {
    return(
        <div class="container" style={{ overflow: "hidden", fontSize: 14 }}>

        <div class="row animated animatedFadeInUp fadeInUp fade-in" style={{ marginTop: 60, textAlign: "start", fontSize: 12 }}>
            <h2 style={{ textAlign: 'center', wordSpacing: 5 }}><b>WHY CHOOSE US?</b></h2>
            <div 
            class="col-md-4 col-sm-6" 
            style={{ display: "flex", flexDirection: "row" }}>
                <img src={Spy} style={{ height: 50, width: 80, marginTop: 40 }} />
                <p>

                    <div class="separator-line bg-yellow no-margin-lr"></div>
                    <h4 style={{ marginLeft: 35, fontSize: 12 }}>OUTSOURCING SERVICE PROVIDER</h4>
                    <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900, height: 2, backgroundColor: '#e6af2a', color: '#e6af2a' }} />
                    <p style={{ fontSize: 14, marginLeft: 35, marginRight: 20 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                    <ul class="Listitems">
                        <li>Full stack Java Developer</li>
                        <li>SAP CX/hybris Consultants</li>
                        <li>Full stack PHP Developer</li>
                        <li>Full stack UI/UX Developer</li>
                        <li>Freelancer Funtional Consultants</li>
                        <li>Freelancer Andriod & IOS Developer</li>
                        <li>Freelancer Big Data & Hadoop</li>
                    </ul>

                </p>
            </div>
            <div class="col-md-4 col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                <img src={Desktop} style={{ height: 50, width: 80, marginTop: 40 }} />
                <p>
                    <div class="separator-line bg-yellow no-margin-lr"></div>

                    <h4 style={{ marginLeft: 35, fontSize: 12 }}>WEB DEVELOPMENT</h4>
                    <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900, height: 2, backgroundColor: '#e6af2a', color: '#e6af2a' }} />

                    <p style={{ fontSize: 14, marginLeft: 35 }}>
                        We provide field expertise and complete support right from the initial requirement design all the way to launch and post-implementation.Our expertise in Web Development involves Creating</p>
                    <ul class="Listitems">
                        <li>Static Website</li>
                        <li>CMS Website</li>
                        <li>Ecommerce Website</li>
                        <li>Website Re-Design</li>
                        <li>Web Hosting & Server Maintainance</li>
                        <li>WordPress Website</li>
                        <li>Responsive Website</li>
                    </ul>


                </p>
            </div>
            <div class="col-md-4 col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                <img src={Airbaloon} style={{ height: 50, width: 80, marginTop: 40 }} />
                <p>

                    <div class="separator-line bg-yellow no-margin-lr"></div>
                    <h4 style={{ marginLeft: 35, fontSize: 12 }}>DIGITAL MARKETING</h4>
                    <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900, height: 2, backgroundColor: '#e6af2a', color: '#e6af2a' }} />

                    <p style={{ fontSize: 14, marginLeft: 35 }}>
                        We believe that the work we do must have a real impact in the online world as well as in the conventional marketplace with help of Our Digital Marketing Experts and we exposed to measure ROI of digital media channels and Our services are</p>
                    <ul class="Listitems">
                        <li>Full stack Java Developer</li>
                        <li>SAP CX/hybris Consultants</li>
                        <li>Full stack PHP Developer</li>
                        <li>Full stack UI/UX Developer</li>
                        <li>Freelancer Funtional Consultants</li>
                        <li>Freelancer Andriod & IOS Developer</li>
                        <li>Freelancer Big Data & Hadoop</li>
                    </ul>

                </p>
            </div>
        {/* </div>
        <div class="row animated animatedFadeInUp fadeInUp fade-in" style={{ marginTop: 30, textAlign: "start", fontSize: 12 }}> */}
            <div class="col-md-4 col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                <img src={Camera} style={{ height: 50, width: 80, marginTop: 40 }} />

                <p>

                    <div class="separator-line bg-yellow no-margin-lr"></div>

                    <h4 style={{ marginLeft: 35, fontSize: 12 }}>VIEDO PRODUCTION</h4>
                    <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900, height: 2, backgroundColor: '#e6af2a', color: '#e6af2a' }} />

                    <p style={{ fontSize: 14, marginLeft: 35, marginRight: 20 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                    <ul class="Listitems">
                        <li>Full stack Java Developer</li>
                        <li>SAP CX/hybris Consultants</li>
                        <li>Full stack PHP Developer</li>
                        <li>Full stack UI/UX Developer</li>
                        <li>Freelancer Funtional Consultants</li>
                        <li>Freelancer Andriod & IOS Developer</li>
                        <li>Freelancer Big Data & Hadoop</li>
                    </ul>

                </p>
            </div>
            <div class="col-md-4 col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                <img src={Trophy} style={{ height: 50, width: 80, marginTop: 40 }} />
                <p>

                    <div class="separator-line bg-yellow no-margin-lr"></div>
                    <h4 style={{ marginLeft: 35, fontSize: 12 }}>CORPORATE & ONLINE TRANINING</h4>
                    <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900, height: 2, backgroundColor: '#e6af2a', color: '#e6af2a' }} />

                    <p style={{ fontSize: 14, marginLeft: 35, marginRight: 20 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                    <ul class="Listitems">
                        <li>Full stack Java Developer</li>
                        <li>SAP CX/hybris Consultants</li>
                        <li>Full stack PHP Developer</li>
                        <li>Full stack UI/UX Developer</li>
                        <li>Freelancer Funtional Consultants</li>
                        <li>Freelancer Andriod & IOS Developer</li>
                        <li>Freelancer Big Data & Hadoop</li>
                    </ul>

                </p>
            </div>
            <div class="col-md-4 col-sm-6" style={{ display: "flex", flexDirection: "row" }}>
                <img src={Cloud} style={{ height: 50, width: 80, marginTop: 40 }} />

                <p>

                    <div class="separator-line bg-yellow no-margin-lr"></div>

                    <h4 style={{ marginLeft: 35, fontSize: 12 }}>CLOUD APPLICATION DEVELOPMENT</h4>
                    <hr style={{ width: '10%', marginLeft: 35, fontWeight: 900, height: 2, backgroundColor: '#e6af2a', color: '#e6af2a' }} />
                    <p style={{ fontSize: 14, marginLeft: 35 }}>We provide the business process outsourcing across India.It serve around 40+ clients in Bangalore, 8+ clients  in Pune, 3+ clients in Delhi & Gurgaon and spreadig across all the states in India. In India, it provide services like</p>
                    <ul class="Listitems">
                        <li>Full stack Java Developer</li>
                        <li>SAP CX/hybris Consultants</li>
                        <li>Full stack PHP Developer</li>
                        <li>Full stack UI/UX Developer</li>
                        <li>Freelancer Funtional Consultants</li>
                        <li>Freelancer Andriod & IOS Developer</li>
                        <li>Freelancer Big Data & Hadoop</li>
                    </ul>

                </p>
            </div>
        </div>
    </div> 
    )
}
export default WhyChooseUs;