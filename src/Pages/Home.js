import React from 'react';
import Button from '../Components/Button';
import '../styles/styles.css'
import {useHistory} from 'react-router-dom'
import {animated, useSpring} from 'react-spring'


export default function Home(props) {

    let history = useHistory()
    const springProps = useSpring({top :0, from:{ top:-1000}, config : {duration : 1500}})

    return(
        <animated.div style={springProps} className="Main">
            <div className="introText">
                <h1><span className="hugeText">Welcome</span>to my <span className="pink-text-med">Digital Porfolio</span> . <br /> <br /> <br /> </h1>
                <h1><span className="pink-text">My</span> name is  <span className="hugeText">Nkosana Khoza</span> , I am a <span className="pink-text-med">Software Engineer</span> .<span className="pink-text">.</span>.<span className="pink-text">.</span></h1>
                <p className="normalText">I am a <span className="pink-text-med">F</span><span className="pink-text">ull</span> <span className="pink-text-med">S</span><span className="pink-text">tack Software Developer</span> . My main focus is  <span className="pink-text-med">Quality and Maintainable Solutions</span> , intensely <span className="pink-text-med">Minimalistic UI</span> , and producing products that <span className="pink-text-med">S</span>atisfy<span className="pink-text-med"> Customer requirements</span> and Aid Them in <span className="pink-text-med"> achieving </span> their <span className="pink-text-med" >Business Goals</span>. . .</p>
            </div>

            <div style={{paddingTop : 50}}>
               {/* <h3 className="normalText">
                    Learn more about Me <a href="/AboutMe" style={{textDecoration:"underline",color : "rgb(158,7,81)",fontSize: 38}} > Here</a>
    </h3> */}

                <div >
                <Button  Text="Click To Learn More" onClick={() =>{ 
                    console.log("I Am Clicked")
                    history.push("/AboutMe")
                }}/>
                </div>
            </div>
        </animated.div>
    )
}