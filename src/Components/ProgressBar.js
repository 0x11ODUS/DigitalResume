import React,{useState,useEffect} from 'react';
import '../styles/styles.css'
import {animated, useSpring}  from 'react-spring'




export default function ProgressBar(props) {
    const [data,setData] = useState(null)
    
    useEffect(() =>{
        console.log("MOUNT PROGRESS BAr")
        switch(props.Value){
            case "A":
                setData(
                    <animated.Div className="Skill A">
                        20%
                    </animated.Div>
                )
                break;
    
            case "B":
                setData(
                    <div className="Skill B">
                        40%
                    </div>
                )
                break;
    
            case "C":
                setData(
                    <div className="Skill C">
                        60%
                    </div>
                )
                break;
                
            case "D":
                setData(
                    <div className="Skill D">
                        80%
                    </div>
                )
                break;
    
            case "E":
                setData(
                    <div className="Skill E">
                        100%
                    </div>
                )
                break;
        }
    },[])
   

    return(
        <div className="ProgressContainer">
            {data}
          <p className="skillText"> {props.Name}</p> 
        </div>
    )
}