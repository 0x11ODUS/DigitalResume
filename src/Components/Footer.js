import React, {useEffect, useState} from 'react'
import '../styles/Footer.css'

var Footer = (props)=>{
    return(
        <footer className="footerBody">
          <div id="footerText">
          Maintained By    <a href="https://www.linkedin.com/in/nkosana-khoza-063119143/" target="_blank" id="maintainer"> {">>>"}: 11ScoRpius11 :{"<<<"}</a>
          </div>
        </footer>
    )
}
export default Footer