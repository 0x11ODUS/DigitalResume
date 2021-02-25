import React, {useEffect, useState} from 'react';
import '../styles/styles.css'
import ProgressBar from '../Components/ProgressBar.js'

export default function About() {
    var str = ".md";
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
          <h1 id="intro2"><span id="introred">{"~$:"}</span>{" cat README"}<span id="intro"></span></h1>
              <span id="cursor">|</span>
            </div>

            <h1 className="paddingHeader"><span className="hugeText">BIO</span></h1>
            <p id="bio" className="normalText" ><span className="pink-text">Nkosana Khoza</span> is a Humble, self-motivated, resilient and dedicated young man. His ability to work in synergy with others is impeccable. Having strong leadership qualities and possessing a high adaptive efficacy, he is sure to be a substantial contribution to any team ,company and work enviroment. Interested in Tech in general, yet immensely fascinated and passionate about Cybersecurity , Software Engineering and awesome and exciting IoT & Electronics Projects.</p>

            <h1 id="education" className="paddingHeader"><span className="hugeText">Education</span></h1>

           <ul className="paddingList">
               <li>
               <h2 className="pink-text"> <span className="normalText" >Grade 12 - Matric , </span>Finetown Secondary School  (2012 - 2016)</h2>
            <h2 className="pink-text"> <b>Obtained Distinctions In :</b></h2>
            <ul className="paddingList">
                <li >
                    <p className="normalText" >Physical Sciences</p>
                </li>
                <li >
                <p className="normalText" >Life Sciences</p>
                </li>
                <li >
                <p className="normalText" >Geography</p>
                </li>
            </ul>
               </li>

               <li>
               <h2 className="pink-text">Bsc in <span className="normalText" >Information Technology in Computer Science & Informatics</span>, University Of Johannesburg, Johannesburg  (2017-2020)</h2>
               
               </li>
           </ul>

            <h1 className="paddingHeader"><span className="hugeText">Awards</span></h1>
            <ul className="paddingList">
                <li>
                    <p className="normalText"><span className="pink-text">UJenius Academic Excellence Award</span>, University Of Johannesburg   (2018) </p>
                </li>

                <li>
                    <p className="normalText"><span className="pink-text">Physical Sciences Circuit 1 Top Achiever</span>, JHB South District   (2017) </p>
                </li>
         
            </ul>

            <h1 className="paddingHeader"><span className="hugeText">H</span> obbies and Interests</h1>
           <div>
           <ul className="paddingList">
                <li>
                    <p className="normalText" >Indulges in CTFs on Platforms Like ctf.learn </p>
                </li>
                <li>
                <p className="normalText" >Solves Coding Challenges On HackerRank</p>
                </li>

                <li>
                <p className="normalText" >Always creating a stunning web application or robust system, mostly learning how to break and secure them ;) </p>
                </li>

                <li>
                <p className="normalText" >Enjoys Watching DEFCON Security Conferences</p>
                </li>

                
           
            </ul>
           </div>

           <h1 id="lang" className="paddingHeader"><span className="hugeText">L</span> anguages</h1>
           <div id="kills" className="skillGrid">
                    <ProgressBar Value="E" Name="IsiZulu" />
                    <ProgressBar Value="D" Name="English" />
            </div>

          
        </div>
    )
}