import React from 'react';
import logo from './logo.svg';
import './styles/styles.css'
import Header from './Header.js'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
 
   
    <Router>
    <div >
   
    
      <Switch>
        <Route exact path="/">
          
          
          <Home />
       

          <Footer />
       
          
        </Route>
        <Route path="/AboutMe">
          <NavBar />
          <About />
          
        </Route>
        <Route path="/Skillset">
        <NavBar />
            <Skills />
        </Route>
        <Route path="/Projects">
        <NavBar />
            <Projects />
        </Route>
        <Route path="/Contact">
        <NavBar />
        <Contact />
        <Footer />
        </Route>
      </Switch>
      
    </div>
    
      
    
   
  </Router>

  );
}

export default App;
