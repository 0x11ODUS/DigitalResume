import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import '../styles/styles.css'
import {animated, useSpring} from 'react-spring'

export default function Projects(props) {
    const springProps = useSpring({top :0, from:{ top:-1000}, config : {duration : 1500}})
    const zuesInfo = "Zues Is A Web Application That Consumes A Weather API And Gives The Ability To Recieve The Current Weather Of A Given Search Location."
    return(
        <animated.div style={springProps} className="Main">
            <div className="introText">
                <h1><span className="hugeText">My Projects, </span>Here </h1>
           
            <ProjectItem Name="- Z U E S -" Information={zuesInfo} Link="https://zues11.herokuapp.com" Picture="zues.png"/>

    
          

            </div>
        </animated.div>
    )
}