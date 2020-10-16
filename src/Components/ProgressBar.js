import React,{useState,useEffect} from 'react';
import { Switch } from 'react-router-dom';
import '../styles/styles.css'


export default function ProgressBar(props) {

    const [data,setData] = useState(null)


    useEffect(() =>{
        console.log("MOUNT PROGRESS BAr")
        switch(props.Value){
            case "A":
                setData(
                    <div className="Skill A">
                        20%
                    </div>
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
    },[props.Value])
   

    return(
        <div className="ProgressContainer">
            {data}
          <p className="skillText"> {props.Name}</p> 
        </div>
    )
}