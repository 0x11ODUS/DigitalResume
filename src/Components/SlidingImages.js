import React, { useState } from 'react';
import '../styles/styles.css'
import {useTransition, animated} from 'react-spring'

export default function SlidingImages(props){

    const [images,setImages] = useState([{id : 1, url : "me2.jpg"}]);
    const [index, setIndex] = useState(0)
    const springProps = useTransition(images, null, {
        from: {  opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })



    return(
        springProps.map(({item,key, props}) =>
            <animated.div style={props}>
               item ?  <img src={require("../me3.jpg")} className="image"/> : <img src={require("../me2.jpg")} className="image"/>
            </animated.div>
        )
    )
}