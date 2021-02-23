import React, {useEffect, useState} from 'react';
import '../styles/styles.css'
import '../styles/Contact.css'

export default function Contact() {
     var str = "./find_target.py";
 
    const [kount,setKount] = useState(0)
 
    
    

    useEffect(()=>{
        if(kount < str.length){
            setTimeout(()=>{
                document.getElementById("intro").innerHTML += str.charAt(kount)
                setKount(kount + 1);
            }, 50)
        }else if(kount >= str.length){
            setTimeout(()=>{
                document.getElementById('intro').innerHTML = "";
                setKount(0)
            }, 3500)
        }
        
    },[kount])
    return(
        <div className="Main">
             <div  className="introText">
             <h1 id="intro2"><span id="introred">{"~$:"}</span>{" sudo "}<span id="intro"></span></h1>
              <span id="cursor">|</span>
            </div>

            <div className="contactIntro">
                <h1 id="vector">Target contact vectors :</h1>
           

           <div className="contact-grid">

                <a href="mailto:nkosanakhoza2@gmail.com?subject=Job%20Offer%20Portfolio" className="nav-item">
                <i class="fa fa-envelope contact-icon" aria-hidden="true"></i>

                     EMAIL
                </a>

                <a href="https://www.linkedin.com/in/nkosana-khoza-063119143/" className="nav-item">
                <i class="fa fa-linkedin contact-icon" aria-hidden="true"></i>

                     LINKEDIN
                </a>

                <a href="https://github.com/ScoRpius11" className="nav-item">
                <i class="fa fa-github contact-icon" aria-hidden="true"></i>

                     GITHUB
                </a>

                <a href="https://www.instagram.com/11sco_r_pio11/" className="nav-item">
                <i class="fa fa-instagram contact-icon" aria-hidden="true"></i>

                     INSTAGRAM
                </a>

                <a href="https://twitter.com/11ScoRpius11/" className="nav-item">
                <i class="fa fa-twitter contact-icon" aria-hidden="true"></i>

                     TWITTER
                </a>

                <a href="https://wa.me/27676647514" className="nav-item">
                <i class="fa fa-whatsapp contact-icon" aria-hidden="true"></i>

                     WHATSAPP
                </a>
               
           </div>

            </div>
        </div>
    )
}