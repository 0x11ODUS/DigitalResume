import React from 'react';
import '../styles/styles.css'


export default function Contact() {
    return(
        <div className="Main">
            <div className="introText">
                <h1><span className="hugeText">Contact, </span><span className="pink-text-med">M</span>e through one of these platforms</h1>
           

           <div className="contact-grid">

                <a href="mailto:nkosanakhoza2@gmail.com?subject=Job%20Offer%20Portfolio" className="nav-item">
                <i class="fa fa-envelope contact-icon" aria-hidden="true"></i>

                     EMAIL
                </a>

                <a href="https://www.linkedin.com/in/nkosana-khoza-063119143/" className="nav-item">
                <i class="fa fa-linkedin contact-icon" aria-hidden="true"></i>

                     LINKEDIN
                </a>

                <a href="#" className="nav-item">
                <i class="fa fa-github contact-icon" aria-hidden="true"></i>

                     GITHUB
                </a>

                <a href="https://www.instagram.com/11sco_r_pio11/" className="nav-item">
                <i class="fa fa-instagram contact-icon" aria-hidden="true"></i>

                     INSTAGRAM
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