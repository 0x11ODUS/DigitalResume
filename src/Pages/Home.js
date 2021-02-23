import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import '../styles/Home.css'
import '../styles/styles.css'
import {logo} from '../logo.svg'


export default function Home() {
    var str = "<Welcome />";
    var str2 = "[*] Target      : Nkosana Khoza";
    const [kount,setKount] = useState(0)
    const [index,setIndex] = useState(0)
    
    

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
        
    },[kount, index])


    return(
        <div className="Main">
            
            
            <div  className="logoContainer">
                <img className="logo" src={require("../new.svg")}  />
            </div>

            <div id="welcome"  className="introText">
              <h1 id="intro2">{"~$: "}<span id="intro"></span></h1>
              <span id="cursor">|</span>
            </div>

            <div className="content">
                <h1 id="introStatement">My name is <span className="pink-text">Nkosana Khoza</span>, I am a cybersecurity enthusiast and an aspiring Ethical Penetration Tester. I just recently completed my Degree in Computer Science & Informatics and I am looking for a stepping stone into the <span className="pink-text">Cybersecurity/Software Engineering</span> industry. </h1>
                <a id="meLink" className="button" href="/AboutMe" > AFFIRMATIVE </a>
            </div>
            

        </div>
    )


}