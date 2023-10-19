import React,{useEffect}from 'react'
import "../../Pages/SapCxOutsourcing/Seven.css";




function SeventhPage() {

  // useEffect(() => {
  //   const animatedText = document.querySelector('.animated-text');
  //   animatedText.classList.add('animate'); 
  // }, []);
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
<div class="row "style={{width:"100%",height:"auto",padding:"120px 50px",backgroundColor:"#636363"}}  >

<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
<div class="d-flex justify-content-center align-items-center">
<h4 style={{fontSize:16,color:"white",letterSpacing:1 ,textAlign:"center"}}>OUR DEDICATED JAVA APP DEVELOPERS FOLLOW AGILE METHODOLOGY THAT ENSURES SEAMLESS COMMUNICATION AND COMPLETE PROJECT TRANSPARENCY.</h4>
</div>
<div class="d-flex justify-content-center">
<div  class="mt-3 mb-3 "style={{height:2,backgroundColor:"#e6af2a",width:30}}></div>
    </div>
<div  class="d-flex justify-content-center " id="">
<div class="Start-Now fade-in"  id="" style={{cursor:"pointer",width:"fit-content",padding:"20px 30px",border:"4px solid black",color:"black",fontSize:22,fontWeight:700}}>START NOW</div>
</div>



</div>




</div>

    </div>
  )
}

export default SeventhPage