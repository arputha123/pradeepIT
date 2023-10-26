import React, { useEffect, useState } from 'react'
import "../../Pages/VideoProduction/Seven.css";
import { FaPlus, FaMinus } from 'react-icons/fa';




function SeventhPage() {

  


  const [tab, setTab] = useState(true)
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const [section, setSection] = useState(false);



  const handleTab = () => {
    setTab(true)
    setSection(false)
  }

  const handleSection = () => {
    setTab(false)
    setSection(true)
  }

  const handleFirst = () => {
    setFirst(!first)
  }

  const handleSecond = () => {
    setSecond(!second)

  }

  const handleThird = () => {
    setThird(!third)
  }

  return (
    <div class="Form" style={{ width: "100%", height: "auto",backgroundColor:"" }}>
      <div class="row " style={{ width: "100%", height: "auto", padding: "120px 50px" }} id="background-image" >

        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12" style={{ paddingTop: 100 }}>
          <div class="d-flex justify-content-center align-items-center">
            <h1 style={{ fontSize: 36, color: "white", letterSpacing: 1, textAlign: "center" }}>WHAT YOUR STORY TELLS?</h1>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <p style={{ fontSize: 14, fontWeight: 700, letterSpacing: "inherit", textAlign: "center", color: "white" }}>WITHIN YOUR BRAND, PRODUCT OR SERVICE LIVES A STORY.
              ONE THAT THE WORLD, AND ESPECIALLY YOUR CUSTOMERS, NEED TO HEAR.</p>
          </div>




        </div>
        <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
          <div style={{ backgroundColor: "#F6F6F6", width: "100%", height: "auto", padding: "30px 30px" }}>
            <p style={{ fontSize: 20, textAlign: "center", color: "#000000", fontWeight: 700, marginBottom: 4 }}>Reach Us for Exciting Corporate Events</p>

            <div class="row mt-5 mb-4" >
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <input class="formControl" type="text" placeholder="YOUR NAME" aria-label=".form-control-lg example" style={{ borderRadius: "none", border: "1px solid #ccc", width: "100%", padding: "5px 10px" }} />
              </div>

            </div>

            <div class="row mt-4 mb-4">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <input class="formControl" type="text" placeholder="YOUR EMAIL" aria-label=".form-control-lg example" style={{ borderRadius: "none", border: "1px solid #ccc", width: "100%", padding: "5px 10px" }} />
              </div>
            </div>
            <div class="mt-4 mb-4">
              <input class="formControl" type="text" placeholder="YOUR PHONE" aria-label=".form-control-lg example" style={{ borderRadius: "none", border: "1px solid #ccc", width: "100%", padding: "5px 10px" }} />
            </div>
            <div class="mt-4 mb-4">
              <label style={{ fontSize: 13, color: "#626262",fontWeight:500 }}>HOW DID YOU FIND US</label>
            </div>
            <div class="row mt-4 mb-4">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <select class="" aria-label="Default select example" style={{ borderRadius: "none", border: "1px solid #ccc", width: "100%", padding: "5px 10px", color: "#626262", fontSize: 13 }}>
                  <option class="option" selected>Select</option>
                  <option class="option" value="1">Friend or Business Referral</option>
                  <option class="option" value="2">Google</option>
                  <option class="option" value="3">Facebook</option>
                  <option class="option" value="3">Press Article</option>
                  <option class="option" value="3">Advertisement</option>
                </select>
              </div>
            </div>
            <div class="mt-4 mb-4">
              <label style={{ fontSize: 13, color: "#626262",fontWeight:500  }}>I'M LOOKING FOR</label>
            </div>

            <div class="mt-4 mb-4" style={{ display: "flex", flexWrap: "wrap" }}>
              <label class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: 13, color: "#626262",fontWeight:500  }}>
                  Branding
                </label>
              </label>
              <label class="form-check ms-2 me-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: 13, color: "#626262",fontWeight:500  }}>
                  Explainer Video
                </label>
              </label>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: 13, color: "#626262",fontWeight:500  }}>
                  Corporate Video
                </label>
              </div>
              <div class="form-check ms-2">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault" style={{ fontSize: 13, color: "#626262",fontWeight:500  }}>
                  Whiteboard Video
                </label>
              </div>



            </div>


            <div class=" row mt-4 mb-4">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <input class="formControl" type="text" placeholder="YOUR MESSAGE" aria-label=".form-control-lg example" style={{ borderRadius: "none", border: "1px solid #ccc", width: "100%", padding: "5px 10px" }}></input>
              </div>
            </div>
            <div class="mt-4 mb-4" >
              <div id="Submit" style={{cursor:"pointer", border: "1px solid transparent", padding: "10px 22px", width: "fit-content", fontWeight: 600, borderRadius: 4, backgroundColor: "#5cb85c", color: "#fff", letterSpacing: 2 }}>SUBMIT</div>
            </div>


          </div>
        </div>
      </div>


      <div class="" style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center", fontSize: 24, fontWeight: 700, paddingBottom: 90 }}>FREQUENTLY ASKED QUESTIONS ABOUT OUR EXPLAINER VIDEO SERVICE</h2>
        <div style={{ display: "flex", height: "auto" }}>
          <div>
            <div onClick={handleTab} >
              <p style={{ marginBottom: 0,fontSize:"14px", width: "18vh", height: "10vh", padding: "14px 20px", backgroundColor: tab ? "#f8f8f8" : "#DEDEDE", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>Pricing</p>
            </div>
            <div style={{ margin: 0, padding: 0 }} onClick={handleSection}>
              <p style={{ width: "18vh",fontSize:"14px",  height: "10vh", padding: "14px 20px", backgroundColor: section ? "#f8f8f8" : "#DEDEDE", borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>Section2</p>
            </div>
          </div>
          <div style={{ width: "100%", height: "auto", backgroundColor: "#f8f8f8", padding: "14px 20px",borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopRightRadius:5 }}>
            {tab && <>

              <div class="d-flex align-items-center" onClick={handleFirst} style={{marginTop:0}}>
                <div>{first ? <FaMinus style={{ color: "#BABABA",height:15 }} /> : <FaPlus style={{height:15, color: "#BABABA" }} />}</div>
                <h4 class="ms-2" style={{ fontSize: 16, color: "#000000", margin: 0,fontWeight:400 }} > What is the price of explainer video...?</h4>
              </div>

              {first && <>
                <div style={{ paddingLeft: 20, marginTop: 20, marginBottom: 20 }}>
                  <p style={{ fontSize: "13px", color: "#626262" }}>The cost for our videos depends on the complexity, type and duration of the video. To give you a rough idea, these are the average prices:</p>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for whiteboard –</li>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for a 2D animated explainer video –</li>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for a 3D animated explainer video –</li>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for a live action video –</li>
                  <p style={{ fontSize: "13px", color: "#626262" }}>To get a more detailed pricing, send mail / call to us</p>
                </div>
              </>

              }

              <div class="d-flex align-items-center" onClick={handleSecond} style={{marginTop:10}}>
                <div>{second ? <FaMinus style={{ color: "#BABABA",height:15 }} /> : <FaPlus style={{ color: "#BABABA",height:15 }} />}</div>
                <h4 class="ms-2" style={{ fontSize: 16, color: "#000000", margin: 0,fontWeight:400 }} > What is the price of explainer video...?</h4>
              </div>

              {second && <>
                <div style={{ paddingLeft: 20, marginTop: 20, marginBottom: 20 }}>
                  <p style={{ fontSize: "13px", color: "#626262" }}>The cost for our videos depends on the complexity, type and duration of the video. To give you a rough idea, these are the average prices:</p>

                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for whiteboard –</li>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for a 2D animated explainer video –</li>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for a 3D animated explainer video –</li>
                  <li class="mb-1" style={{ fontSize: "13px", color: "#626262", listStyleType: "square", paddingLeft: 40 }} >The cost for a live action video –</li>

                  <p style={{ fontSize: "13px", color: "#626262" }}>To get a more detailed pricing, send mail / call to us</p>



                </div>
              </>

              }

              <div class="d-flex align-items-center" onClick={handleThird} style={{marginTop:10}}>
                <div>{third? <FaMinus style={{ color: "#BABABA",height:15 }} /> : <FaPlus style={{ color: "#BABABA",height:15 }} />}</div>
                <h4 class="ms-2" style={{ fontSize: 16, color: "#000000", margin: 0 ,fontWeight:400}} >is the pricing is for per second basis...?</h4>
              </div>


              {third && <>
                <div style={{ paddingLeft: 20, marginTop: 20, marginBottom: 20 }}>
                  <p style={{ fontSize: "13px", color: "#626262" }}>Yes, it is on a per second basis. We suggest you keep the duration as short as possible for an explainer video. An ideal duration would be 60 to 90 seconds unless a longer duration is necessary.</p>
                                 </div>
              </>

              }


            </>}
          </div>
        </div>
      </div>

    </div>
  )
}

export default SeventhPage