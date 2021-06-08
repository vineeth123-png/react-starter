import "../styles.css";
import Navbar from "./Navbar";
import Users from "./Users";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Swiggy Clone</h1>
        <h2>The Start</h2>

        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <h1> 404 Not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
