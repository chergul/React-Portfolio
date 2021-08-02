// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from './components/MyNavbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
  <Router>
        <div className="App">
      <MyNavbar />
      <Portfolio />
      {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          
      </Switch> */}
      <Footer />
    </div>
  </Router>




  );
}

export default App;
