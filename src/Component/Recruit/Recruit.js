import React,{useEffect} from "react";
import "./Recruit.css"


function Recruit() {
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
        <div className="iiiii animated animatedFadeInUp fadeInUp">
                    
        <div className="carres   fade-in" >
<div style={{paddingLeft:50}}>
<h1 className="career1" >CAREERS</h1>

</div>
<div className="homm"  style={{color:"#575757",fontSize:8}}>
    HOME
   
</div>
<div className="vl" style={{color:"#575757"}}>

</div>

<div className="care" style={{color:"#575757",fontSize:8}}>
    CAREERS
</div>
                
               

        </div>
        <div id="bg-image">
    
           <div className="texxxt "  >
               <div style={{paddingLeft:50,paddingRight:50,paddingTop:50}}>
               <h1 class="white-text sm-small-text"style={{lineHeight:1,textAlign:"start",fontSize:"34px",fontFamily:"sans-serif",fontWeight:700}}>WE LOVE WHAT WE DO,<br/>
IT'S A WAY OF LIFE.</h1>
        <p class="text-large black-text margin-five" style={{fontSize:15 ,textAlign:"start"}}>Real challenge is scary, but we are not afraid.</p>
        <p class=" white-text" align="justify" style={{fontSize:13}} >If you are ready to make the difference, to face challenges and want to pursue a career in field of Java, J2EE, Hybris and Web Design &amp; Development, then right path is waiting for you.</p>
        <p className="we"  align="justify" style={{fontSize:13}}>We believe in giving right candidates to the suitable positions for an employer and our human resource to unleash their hidden potential which platform that each one of candidate deserves and needs to grow and acquire and every employee is an integral part of our organization and we take care for their development from corporate IT training to knowledge sharing.</p>
</div>
</div>
           </div>
        



       </div>

    )
}
export default Recruit