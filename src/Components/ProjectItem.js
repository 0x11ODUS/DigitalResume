import React,{useState,useEffect} from 'react';
import '../styles/styles.css'
import {animated, useSpring}  from 'react-spring'


export default function ProjectItem(props){



    return(
        <div className="ProjectItemMain">

                

                <a href={props.Link}   target="_blank">
                    <img className="ProjectSnapshot" src={require("../" + props.Picture)}>

                    </img>
                </a>

                <div className="ProjectInfoContainer">
                    <h1 className="ProjectName pink-text"> {props.Name}</h1>
                    <p className="ProjectInformation normalText"> {props.Information}</p>
                </div>
           
        </div>
    )
}