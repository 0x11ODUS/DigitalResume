import React from 'react';
import '../styles/styles.css'
import {useSpring, animated} from 'react-spring'


export default function ContactItem(props){

    const spring = useSpring({bottom : 0, from : {bottom : -500}})

    return(
        <animated.div style={spring}>
               <a href={props.Link} className="nav-item centerElement">
                <i class={"fa " + props.Icon + " contact-icon"} aria-hidden="true"></i>

                     {props.Text}
                </a>
        </animated.div>
    )
}