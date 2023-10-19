import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import { TbTargetArrow } from "react-icons/tb";
import { PiSpeakerHighThin } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
import { BiCamera } from "react-icons/bi";
import { PiLaptopLight } from "react-icons/pi";
import { TbTools } from "react-icons/tb";
import { GiAirBalloon } from "react-icons/gi";
import { FaMapMarkedAlt } from "react-icons/fa";
import '../../Pages/Webdevelopment/SixthWeb.css'

function SixthPage() {

    const [activeSlide, setActiveSlide] = useState(0);


    const Icons = [BiCamera, TbTargetArrow, PiSpeakerHighThin, IoMailOpenOutline, PiLaptopLight, TbTools, GiAirBalloon, FaMapMarkedAlt]

    const options = {
        items: 3, 
        nav: false,
        dots: true,
        dotsClass: 'owl-dots',
        dotClass: 'owl-dot-webDevelop',
        dotsEach: 3, 
        touchDrag: true,
        startPosition: 0,
        onTranslated: (event) => {
            setActiveSlide(event.page.index);
        },
        responsive: {
            0: {
                items: 1,
                dotsEach: 1 
            },
            600: {
                items: 2,
                dotsEach: 2 
            },
            1000: {
                items: 3,
                dotsEach: 3 
            }
        },
    };

    const details = [
        { id: 1, title: "Considered Design", subtitle: "We respond directly to  a project's objectives.",icon:BiCamera },
        { id: 2, title: "Creative Collaboration", subtitle: " We respond directly to a project’s objectives.",icon:TbTargetArrow },
        { id: 3, title: "Impaccable service", subtitle: "Great service is achieved through professionalism.",icon:PiSpeakerHighThin },
        { id: 4, title: "Enhance amplify", subtitle: "Working with the latest technology we design.",icon:IoMailOpenOutline },
        { id: 5, title: "Considered Design", subtitle: "We respond directly to project’s objectives.",icon:PiLaptopLight },
        { id: 6, title: "Creative Collaboration", subtitle: "We love working with people who embrace the design.",icon:TbTools },
        { id: 7, title: "Impaccable service", subtitle: "Great service is achieved through professionalism.",icon: GiAirBalloon},
        { id: 7, title: "UnderStand Situation", subtitle: "Working with the latest technology we design.",icon: FaMapMarkedAlt},
    ];



    return (
        <div style={{cursor:"ew-resize", position: "relative", height: "auto", backgroundColor: "#000000", padding: "120px 0px" }}>
            <div class="d-flex justify-content-center">
                <h3 style={{ fontSize: 20, color: "#ffffff", textAlign: "center" }}>TESTIMONIALS</h3>
            </div>

            <OwlCarousel options={options} style={{marginTop: 40}}>
    {details.map((item, index) => (
        <div key={index} className="owlCarousel text-center">
            <div className="icon-container">
                <item.icon size={50} color="#ffffff" />
            </div>
            <div className="text-container mt-3">
                <p className="title" style={{ color: "#ffffff",textTransform:"uppercase"  }}>{item.title}</p>
                <p className="subtitle" style={{ color: "gray",textAlign:"center",padding:"5px 100px",textTransform:"uppercase"  }}>{item.subtitle}</p>
            </div>
        </div>
    ))}
</OwlCarousel>



        </div>
    )
}

export default SixthPage;