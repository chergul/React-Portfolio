// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from './components/MyNavbar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
  <Router>
        <div className="App">
      <MyNavbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />

      {/* <Switch>     
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch> */}

      <Footer />
    </div>
  </Router>


  );
}

export default App;
