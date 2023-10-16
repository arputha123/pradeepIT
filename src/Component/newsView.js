import { React, useEffect, useState } from 'react';
// import TopBarComponent from './topbar';
import img from '../Assets/news1.jpg'
import fund from '../Assets/investment.jpg';
import line from '../Assets/line2.png'
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import TopBarCommon from "./Topbarcommon";
import '../Style/newsview.css'


const ViewNews = () => {
    const location = useLocation()
    const stateParamVal = location.state
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [dataIndex, detDataIndex] = useState(stateParamVal.id);


    console.log("stateParamVal", stateParamVal);

    // useEffect(() => {
    //     let firstarr = stateParamVal.data.filter((val, ind) => {
    //         return ind == stateParamVal.id
    //     })
    //     setFirstData(firstarr);
    //     let secondarr = stateParamVal.data.filter((val, ind) => {
    //         return ind != stateParamVal.id
    //     })
    //     setSecondData(secondarr);

    // }, [])
    // console.log("firstData", firstData);
    // console.log("secondData", secondData);
    
    const NextOnClick = () =>{
        detDataIndex(dataIndex + 1)
    }
    const PrevOnClick = () =>{
        detDataIndex(dataIndex - 1)
    }
    const SecondDataOnClick = (ind) =>{
        detDataIndex(ind)
    }
    console.log("dataIndex",dataIndex);
    return (
        <>
            <TopBarCommon/>
            <div className='container col2-layout mt-5'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12 col-xs-12'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 col-sm-12 col-xs-12'>
                                    {stateParamVal.data && stateParamVal.data.map((val, ind) => {
                                        return (
                                            <>
                                                {
                                                    dataIndex == ind ?
                                                        <>
                                                            <h2 className='headline'>
                                                                {val.Heading}
                                                            </h2>
                                                            <div className='body_data'>
                                                                {/* Posted by */}
                                                                <span><a href='/'>{val.Admin}</a></span>
                                                                |
                                                                <span> {val.Date} </span>
                                                                |
                                                                <a href='/News'>News</a>
                                                            </div>
                                                            <div className='mt-3 mb-3'>
                                                                <div className='blog-image bg-transparent'>
                                                                    <img src={val.Img} width='700' class="img-fluid" alt="Responsive image" />
                                                                </div>
                                                            </div>
                                                            <div className='details-text' style={{ width: "90%" }}>

                                                                <p>{val.BodyData}</p>
                                                                {/* <p>PRADEEPIT is the foremost ISO Certified 9001: 2015 IT Company, which has marked its flagship in 3+ Countries With 300+ Projects Successfully Accomplished and its core focus on in-house open source Product development.</p>
                                                                <p>Now rolled out its Center of Excellence at Karnataka Engineering Colleges to provide Industry standard courses in IT essentials, Web Application, Enterprise Application Development, Webservice and Best Practices, Andriod, Hadoop, SAP CRM, SAP ERP, ABAP, Testing Manual & Automation, Native Application Development, Government/Private Projects Real Time Project & Process Exposure, and all IT best practices Tools.</p>
                                                                <p>Chancellor’s of Engineering Colleges in Karnataka has signed the MoU with the PRADEEPIT. Chief Operation Officer Geeta Ari in a statement here on Monday said that an advantage of the Center of Excellence in the university was that its student can take up the courses and appear for the MNC Companies examinations. Normally, engineering students join these short courses by paying fees between Rs. 25,000 to Rs. 50,000 and later appear for the IT Skills Global acceptable Certification exams paying around Rs. 20,000.</p>
                                                                <p>Mrs. Geeta Ari said that the courses would enable students to get hands-on training in best practices from the entry level to expert level.</p>
                                                                <p>A full-fledged lab has been installed in the Center of Excellence, Online Exam via Pradeep Academy, Training & Placement Program engaged via Display Signage Cloud solution by PradeepIT & Aiddition Technology built for Cloud Digital assets display management.</p>
                                                                <p>The total cost of the College Video worth of RS.3 lakh, Candid Photo of each students worth of RS.60,000. And than Cloud Display Digital Signage Software and 55/65 Inch worth of rs 1,20,000 bare by PradeepIT for each colleges.</p>
                                                                <p>Pradeep Academy had provided a 1 years 6 months training course to 5th Semester Students & 1 year courses to 7th Semester which Includes Training, Internship 2 Real Time Projects and Unlimited On Campus / Off Campus Placement Exam from various MNC Companies to fill the Talent from every corner of Karnataka state.</p> */}
                                                            </div>
                                                        </>

                                                        : ""
                                                }
                                            </>
                                        )
                                    })}
                                    {/* <h2 className='headline'>
                                        100+ Karnataka Engineering Colleges Signed MoU With PradeepIT
                                    </h2>
                                    <div className='body_data'>
                                        Posted by
                                        <span><a href='/'>Admin</a></span>
                                        |
                                        <span> Octbor 07, 2023 </span>
                                        |
                                        <a href='/News'>News</a>
                                    </div>
                                    <div className='mt-3 mb-3'>
                                        <div className='blog-image bg-transparent'>
                                            <img src={img} />
                                        </div>
                                    </div>
                                    <div className='details-text' style={{ width: "90%" }}>
                                        <p>PRADEEPIT is the foremost ISO Certified 9001: 2015 IT Company, which has marked its flagship in 3+ Countries With 300+ Projects Successfully Accomplished and its core focus on in-house open source Product development.</p>
                                        <p>Now rolled out its Center of Excellence at Karnataka Engineering Colleges to provide Industry standard courses in IT essentials, Web Application, Enterprise Application Development, Webservice and Best Practices, Andriod, Hadoop, SAP CRM, SAP ERP, ABAP, Testing Manual & Automation, Native Application Development, Government/Private Projects Real Time Project & Process Exposure, and all IT best practices Tools.</p>
                                        <p>Chancellor’s of Engineering Colleges in Karnataka has signed the MoU with the PRADEEPIT. Chief Operation Officer Geeta Ari in a statement here on Monday said that an advantage of the Center of Excellence in the university was that its student can take up the courses and appear for the MNC Companies examinations. Normally, engineering students join these short courses by paying fees between Rs. 25,000 to Rs. 50,000 and later appear for the IT Skills Global acceptable Certification exams paying around Rs. 20,000.</p>
                                        <p>Mrs. Geeta Ari said that the courses would enable students to get hands-on training in best practices from the entry level to expert level.</p>
                                        <p>A full-fledged lab has been installed in the Center of Excellence, Online Exam via Pradeep Academy, Training & Placement Program engaged via Display Signage Cloud solution by PradeepIT & Aiddition Technology built for Cloud Digital assets display management.</p>
                                        <p>The total cost of the College Video worth of RS.3 lakh, Candid Photo of each students worth of RS.60,000. And than Cloud Display Digital Signage Software and 55/65 Inch worth of rs 1,20,000 bare by PradeepIT for each colleges.</p>
                                        <p>Pradeep Academy had provided a 1 years 6 months training course to 5th Semester Students & 1 year courses to 7th Semester which Includes Training, Internship 2 Real Time Projects and Unlimited On Campus / Off Campus Placement Exam from various MNC Companies to fill the Talent from every corner of Karnataka state.</p>
                                    </div> */}
                                    <div className='text-center col-md-12 col-sm-12 col-xs-12 no-padding-lr'>
                                        <a className='btn social-icon social-icon-large button'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                        <a className='btn social-icon social-icon-large button'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                        <a className='btn social-icon social-icon-large button'>
                                            <i className='fa fa-google-plus'></i>
                                        </a>
                                        <a className='btn social-icon social-icon-large button'>
                                            <i className='fa fa-linkedin'></i>
                                        </a>
                                        <a className='btn social-icon social-icon-large button'>
                                            <i className='fa fa-pinterest'></i>
                                        </a>
                                    </div>
                                    <div className="next-previous-project-style2" role='navigation'>
                                        <div className='previous-link' 
                                        
                                        // style={{
                                        //     dataIndex : 0 ? 'dis' : 'none'
                                        //   }}
                                        // th:style="${role == 'ADMIN' ? 'display:block' : 'display:none'}"
                                        >
                                            <a rel='prev'
                                            style={ dataIndex == 0 ? { display : "none"} : {}}
                                             onClick={()=> PrevOnClick()} >
                                                <i className='fa fa-angle-left'></i>
                                                <span> Previous Post</span>
                                            </a>
                                        </div>
                                        <div className='back-to-category'>
                                            <a href='/news'>
                                                <i className='fa fa-th-large'></i>
                                            </a>
                                        </div>
                                        {/* <span>|</span> */}
                                        <div className='next-link'>
                                            <a rel='next' 
                                            style={ dataIndex == stateParamVal.data.length - 1 ? { display : "none"} : {}}
                                            onClick={()=> NextOnClick()}>
                                                <span>Next Post </span>
                                                <i className='fa fa-angle-right'></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 col-xs-12 col-md-offset-1 xs-margin-top-seven sidebar pull-right'>
                        <div className='container'>
                            <div id='search-13' className='widget widget_search'>
                                {/* <button className='fa fa-search close-search search-button black-text'/> */}
                                <input className='sidebar-search' type='text' name='search' placeholder='Enter your keywords...' />
                            </div>
                            <div>
                                <h5 className='widget-title font-alt'>RECENT PROJECTS</h5>
                                <div className='thin-separator-line'></div>
                            </div>
                            <div>
                                <ul className='widget-posts'>
                                    <li>
                                        {/* <a href='/'> */}
                                        <div className='widget-posts-details'>
                                            <a href='NewsView'>Corporate Video</a>
                                        </div>
                                        {/* </a> */}
                                    </li>
                                    <li>
                                        <a href='NewsView'> </a>
                                        <div className='widget-posts-details'>
                                            <a href='NewsView'>KannadaMassala.com</a>
                                        </div>

                                    </li>
                                    <li>
                                        <a href='NewsView'> </a>
                                        <div className='widget-posts-details'>
                                            <a href='NewsView'>Cross Finvest</a>
                                        </div>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h5 className='widget-title font-alt'>PROJECT CATEGORIES</h5>
                                <div className='thin-separator-line'></div>
                                <ul className='mb-5'>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ flexDirection: "row", marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>SAP</a>
                                        <span className='font_size' style={{ color: "#ababab" }}>/ 5</span>
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ flexDirection: "row", marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Website Design</a>
                                        <span className='font_size' style={{ color: "#ababab" }}>/ 2</span>
                                    </li>
                                </ul>
                                <h5 className='widget-title font-alt'>ARCHIVES</h5>
                                <div className='thin-separator-line'></div>
                                <ul className='mb-5'>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>September 2018</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 5</span> */}
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>February 2016</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 2</span> */}
                                    </li>
                                </ul>
                                <h5 className='widget-title font-alt'>CATEGORIES</h5>
                                <div className='thin-separator-line'></div>
                                <ul>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Digital Marketing</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 5</span> */}
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Ecommerce</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 2</span> */}
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Magento</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 2</span> */}
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>News</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 2</span> */}
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Web Designing</a>
                                        {/* <span className='font_size' style={{ color: "#ababab" }}>/ 2</span> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 mt-5 mb-5' style={{ textAlign: "center" }}>
                                <h3 className='blog-single-full-width-h3'>
                                    Related Blogs
                                </h3>
                            </div>
                            <div className='col-md-12 col-sm-12 col-xs-12 mt-5 pb-5'>
                                <div className='flex_column'>
                                    {/* <div className='col-md-4 col-sm-4 col-xs-12'> */}
                                    {stateParamVal.data && stateParamVal.data.map((val, ind) => {
                                        return (
                                            <>
                                                {
                                                    dataIndex != ind ?
                                                        <>
                                                            {/* // <div className='col-md-12 col-sm-12 col-xs-12 mt-5 pb-5'>
                                                    //     <div className='row'> */}
                                                            <div className='col-md-4 col-sm-4 col-xs-12 p-3' onClick={()=>SecondDataOnClick(ind)}>
                                                                <div className='img-wrapper'>
                                                                    <img src={val.Img} class="img-fluid img_transform cursor_pointer" alt="Responsive image" />
                                                                </div>
                                                                <div >
                                                                    <p style={{ color: "#828282", fontSize: 11, letterSpacing: 2 }}>{val.Admin} <span>|</span> {val.Date}</p>
                                                                    <p style={{ fontSize: 14, letterSpacing: 2 }} className="cursor_pointer">{val.Heading}</p>
                                                                    <p style={{ color: "gray", fontSize: 12 }}>{ValidityState.BodyData}</p>
                                                                    <img src={line} height='20px' width='40px' />
                                                                    {/* <div style={{ height: 2 ,width: 30 , color: "#000000"}}/> */}
                                                                    <p className="cursor_pointer" style={{ fontSize: 10, letterSpacing: 2, marginTop: "1%" }}><CiHeart style={{ fontSize: 13 }} /> <span style={{ marginRight: 15 }}> {val.Likes}</span> <FaRegComment style={{ fontSize: 12 }} /><span> LEAVE A COMMENT</span> </p>
                                                                    {/* <button style={{ display:"inline-block", fontSize: 11, letterSpacing: 2, padding: "6px 14px" }} className="Contione_btn">CONTINUE READING</button> */}
                                                                </div>
                                                                {/* // </div>
                                                            // </div> */}
                                                            </div>
                                                         </>
                                                        : ""
                                                }
                                            </>
                                        )
                                    })
                                    }
                                </div>
                                {/* <div className='img-wrapper'>
                                        <img src={fund} class="img-fluid img_transform cursor_pointer" alt="Responsive image" />
                                    </div>
                                    <div >
                                        <p style={{ color: "#828282", fontSize: 11, letterSpacing: 2 }}>POSTED BY ADMIN <span>|</span> SEPTEMBAR 24,2018</p>
                                        <p style={{ fontSize: 14, letterSpacing: 2 }} className="cursor_pointer">Kouchan Joint venture with PRADEEPIT raised funds of 30 lakhs and upcoming months raises funds of 10 crores</p>
                                        <p style={{ color: "gray", fontSize: 12 }}>Kou-Chan Joint venture with PRADEEPIT raised funds of 30 lakhs and upcoming months raises funds of 10 crores. PradeepIT had a very successful Joint Venture with Kou-Chan for 10 years...</p>
                                        <img src={line} height='20px' width='40px' />
                                        <p className="cursor_pointer" style={{ fontSize: 10, letterSpacing: 2, marginTop: "1%" }}><CiHeart style={{ fontSize: 13 }} /> <span style={{ marginRight: 15 }}> 177 LIKES</span> <FaRegComment style={{ fontSize: 12 }} /><span> LEAVE A COMMENT</span> </p>
                                         </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#f6f6f6", paddingTop: 90 }} />
            <div style={{ backgroundColor: "#252525" }}>
                <div className="container col2-layout">
                    <div style={{ padding: "40px 13px 20px 13px" }} className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12 animated fadeInUp">
                            <p style={{ fontSize: 11, letterSpacing: 2, fontWeight: 600, color: "#828282" }}>
                                © 07/06/2023 S3REMOTICA SERVICES PVT LTD
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewNews;