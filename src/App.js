// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import MyNavbar from './components/MyNavbar';

function App() {
  return (
  <Router>
        <div className="App">
      <MyNavbar />
      {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Portfolio} />
          <Route path="/project" component={Contact} />
          
      </Switch> */}
      <Footer />
    </div>
  </Router>




  );
}

export default App;
