import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from './components/MyNavbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import React from "react";
import {sendForum} from 'emailjs-com';
// import AOS from "aos";
// import "../node_modules/aos/dist/aos";

function App() {
  return (
  <Router>
        <div className="App">
      <MyNavbar />

      <Switch>     
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        <Redirect to="/"/>
      </Switch>

      <Footer />
    </div>
  </Router>
  );
}

export default App;
