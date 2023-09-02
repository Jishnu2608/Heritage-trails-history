import React from 'react';
import './Hero.css';

const Hero =() => {
    return (
        <section id="hero-section" className="hero-wrapper">
           <div className="paddings innerWidth flexCenter hero-container">
               {/* left side */}
               <div className="flexColStart hero-left">
                   <div className="hero-title">
                       <div className="orange-circle"/>
                       <h1>
                           History
                       </h1>
                   </div>

                   <div className="flexColStart hero-des">
                       <span className="secondaryText">"History is the tapestry woven by the deeds and aspirations of countless 
                       generations, a mirror reflecting the struggles,triumphs, and evolution of humanity throughout epochs."</span>
                       <span className="secondaryText"><i>~ Mahatma Gandhi</i></span>
                   </div>
  
               </div>
                {/* right side */}
               <div className="flexCenter hero-right">
                   <div className="image-container">
                       <img src="./content-history-hero.img.jpg" alt=" "/>
                   </div>
               </div>
            
            </div> 

        </section>
    )
}

export default Hero