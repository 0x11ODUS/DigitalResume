import React from 'react';
import '../styles/styles.css'
import {useSpring, animated} from 'react-spring'
import ContactItem from '../Components/ContactItem';


export default function Contact() {

     const springProps = useSpring({top :0, from:{ top:-800}, config : {duration : 1500, mass: 45, friction : 0.1}})
     

    return(
        <animated.div style={springProps}  className="Main">
          <div className="introText">
                <h1><span className="hugeText">Contact, </span><span className="pink-text-med">M</span>e through one of these platforms</h1>
          </div>

           <div className="contact-grid">

               <ContactItem Link="mailto:nkosanakhoza2@gmail.com?subject=Job%20Offer%20Portfolio" Text="EMAIL" Icon="fa-envelope" />
           
               <ContactItem Link="https://www.linkedin.com/in/nkosana-khoza-063119143/" Text="LINKEDIN" Icon="fa-linkedin" />
               
               <ContactItem Link="https://github.com/ScoRpius11" Text="GITHUB" Icon="fa-github" />

               <ContactItem Link="https://www.instagram.com/11sco_r_pio11/" Text="INSTAGRAM" Icon="fa-instagram" />

               <ContactItem Link="https://wa.me/27676647514" Text="WHATSAPP" Icon="fa-whatsapp" />
               
           </div>

            </animated.div>
    )
}