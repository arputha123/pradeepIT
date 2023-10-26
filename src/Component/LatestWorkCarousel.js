import React, { useState, useEffect } from 'react';
import '../Style/LatestWorkCarousel.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import lerbs from '../Assets/lerbs.jpg';
import leadership from '../Assets/leadership.jpg';
import mapping from '../Assets/mapping.jpg';
import future from '../Assets/future.jpg';
import sap from '../Assets/sap.jpg';
import kannada from '../Assets/kannada.jpg';
import Cross from '../Assets/Cross.jpg';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoTwitter } from "react-icons/bi";
import { ImGooglePlus } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { BiLogoPinterest } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';


const MyCarousel = () => {


  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  const handleMouseEnter = () => {
    setPrev(true)
  }
  const handleMouseLeave = () => {
    setPrev(false)
  }

  const handleMouseEnter1 = () => {
    setNext(true)
  }
  const handleMouseLeave1 = () => {
    setNext(false)
  }



  const carouselItems = [
    {
      id: 1,
      image: lerbs,
      title: 'LERBS– GERMANY, HAMBURG',
      subtitle: 'ABOUT LERBS',
      paragraph1: 'For over 60 years, Lerbs has been supplying clients worldwide with branded products. Originally a ship supplier, the company is located in Bremen. Today, however, Lerbs clients are no longer just shipping companies, shipbuilders and shipping companies – with a turnover of 52 million euros per annum and about 185 employees, it is one of the largest in the industry. Lerbs AG also supplies businesses, small trades, municipalities and the industry with labour protection equipment, screws, non-ferrous metals, welding accessories, operating supplies, tools, machinery, and equipment. The range includes around 150,000 products, which are distributed through trade catalogues, e-commerce or at the company store at the Bremen site.',
      lists: [
        'Industry Type: Siemens & Lerbs Hardware Industry',
        'eCommerce Suite: SAP hybris 6.0, B2B',
        'Vendor: Medienwerft',
        'Contact: Frank Meier',
        'Business: Freelancer Contract',
        'Resources: 2',
        'Client: Lerbs',
        'Website: https://www.lerbs.de/home/',
      ],
    },
    {
      id: 2,
      image: sap,
      title: 'SAP CD – INDIA, BANGALORE',
      subtitle: 'ABOUT DU UAE',
      subtitle1: 'ABOUT WELSPUN INDIA',
      subtitle2: 'SAMSUNG KOREA',
      paragraph1: 'du is showing best practices in using the digital experience as the crucial differentiator to enhance e-commerce competitiveness and the customer experience. We are thrilled to celebrate the results of our partnership with du to launch their first ever e-commerce platform for their customers in the UAE. We will provide du with our IT expertise and online platform to easily develop their online store and meet their overall business goals, and harness future innovations such as contextual marketing, artificial intelligence, and predictive modeling,” said Bulent Unsal, Head of Telecommunications Industry for Middle East and North Africa, SAP.',
      paragraph2: 'As one of the worlds’ leading digital commerce enablers, SAP is supporting Middle East and North Africa telecom operators in their digital transformation. As a result, telecom operators can provide superior customer journeys for business-to-business and business-to-consumer customers.',
      paragraph3: 'du’s new e-commerce platform will provide its shoppers with a unified and seamless shopping journey on all touch points and will offer real-time customer-telecom interaction. Furthermore, du will offer its customers a personalised experience based on their personal profile, and regularly launch new offers to online customers throughout 2018.',
      paragraph4: 'Welspun is one of the world’s largest manufacturers of bed and bath linen, and the hospitality sector in the USA constitutes a significant portion of its client base.',
      paragraph5: 'Welspun USA aspired to widen its reach to include clients from the hospitality sector who sought to purchase linen online.',
      paragraph6: 'Samsung Electronics has 197 assembly plants and sales networks in 84 countries and employs around 307,000 people. The company has been found in 1969 and still headquartered in Suwon. Lee Kun-hee is the Chairman of Samsung Electronics and Kwon Oh-hyun is the CEO. The company is listed at the KOSPI of the Korea Stock Exchange. Samsung is the global market leader in televisions, mobile phones, smartphones, refrigerators, memory products (DRAM, NAND, SSD) and wearable devices.',


      lists: [
        'Industry Type: Telecom',
        'eCommerce Suite: SAP hybris 6.5, Telco Accelerator, B2B, B2C',
        'Client: SAP CD',
        'Contact: Vikas Bhan',
        'Business: C2C',
        'Resources: 4',
        'Client: Transgourmet, Poland',
        'Website: http://www.transgourmet.pl/',
      ],
    },
    {
      id: 3,
      image: leadership,
      title: 'DIGITAL MEDIA CENTRE – STUTTGART, GERMANY',
      subtitle: 'ABOUT TRANSGOURMET',
      paragraph1: 'Transgourmet is a company specializing in wholesale supplies for hotel industry, catering, catering companies and social care centers. As a comprehensive supplier, it offers a wide range of goods, including both food and full equipment as well as equipment for professional kitchens and collective nutrition centers. We operate in Transgourmet literally and figuratively on a large scale. Precise planning, careful packaging, perfect delivery – this is Transgourmet',
      lists: [
        'Industry Type: Telecom',
        'eCommerce Suite: SAP hybris 6.5, Telco Accelerator, B2B, B2C',
        'Client: SAP CD',
        'Contact: Vikas Bhan',
        'Business: C2C',
        'Resources: 4',
        'Client: Transgourmet, Poland',
        'Website: http://www.transgourmet.pl/',
      ],
    },
    {
      id: 4,
      image: mapping,
      title: 'EPLUS – CGI, GERMANY, DUSSELDORF',
      subtitle: 'ABOUT EPLUS',
      paragraph1: 'Munich – 09 January, 2014',
      paragraph2: 'German Mobile Operator E-Plus Group Leverages hybris to Launch its Omni-Commerce ‘Telco 2.0’',
      paragraph3: 'Platform',
      paragraph4: 'hybris software, an SAP company and the world’s fastest-growing commerce platform provider, today announced that one of Germany’s leading mobile telecommunications operators, E-Plus Group, has selected the hybris B2C Commerce Suite as the foundation of its new ‘Telco 2.0’ omni-commerce system. In addition, E-Plus will also be deploying the hybris Telco Accelerator, including a production-ready customizable web storefront with built-in Telco-centric features, that will enable a much faster time to value for E-Plus and a far lower total cost of ownership.',
      paragraph5: 'With more than 24 million subscribers, E-Plus is the third largest mobile operator in Germany, after T-Mobile (38 million subscribers) and Vodafone (37 million subscribers). The E-Plus Group brands include the flat rate brand BASE, leading mobile discounters simyo and blau and the original E-Plus brand that offers a wide range of services to its customers. The ethnic brands AY YILDIZ and Ortel Mobile address customers with foreign origin in Germany. And the latest addition yourfone.de has opened the market for all-net flat-rates in the postpaid segment.',
      paragraph6: '“From our first communication with hybris, it was clear that the team truly understood the Telco market and our specific pain points as an operator,” said Volker Glaeser, Digital Platform Director, E-Plus Gruppe. “Then when we started to look at hybris’ platform, it became evident that it outgunned other comparable solutions in the market due to its omni-channel platform approach, its unique functional fit to the Telco industry’s requirements and, exceptionally important to us, its fast time to value.”',
      paragraph7: 'E-Plus will run the hybris B2C Commerce Suite with Telco Accelerator, along with PCM (Product Content Management), OMS (Order Management System) and WCMS (Web Content Management System). The new hybris platform will also support the development of future business models, such as market-places for trading in used cellphones.',
      paragraph8: 'With hybris, E-Plus will see immediate business value as a result of the following capabilities that the platform and B2C Commerce Suite of solutions provide:',
      paragraph9: 'A true omni-channel experience for customers: a single view of product and plan offerings from any device.',
      paragraph10: 'Develop a price-segmentation strategy by creating a personalized customer experience for more relevant offers of devices and plans to increase conversions.',
      paragraph11: 'Built-in multi-site, multi-language and multi-brand capabilities to create and unlock new business opportunities – even in saturated markets.',
      paragraph12: 'The ability to manage all product information and relationships with hybris’ highly acclaimed master data management (MDM) — a requirement for a seamless cross-channel consumer experience.',

      lists: [
        'Industry Type: Telecom',
        'eCommerce Suite: SAP hybris 6.5, Telco Accelerator',
        'Client: CGI, Dusseldorf',
        'Contact: Ronaldo Van Hellemont',
        'Business: C2C',
        'Resources: 4',
        'Client: E-Plus',
        'Website: www.smartkauf.de',
      ],
    },
    {
      id: 5,
      image: future,
      title: 'FUTURE GROUP – INDIA, BANGALORE',
      subtitle: 'ABOUT FUTURE GROUP:',
      paragraph1: 'Future Group Chooses hybris’ Omni Commerce Solutions to Support its India Operations',
      paragraph2: 'hybris Commerce Suite to provide Future Group’s customers with a single view of its multiple brands across physical and digital channels',
      paragraph3: 'hybris software, an SAP company and the world’s fastest-growing commerce platform provider, today announced that Future Group, a leading retailer in India, will use the hybris Commerce Suite to support its omni-channel retail operations. Comprising several different retail brands covering sectors such as fashion, sportswear, food and groceries, electronics and homeware, Future Group wanted to find the technology that would allow a seamless convergence of its emerging digital and physical commerce touchpoints (physical facilities/store network, human assisted digital commerce network Big Bazaar Direct, e-commerce sites, catalog/phone order; mobile devices; TV/new media etc.).',
      paragraph4: 'Having looked at various solutions, the company decided to use the hybris Commerce Suite as it was the only solution that best met these requirements. Over 500 companies have already chosen hybris to help develop their omni commerce strategy including leading brands and retailers like Toys ‘R’ Us UK, Metro, Levi’s, Galleries Lafayette, Migros, Nespresso and Lufthansa.',
      paragraph5: 'Speaking about the choice of hybris, Kishore Biyani, Group CEO of Future Group, said; “In the world over, physical retailers who have developed themselves into omni-channel merchants are driving to attract customers and business across both digital and physical platforms. hybris has successfully developed omni-channel capabilities for leading retailers across the world. With its modern architecture and modular approach, hybris will transform the way we are able to leverage our omni-channel retail model across all our brands and businesses. With hybris, we see a whole lot of new possibilities in retailing opening up, including the endless aisle vision becoming a reality.”',
      paragraph6: 'Eric Toon, Country Manager South East Asia and India at hybris said; “India is a key global market and we are delighted that a major retailer in this region such as Future Group has seen how the hybris approach to commerce can transform the way they sell and interact with their customers. Given the diversity of brands and size of its customer base, we know Future Group has considered carefully before deciding to select the hybris Commerce Suite. We look forward to working closely with Future Group on the roll-out and implementation of this project to realize the benefits that it will bring to its business.”',
      paragraph7: 'True omni-channel retailers are able to seamlessly integrate the best of both digital and physical worlds at each step of the customer experience. Even before a customer comes to a store, many customers are researching and making their product decisions online. hybris gives an optimal, consistent user experience in-store, on the web, on mobile devices or any other digital platform. And it works in both directions: hybris gives the retailer one view of the customer and the seamless customer interface gives the customer one view of the retailers’ brand. Thus for an omni-channel retailer, websites and mobile devices aren’t just e-commerce ordering vehicles, they are front doors to the stores. Retail outlets aren’t just showrooms, they are digitally-enabled inspiration sites, testing labs, purchase points, instantaneous pickup places, help desks, shipping centers, and return locations.',
      paragraph8: '“Future Group has been a front-runner at adopting innovative next-generation solutions that meet the evolving needs of the Indian retail industry,” said Deb Deep Sengupta, Chief Operating Officer, SAP India. “Our association with Future Group reflects our continued commitment to deliver the right IT platform.',
      lists: [
        'Industry Type: Electronics, House Holds, Appare',
        'eCommerce Suite: SAP hybris 5.2 to 5.6, B2C',
        'Client: Embitel',
        'Contact: Sachin',
        'Business: C2C',
        'Resources: 10',
        'Client: Future Group',
        'Website: www.ezoneonline.in, www.hometown.in, www.allonlinestore.in',
      ],
    },
  ];



  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevImage, setPrevImage] = useState(carouselItems[carouselItems.length - 1].image);
  const [nextImage, setNextImage] = useState(carouselItems[1].image);



  const handlePrevs = () => {
    const newIndex = (selectedIndex - 1 + carouselItems.length) % carouselItems.length;
    setSelectedIndex(newIndex);
    setPrevImage(carouselItems[newIndex].image);
    setNextImage(carouselItems[(newIndex + 2) % carouselItems.length].image);
  };

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % carouselItems.length;
    setSelectedIndex(newIndex);
    setPrevImage(carouselItems[(newIndex + carouselItems.length - 2) % carouselItems.length].image);
    setNextImage(carouselItems[newIndex].image);
  };

  const getVisibleItems = () => {
    const prevIndex = (selectedIndex - 1 + carouselItems.length) % carouselItems.length;
    const nextIndex = (selectedIndex + 1) % carouselItems.length;
    return [carouselItems[prevIndex], carouselItems[selectedIndex], carouselItems[nextIndex]];
  };
  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  useEffect(() => {
    setVisibleItems(getVisibleItems());
  }, [selectedIndex]);


  const [blogs, setBlogs] = useState(false)

  const handleHover = () => {
    setBlogs(false)

  }
  const handleImageHover = () => {
    setBlogs(true)

  }
  return (
    <>
      <Carousel interval={null} pause={false} indicators={false} style={{ position: "relative", fontFamily: "'Open Sans', sans-serif", overflow: "hidden" }} className="custom-carousel"  >
        {visibleItems.map((item, index) => (
          <Carousel.Item key={index} >
            <>
              <div style={{ padding: "40px 40px", backgroundColor: "#000000", color: "#ffffff" }} onMouseEnter={handleImageHover} onMouseLeave={handleHover}>
                <h1 style={{ fontSize: 18, letterSpacing: 4, fontWeight: 600 }}>{item.title}</h1>
                <div className='lines' style={{ width: blogs ? 100 : 30 }}></div>
              </div>

              <div class="row g-0" style={{ padding: "120px 40px" }}>
                <div class="col-lg-8 col-md-12 col-xs-12 col-sm-12" style={{ paddingLeft: 20 }}>
                  <img
                    className="d-block img-fluid"
                    src={item.image} style={{ width: "100%", height: "70vh" }}
                    alt="First slide"
                  />



                  <div className="lists">
                    <ul class="list-by">
                      {item.lists.map((listItem, idx) => (
                        <li key={idx} style={{ color: "black", fontSize: 13 }}>{listItem}</li>
                      ))}
                    </ul>
                  </div>


                  <div style={{ padding: "80px 0px 120px" }}>
                    <h2 style={{ fontSize: 24, fontWeight: 400, letterSpacing: "inherit" }}>{item.subtitle}</h2>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 10, lineHeight: 2 }}>{item.paragraph1}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph2}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph3}</p>
                    <h2 style={{ fontSize: 24, fontWeight: 400 }}>{item.subtitle1}</h2>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph4}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph5}</p>
                    <h2 style={{ fontSize: 24, fontWeight: 400 }}>{item.subtitle2}</h2>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph6}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph7}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph8}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph9}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph10}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph11}</p>
                    <p style={{ fontSize: 14, color: "#626262", letterSpacing: "0.02em", marginBottom: 20, lineHeight: 1.5 }}>{item.paragraph12}</p>
                  </div>

                  <div class="d-flex justify-content-center align-items-center" style={{ padding: "40px 30px" }}>
                    <p style={{ textAlign: "center", fontSize: 11, color: "#828282", letterSpacing: 2 }}>
                      CREATED BY ADMIN | MAY 19, 2018 | SAP
                    </p>
                  </div>
                  <div className='d-flex justify-content-evenly align-items-center' style={{ padding: "25px 20px" }}>

                    <div className='facebook'>
                      <BiLogoFacebook />
                    </div>
                    <div className='twitter'>
                      <BiLogoTwitter />
                    </div>
                    <div className='google'>
                      <ImGooglePlus />
                    </div>
                    <div className='linked'>
                      <ImLinkedin2 />
                    </div>
                    <div className='pintrest'>
                      <BiLogoPinterest />
                    </div>

                  </div>

                </div>
                <div class="col-lg-3 offset-lg-1 col-md-12 col-xs-12 col-sm-12" style={{}}>
                  <div class="row mb-5">
                    <div class="col-lg-5 col-md-12 col-xs-12 col-sm-12" style={{width:"100%"}}>
                      {/* <div class="input-group"> */}
                        <input type="text" class="in" placeholder="Enter your keywords..." style={{border: "2px solid #dfdfdf", borderRadius:1.5,padding:"15px 20px", color: "#dfdfdf"}}/>
                          {/* <div class="input-group-append">
                            <span class="input-group-text"></span>
                          </div>
                      </div> */}
                    </div>

                  </div>

                  <div style={{ marginBottom: 65 }}>
                    <h5 style={{ fontSize: 12, marginTop: 10, color: "#000000", marginBottom: 10, fontWeight: 550, letterSpacing: 2 }}>RECENT PROJECTS</h5>
                    <div className='line1'></div>
                    <p style={{ fontSize: 13, padding: "10px 0px" }}>Corporate video</p>



                    <div style={{ display: "flex", padding: "10px 0px" }}>
                      <div>
                        <img src={kannada} class="img-fluid" alt="image" width="81px" height="43" />
                      </div>

                      <div class="ps-3">
                        <p style={{ fontSize: 13 }}>kannadamasala.com</p>
                      </div>
                    </div>




                    <div style={{ display: "flex", padding: "10px 0px" }}>
                      <div>
                        <img src={Cross} class="img-fluid" alt="image" width="81px" height="43" />
                      </div>
                      <div class="ps-3">
                        <p style={{ fontSize: 13 }}>Cross Finvest</p>
                      </div>
                    </div>


                  </div>

                  <div style={{ marginBottom: 65 }}>
                    <h5 style={{ fontSize: 12, marginTop: 10, color: "#000000", marginBottom: 10, fontWeight: 550, letterSpacing: 2 }}>PROJECT CATEGORIES</h5>
                    <div className='line1'></div>
                    <p style={{ fontSize: 13, color: "#000000" }}>SAP <span style={{ color: "#ABABAB", fontSize: 13 }}>/ 5</span></p>
                    <p style={{ fontSize: 13, color: "#000000" }}>Website Design<span style={{ color: "#ABABAB", fontSize: 13 }}> / 2</span></p>
                  </div>

                  <div style={{ marginBottom: 65 }}>
                    <h5 style={{ fontSize: 12, marginTop: 10, color: "#000000", marginBottom: 10, fontWeight: 550, letterSpacing: 2 }}>ARCHIVES</h5>
                    <div className='line1'></div>
                    <p style={{ fontSize: "13px", color: "#000000" }}>September 2018</p>
                    <p style={{ fontSize: "13px", color: "#000000" }}>Febraury 2016</p>
                  </div>

                  <div style={{ marginTop: "8%" }}>
                    <h5 style={{ fontSize: 12, marginTop: 10, color: "#000000", marginBottom: 10, fontWeight: 550, letterSpacing: 2 }}>CATEGORIES</h5>
                    <div className='line1'></div>
                    <p style={{ fontSize: "13px", color: "#000000" }}>Digital Marketing</p>
                    <p style={{ fontSize: "13px", color: "#000000" }}>Ecommerce</p>
                    <p style={{ fontSize: "13px", color: "#000000" }}>Magento</p>
                    <p style={{ fontSize: "13px", color: "#000000" }}>News</p>
                    <p style={{ fontSize: "13px", color: "#000000" }}>Web Design</p>
                  </div>

                </div>
              </div>

              <div className="grayfoot" ></div>


            </>
          </Carousel.Item>




        ))}


      </Carousel>

      <div class="carousel-container" >

        <a className="carousel-control-prev" href="#" role="button" onClick={handlePrevs} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: "fixed", top: "50%", display: "flex", left: prev ? 0 : -120, transition: "ease-in-out 1000ms" }} >

          <img src={prevImage} alt="Previous" style={{ height: "83px", width: "100%" }} />

          <img
            alt="Previous Project"
            className="previous-project-img"
            src="https://pradeepit.com/wp-content/themes/h-code/assets/images/previous-project.png"
            width="33"
            height="83"
          />
        </a>

        <a className="carousel-control-next" href="#" role="button" onClick={handleNext} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} style={{ position: "fixed", top: "50%", right: next ? 0 : -120, transition: "ease-in-out 1000ms", display: "flex", backgroundColor: "transparent" }} >
          <img alt="Next Project" class="next-project-img" src="https://pradeepit.com/wp-content/themes/h-code/assets/images/next-project.png" width="33" height="83" />
          <img src={nextImage} alt="Next" style={{ height: "83px", width: "100%" }} />

        </a>
      </div>




    </>
  );
};

export default MyCarousel;


