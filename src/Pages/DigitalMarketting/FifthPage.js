import React,{useState} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import '../../Pages/DigitalMarketting/FifthPageDigital.css';

const CarouselComponent = () => {

    const [activeSlide, setActiveSlide] = useState(0);


  const options = {
    items: 1, 
    nav: false, 
    dots: true, 
    loop: true, 
    touchDrag: true,
    dotsClass: 'owl-dots', 
  dotClass: 'owl-dot-Digi', 
  dotsEach: true,
  startPosition: 0,
  onTranslated: (event) => {
    setActiveSlide(event.page.index);
  },
  responsive: {
    0: {
      items: 1, 
    },
    600: {
      items: 1, 
    },
    1000: {
      items: 1, 
    },
    400:{
        items:1
    }
     },
  };

  const details = [
    { id: 1, title: "CORINNE PRODUCT", subtitle: "BRAND STRATEGY | GRAPHIC DESIGN" },
    { id: 2, title: "REBRAND COFFEE", subtitle: " WEB DESIGN | BRAND STRATEGY" },
    { id: 3, title: "WILLIAM STORMDAL", subtitle: " BRAND STRATEGY | GRAPHIC DESIGN " },
  ];

  return (
    <div className="custom-cursor" style={{ position: "relative", height: "auto", backgroundColor: "#F6F6F6", padding: "120px 0px" ,display:"flex"}}>
     
    
      <OwlCarousel options={options}>
        {details.map((item,index) => (
          <div key={item.id} class="owlCarousel" style={{display:"flex"}} >
            <h2 class="Item-id" style={{ fontSize: 80}}>0{item.id}</h2>
            <div class="" id="verical-line" style={{ height: 100, backgroundColor: "#d7d7d7", width: 1,marginLeft:30,marginRight:30  }}></div>
            <div className='Title'  style={{display:"block",marginLeft:30,width:"auto",paddingRight:800}}>
            <h3 style={{color:"black",fontWeight:600}}>{item.title}</h3>
            <h4 style={{ fontSize: 12, letterSpacing: 2, color: "#626262", marginBottom: 30 }}>{item.subtitle}</h4>
            <p style={{ color: "#626262", fontSize: 14, marginBottom: 30}}>
              Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry’s standard dummy.
            </p>
            <div className="View-button" style={{color:"black",cursor:"pointer", border: "5px solid #000000", width: "fit-content", padding: "5px 5px", fontSize: 12, fontWeight: 700 }}>VIEW CASE STUDY</div>
         </div>
        </div>

        ))}
        
      </OwlCarousel>

               </div>
  );
};

export default CarouselComponent;

