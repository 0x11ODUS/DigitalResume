import React, {useEffect, useState} from 'react';
import '../styles/styles.css'


export default function Projects() {
    var str = "~$: npm -i khoza-projects";
 
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
              <p id="intro"></p>
              <span id="cursor">|</span>
            </div>
            <div className="introText">
                <h1><span className="hugeText">Projects, </span>Here </h1>
           

            </div>
        </div>
    )
}