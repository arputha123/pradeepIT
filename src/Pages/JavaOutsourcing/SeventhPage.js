import React,{useEffect}from 'react'
import "../../Pages/JavaOutsourcing/Seven.css";




function SeventhPage() {

  useEffect(() => {
    const appearOptions = {
      threshold : 0.5
    };
    const faders = document.querySelectorAll('.fade-in'); 
    const appearOnScro1l = new IntersectionObserver(function(entries,appearOnScrool){
      entries.forEach(entry =>{
        if(!entry.isIntersecting){
          return;
        }
        else{
          entry.target.classList.add('appear');
          appearOnScro1l.unobserve(entry.target);
        }
      })
    }, appearOptions)
    faders.forEach(fader =>{
      appearOnScro1l.observe(fader);
    })
  });


  return (
    <div class="Form" style={{width:"100%",height:"auto"}}>
<div class="row "style={{width:"100%",height:"auto",padding:"120px 50px"}} id="background-image" >

<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
<div class="d-flex justify-content-center align-items-center">
<h4 style={{fontSize:16,color:"white",letterSpacing:1 ,textAlign:"center"}}>OUR DEDICATED JAVA APP DEVELOPERS FOLLOW AGILE METHODOLOGY THAT ENSURES SEAMLESS COMMUNICATION AND COMPLETE PROJECT TRANSPARENCY.</h4>
</div>
<div class="d-flex justify-content-center">
<div  class="mt-3 mb-3 "style={{height:2,backgroundColor:"#e6af2a",width:30}}></div>
    </div>
<div  class="d-flex justify-content-center " id="">
<div class="Start-Now fade-in"  id="animated-text" style={{cursor:"pointer",width:"fit-content",padding:"20px 30px",border:"4px solid black",color:"black",fontSize:22,fontWeight:700}}>START NOW</div>
</div>



</div>
<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
<div style={{backgroundColor:"#F6F6F6",width:"100%",height:"auto",padding:"30px 30px"}}>
<p style={{fontSize:20,textAlign:"center",color:"#000000",fontWeight:700,marginBottom:4}}>Reach us for all web design service you need</p>

<div class="row mt-4 mb-4" >
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
  <input class="formControl" type="text" placeholder="YOUR NAME" aria-label=".form-control-lg example" style={{borderRadius:"none",border:"1px solid #ccc",width:"100%",padding:"5px 10px"}}/>
  </div>

</div>

<div class="row mt-4 mb-4">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<input class="formControl" type="text" placeholder="YOUR EMAIL" aria-label=".form-control-lg example" style={{borderRadius:"none",border:"1px solid #ccc",width:"100%",padding:"5px 10px"}}/>
</div>
</div>
<div class="mt-4 mb-4">
<input class="formControl" type="text" placeholder="YOUR PHONE" aria-label=".form-control-lg example" style={{borderRadius:"none",border:"1px solid #ccc",width:"100%",padding:"5px 10px"}}/>
</div>

<div class="mt-4 mb-4">
    <label style={{fontSize:13,color:"#626262",fontWeight:500}}>I'M LOOKING FOR</label>
</div>

<div  class="mt-4 mb-4" style={{display:"flex",flexWrap:"wrap"}}>
<label class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Web Designing
  </label>
</label>
<label class="form-check ms-2 me-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Search Engine Optimization
  </label>
</label>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Digital Marketing
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Corporate Training
  </label>
</div>
<div class="form-check ms-2 me-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Outsourcing
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Video Production
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  E-Commerce Web Design
  </label>
</div>
<div class="form-check ms-2 me-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  CMS Website
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault" style={{fontSize:13,color:"#626262",fontWeight:500}}>
  Payment Gateway Integration
  </label>
</div>

</div>
<div class="mt-4 mb-4">
    <label style={{fontSize:13,color:"#626262",fontWeight:500}}>HOW DID YOU FIND US</label>
</div>
<div class="row mt-4 mb-4">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<select class="" aria-label="Default select example" style={{borderRadius:"none",border:"1px solid #ccc",width:"100%",padding:"5px 10px",color:"#626262",fontSize:13}}>
  <option class="option" selected>Select</option>
  <option class="option" value="1">Friend or Business Referral</option>
  <option class="option" value="2">Google</option>
  <option class="option" value="3">Facebook</option>
  <option class="option" value="3">Press Article</option>
  <option  class="option" value="3">Advertisement</option>
</select> 
</div>
</div>
<div class=" row mt-4 mb-4">
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<input class="formControl" type="text" placeholder="YOUR MESSAGE" aria-label=".form-control-lg example" style={{borderRadius:"none",border:"1px solid #ccc",width:"100%",padding:"5px 10px"}}></input>
</div>
</div>
<div class="mt-4 mb-4" >
   <div id="Submit" style={{cursor:"pointer",border:"1px solid transparent",padding:"10px 22px",width:"fit-content",fontWeight:600,borderRadius:4,backgroundColor:"#5cb85c",color:"#fff",letterSpacing:2}}>SUBMIT</div> 
</div>


</div>
</div>
</div>

    </div>
  )
}

export default SeventhPage