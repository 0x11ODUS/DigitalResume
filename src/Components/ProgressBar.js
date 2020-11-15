import React,{useState,useEffect} from 'react';
import '../styles/styles.css'
import {animated, useSpring}  from 'react-spring'

export default function ProgressBar(props) {
    const [xwidth,setWidth] = useState(0)
    const [barValue, setBarValue] = useState(0)
    const springProps = useSpring({
        width : xwidth,number : barValue, from : {width : 0, number : 0, }})



    const [data,setData] = useState(null)

    
    useEffect(() =>{
        console.log("MOUNT PROGRESS BAr")
        switch(props.Value){
            case "A":
                setData(
                    <animated.div style={springProps} className="Skill A">
                        {springProps.number}
                    </animated.div>
                )
                setWidth( 400 * 0.2)
                setBarValue(100 * 0.2)
                break;
    
            case "B":
                setData(
                    <animated.div style={springProps} className="Skill B">
                       {springProps.number}
                    </animated.div>
                )
                setWidth( 400 * 0.4)
                setBarValue(100 * 0.4)
                break;
    
            case "C":
                setData(
                    <animated.div style={springProps} className="Skill C">
                        {springProps.number}
                    </animated.div>
                )
                setWidth( 400 * 0.6)
                setBarValue(100 * 0.6)
                break;
                
            case "D":
                setData(
                    <animated.div style={springProps} className="Skill D">
                       {springProps.number}
                    </animated.div>
                )
                setWidth( 400 * 0.8)
                setBarValue(100 * 0.8)
                break;
    
            case "E":
                setData(
                    <animated.div style={springProps} className="Skill E">
                       {springProps.number}
                    </animated.div>
                )
                setWidth( 400 )
                setBarValue(100)
                break;
        }
    },[props.Value, springProps])
   

    return(
        <div className="ProgressContainer">
            {data}
          <p className="skillText"> {props.Name}</p> 
        </div>
    )
}