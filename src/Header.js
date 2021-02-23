import React from 'react';
import logo from './logo.svg';
import './styles/styles.css'
import {
    Link,
    useLocation
  } from "react-router-dom";

export default function Header(props){

    const location = useLocation()

    return(
        <div className="Header">
        <ul className="listStyle">
              <li>
                <Link to="/" style={{textDecoration:"none"}}>
                       {location.pathname == "/" ? (
                         <a href="#" className="nav-item active">
                         <i class="fa fa-home icon" aria-hidden="true"  ></i>
                         <span className="link-text"> HOME</span>
                         </a>
                       ) : (
                        <a href="#" className="nav-item">
                        <i class="fa fa-home icon" aria-hidden="true"  ></i>
                        <span className="link-text"> HOME</span>
                        </a>
                       )}
                </Link>
                
              </li>
    
              <li>
                <Link to="/AboutMe"  style={{textDecoration:"none"}}>
              { location.pathname == "/AboutMe" ? (  <a href="#"className="nav-item active" >
                <i class="fa fa-user icon" aria-hidden="true" ></i>
                <span className="link-text"> ABOUT</span>
                </a>) : (
                      <a href="#"className="nav-item" >
                      <i class="fa fa-user icon" aria-hidden="true" ></i>
                      <span className="link-text"> ABOUT</span>
                      </a>
                )}
                </Link>
              </li>
    
              <li>
               {location.pathname == "/Skillset" ? (
                    <a href="/Skillset"className="nav-item active" >
                    <i class="fa fa-line-chart icon" aria-hidden="true" ></i>
                    <span className="link-text"> SKILLSET</span>
                    </a>
               ) : (
                    <a href="/Skillset"className="nav-item" >
                    <i class="fa fa-line-chart icon" aria-hidden="true" ></i>
                    <span className="link-text"> SKILLSET</span>
                    </a>
               )}
              </li>
    
              {/*<li>
               {location.pathname == "/Projects" ? (
                    <a href="/Projects"className="nav-item active" >
                    <i class="fa fa-file icon" aria-hidden="true" ></i>
                    <span className="link-text"> PROJECTS</span>
                    </a>
               ) : (
                <a href="/Projects"className="nav-item" >
                <i class="fa fa-file icon" aria-hidden="true" ></i>
                <span className="link-text"> PROJECTS</span>
                </a>
               )}
               </li> */}
    
              <li>
                {location.pathname == "/Contact" ? (
                      <a href="/Contact"className="nav-item active" >
                      <i class="fa fa-phone icon" aria-hidden="true" ></i>
                      <span className="link-text"> CONTACT</span>
                      </a>
                ) : (
                      <a href="/Contact"className="nav-item" >
                      <i class="fa fa-phone icon" aria-hidden="true" ></i>
                      <span className="link-text"> CONTACT</span>
                      </a>
                )}
              </li>
            </ul>
          

        </div>
    )
}