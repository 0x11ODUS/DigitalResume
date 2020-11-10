import React from 'react';
import './styles/styles.css'
import Header from './Components/Header.js'
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AboutMe">
        <Header />
          <About />
        </Route>
        <Route path="/Skillset">
        <Header />
            <Skills />
        </Route>
        <Route path="/Projects">
        <Header />
            <Projects />
        </Route>
        <Route path="/Contact">
        <Header />
           <Contact />
        </Route>
      </Switch>
    </div>
  </Router>

  );
}

export default App;
