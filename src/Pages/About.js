import React from 'react';
import '../styles/styles.css'
import ProgressBar from '../Components/ProgressBar.js'

export default function About() {
    return(
        <div className="Main">
          
                <h1><span className="hugeText">So, </span> About Me</h1>


        
                
            <img src={require("../me3.jpg")} className="image"/>
              

              <p className="normalText" >
              I Am A Passionate Graduate in The Field Of Computer Science Informatics. I Am A Huge loT Enthusiast And Hobbyist Driven By The Unshakable Urge To Design And Build Quality Software For Clients, While Satisfying And Completely Meeting Business Requirements. I Am A Hardworking Individual And Always Have A Beginner's Mind. I Am Always Willing To Learn, Teach , Unlearn What I Already Think I Know
  And Relearn Anything In A Different Technique. I Believe There's A Technique To Getting Things Right And Most Times Getting Them Right The First Time. I'm Not A Copy Of All The Textbooks I've Read And Gone Through To Get My Qualification, Yet I Am A Compound Of The Most Critical Concepts From The Textbooks, Knowledge From People Who Are The Industry That Are Close To Me, The Knowledge I Gather Daily In My Interest, And The Skill To Use The Aformentioned In Synergy And Conjunction Such That Concepts May Be Related And Applied To Practical Examples And Situations, And Facts May Be Used To Support Certain Arguments And/Or Design Decisions. I Am A Very Focused, Driven And Practical Individual, I Understand The Basic Theory And Use That As A Basis Of Coming Up With A Creative, Innovative Solution.
              </p>

            <h1 className="paddingHeader"><span className="hugeText">Education</span></h1>

           <ul className="paddingList">
               <li>
               <h2 className="pink-text"> <span className="normalText" >Grade 12 - Matric , </span>Finetown Secondary School  (2012 - 2016)</h2>
            <h2 className="pink-text"> <b>Obtained Distinctions In :</b></h2>
            <ul className="paddingList">
                <li >
                    <p className="normalText" >Physical Sciences</p>
                </li>
                <li >
                <p className="normalText" >Life Sciences</p>
                </li>
                <li >
                <p className="normalText" >Geography</p>
                </li>
            </ul>
               </li>

               <li>
               <h2 className="pink-text">Bsc in <span className="normalText" >Information Technology in Computer Science & Informatics</span>, University Of Johannesburg, Johannesburg  (2017-2020)</h2>
               
               </li>
           </ul>

            <h1 className="paddingHeader"><span className="hugeText">Awards</span></h1>
            <ul className="paddingList">
                <li>
                    <p className="normalText"><span className="pink-text">UJenius Academic Excellence Award</span>, University Of Johannesburg   (2018) </p>
                </li>

                <li>
                    <p className="normalText"><span className="pink-text">Physical Sciences Circuit 1 Top Achiever</span>, JHB South District   (2017) </p>
                </li>
         
            </ul>

            <h1 className="paddingHeader"><span className="hugeText">H</span> obbies and Interests</h1>
           <div>
           <ul className="paddingList">
                <li>
                    <p className="normalText" >I Disassemble Old Electronics For Spare Parts In My Projects :)</p>
                </li>
                <li>
                <p className="normalText" >I Flash And Test Custom Mobile Operating Systems</p>
                </li>

                <li>
                <p className="normalText" >I Am A Call Of Duty Sniper</p>
                </li>

                <li>
                <p className="normalText" >I Meditate Daily</p>
                </li>

                <li>
                <p className="normalText" >I would one day like to be part of a Brain-Computer Interface Project. </p>
                </li>

                
                <li>
                <p className="normalText" >I would one day like to run my own Game Studio . </p>
                </li>
           
            </ul>
           </div>

           <h1 style={{paddingTop : 40}}><span className="hugeText">L</span> anguages</h1>
           <div className="skillGrid">
                    <ProgressBar Value="E" Name="IsiZulu" />
                    <ProgressBar Value="D" Name="English" />
            </div>

          
        </div>
    )
}