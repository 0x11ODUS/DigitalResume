import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import '../styles/NavBar.css'

var NavBar = (props)=>{
    return(
        <nav className="navBody">
            <img className="logonav" src={require("../new.svg")}  />
            <ul id="nav-list">
                <li className="listItem">
                    <a href="/" className="link">HOME</a>
                </li>

                <li className="listItem">
                    <a href="/AboutMe" className="link">BIO</a>
                </li>

                <li className="listItem">
                    <a href="/Skillset" className="link">SKILLS</a>
                </li>

                {/* <li className="listItem">
                    <a href="/Projects" className="link">PROJECTS</a>
                </li> */}

                <li className="listItem">
                    <a href="/Contact" className="link">CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar