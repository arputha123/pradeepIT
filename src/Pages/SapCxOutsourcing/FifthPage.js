import React,{useState} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import '../../Pages/SapCxOutsourcing/FifthPageSap.css';


const CarouselComponent = () => {
    const [activeSlide, setActiveSlide] = useState(0);


  const options = {
    items: 1, 
    nav: false, 
    dots: true, 
    loop: true, 
    touchDrag: true,
    dotsClass: 'owl-dots', 
  dotClass: 'owl-dot-Sap', 
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
    { id: 1, title: "Supplix B2B shop", subtitle: "SAP CX | B2B Accelerator",paragraph1:" Supplix is a B2B portal was realized on the basis of Hybris 6.1 and offers comprehensive functionalities.&nbsp;The PradeepIT Experts implemented B2B Accelerator along with secureportaladdon for backend users, Cart, Checkout and Order Implementation as per client requirements." ,paragraph2:"Nearly 150,000 products have been migrated to the brand new online store of branded products.&nbsp;Here, great demands had to be made on the user management: These included, among other things, customer-specific user structures and the administration of budgets.&nbsp;Another task was the adapted ERP and PIM integration.&nbsp;At the customer level, the allocation of catalogs and products had to be made possible."},
    { id: 2, title: "Transgourmet", subtitle: " B2B |Wholesale supplies",paragraph1:"Transgourmet&nbsp;Holding AG is Europe’s second-largest cash &amp; carry and wholesale supplies player. It operates in Switzerland, France, Germany, Poland.",paragraph2:"PradeepIt worked with Transgourmet Poland project enrolment on&nbsp;basis of Hybris 6.x and implemented WCMS, Cart , Checkout and Order and Solr for Product search.&nbsp;" },
    { id: 3, title: "WILLIAM STORMDAL", subtitle: " BRAND STRATEGY | GRAPHIC DESIGN ",paragraph1:"Ipsum is simply dummy text of the printing &amp; typesetting industry. Lorem Ipsum has been the industry’s standard dummy. Lorem Ipsum is simply dummy text of the printing &amp; typesetting industry." },
  ];

  return (
    <div className="custom-cursor" style={{ position: "relative", height: "auto", backgroundColor: "#F6F6F6", padding: "60px 0px" ,display:"flex"}}>
     
    
      <OwlCarousel options={options} style={{height:"auto"}}>
        {details.map((item,index) => (
          <div key={item.id} class="owlCarousel" style={{display:"flex"}} >
            <h2 class="Item-id" style={{ fontSize: 80}}>0{item.id}</h2>
            <div class="" id="verical-line" style={{ height: 100, backgroundColor: "#d7d7d7", width: 1,marginLeft:30,marginRight:30  }}></div>
            <div className='Title'  style={{display:"block",marginLeft:30,width:"auto",paddingRight:800}}>
            <h3 style={{textTransform:"uppercase",color:"black",fontWeight:700}}>{item.title}</h3>
            <h4 style={{textTransform:"uppercase", fontSize: 12, letterSpacing: 2, color: "#626262", marginBottom: 30 }}>{item.subtitle}</h4>
            <p style={{ color: "#626262", fontSize: 14, marginBottom: 30,width:"fit-content"}}>
           {item.paragraph1}
            </p>
            <p style={{ color: "#626262", fontSize: 14, marginBottom: 30,width:"fit-content"}}> {item.paragraph2}</p>
            <div className="View-button" style={{ border: "5px solid #000000", width: "fit-content", padding: "5px 5px", fontSize: 12, fontWeight: 700,color:"black",fontWeight:700,cursor:"pointer" }}>VIEW CASE STUDY</div>
         </div>
        </div>

        ))}
        
      </OwlCarousel>

               </div>
  );
};

export default CarouselComponent;

