import { React, useEffect, useState } from 'react';
import line from '../Assets/line2.png'
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import TopBarCommon from "./Topbarcommon";
import '../Style/newsview.css'


const ViewNews = () => {
    const location = useLocation()
    const stateParamVal = location.state
    const [dataIndex, detDataIndex] = useState(stateParamVal.id);


    console.log("stateParamVal", stateParamVal);
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
                                                               </div>
                                                        </>

                                                        : ""
                                                }
                                            </>
                                        )
                                    })}
                                    
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
                                        <div className='previous-link'>
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
                                <input className='sidebar-search' type='text' name='search' placeholder='Enter your keywords...' />
                            </div>
                            <div>
                                <h5 className='widget-title font-alt'>RECENT PROJECTS</h5>
                                <div className='thin-separator-line'></div>
                            </div>
                            <div>
                                <ul className='widget-posts'>
                                    <li>
                                        <div className='widget-posts-details'>
                                            <a href='NewsView'>Corporate Video</a>
                                        </div>
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
                                    </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>February 2016</a>
                                    </li>
                                </ul>
                                <h5 className='widget-title font-alt'>CATEGORIES</h5>
                                <div className='thin-separator-line'></div>
                                <ul>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Digital Marketing</a>
                                        </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Ecommerce</a>
                                        </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Magento</a>
                                        </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>News</a>
                                        </li>
                                    <li className='cat-item widget-category-list light-gray-text cat-item-113' style={{ marginLeft: "-30px" }}>
                                        <a className='font_size no_padding' style={{ color: "#000" }} href='NewsView'>Web Designing</a>
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
                                    {stateParamVal.data && stateParamVal.data.map((val, ind) => {
                                        return (
                                            <>
                                                {
                                                    dataIndex != ind ?
                                                        <>
                                                            <div className='col-md-4 col-sm-4 col-xs-12 p-3' onClick={()=>SecondDataOnClick(ind)}>
                                                                <div className='img-wrapper'>
                                                                    <img src={val.Img} class="img-fluid img_transform cursor_pointer" alt="Responsive image" />
                                                                </div>
                                                                <div >
                                                                    <p style={{ color: "#828282", fontSize: 11, letterSpacing: 2 }}>{val.Admin} <span>|</span> {val.Date}</p>
                                                                    <p style={{ fontSize: 14, letterSpacing: 2 }} className="cursor_pointer">{val.Heading}</p>
                                                                    <p style={{ color: "gray", fontSize: 12 }}>{ValidityState.BodyData}</p>
                                                                    <img src={line} height='20px' width='40px' />
                                                                    <p className="cursor_pointer" style={{ fontSize: 10, letterSpacing: 2, marginTop: "1%" }}><CiHeart style={{ fontSize: 13 }} /> <span style={{ marginRight: 15 }}> {val.Likes}</span> <FaRegComment style={{ fontSize: 12 }} /><span> LEAVE A COMMENT</span> </p>
                                                                    </div>
                                                            </div>
                                                         </>
                                                        : ""
                                                }
                                            </>
                                        )
                                    })
                                    }
                                </div>
                                
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