import React, {useEffect, useState} from 'react';
import ProgressBar from '../Components/ProgressBar';

import '../styles/Skills.css'
import '../styles/styles.css'


export default function Skills() {
    var str = ".py";
 
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
         <h1 id="intro2"><span id="introred">{"~$: sudo"}</span>{" ./skills"}<span id="intro"></span></h1>
              <span id="cursor">|</span>
            </div>
                
                <div className="skillGrid">
                    <ProgressBar Value="D" Name="Java" />
                    <ProgressBar Value="D" Name="Python" />
                    <ProgressBar Value="B" Name="C++" />
                    <ProgressBar Value="C" Name="Assembly" />
                    <ProgressBar Value="D" Name="MVC API" />
                    <ProgressBar Value="D" Name="C#" />
                    <ProgressBar Value="D" Name="React" />
                    <ProgressBar Value="D" Name="React Native" />
                    <ProgressBar Value="D" Name="ASP.NET" />
                    <ProgressBar Value="D" Name="Xamarin.Android" />
                    <ProgressBar Value="E" Name="IoT" />
                    <ProgressBar Value="D" Name="SQL" />
                    <ProgressBar Value="D" Name="Electronics" />
                    <ProgressBar Value="C" Name="Microsoft Azure" />
                    <ProgressBar Value="B" Name="Unity Game Development" />
                    <ProgressBar Value="C" Name="Penetration Testing" />
                </div>
               
   

            
            
        </div>
    )
}