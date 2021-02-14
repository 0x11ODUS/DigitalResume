import React from 'react';
import ProgressBar from '../Components/ProgressBar';
import '../styles/styles.css'
import {animated, useSpring}  from 'react-spring'


export default function Skills() {

    const springProps = useSpring({top :0, from:{ top:-1500}, config : {duration : 1500}})
    return(
        <animated.div style={springProps} className="Main">
         
                <h1><span className="hugeText">Skills</span> and Abilities  </h1>
                <p className="normalText">Below is a subset of my skillset and technologies i can use , accumulated over my career</p>
            
                <div className="skillGrid">
                    <ProgressBar Value="D" Name="Java" />
                    <ProgressBar Value="E" Name="Python" />
                    <ProgressBar Value="D" Name="C++" />
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
                    <ProgressBar Value="C" Name="Unity Game Development" />
                    <ProgressBar Value="C" Name="Penetration Testing" />
                </div>
               
   

            
            
        </animated.div>
    )
}