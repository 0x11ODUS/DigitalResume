import React,{useState,useEffect} from 'react';
import { Switch } from 'react-router-dom';
import '../styles/ProgressBar.css'
import '../styles/styles.css'


export default function ProgressBar(props) {

    const [data,setData] = useState(null)


    useEffect(() =>{
        console.log("MOUNT PROGRESS BAr")
        switch(props.Value){
            case "A":
                setData(
                    <div className="Skill A" >
              
                    </div>
                )
                break;
    
            case "B":
                setData(
                    <div className="Skill B">
                        
                    </div>
                )
                break;
    
            case "C":
                setData(
                    <div className="Skill C">
                       
                    </div>
                )
                break;
                
            case "D":
                setData(
                    <div className="Skill D">
                       
                    </div>
                )
                break;
    
            case "E":
                setData(
                    <div className="Skill E">
                        
                    </div>
                )
                break;
        }
    },[])

    return(
        <div>
            <div className="ProgressContainer">
            {data}
           
        </div>
        <p className="skillText"> {props.Name}</p>
        </div>
    )
}