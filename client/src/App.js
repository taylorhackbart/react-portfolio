import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/pages/About";
import Portfolio2 from "./components/pages/Portfolio2";
import Contact from "./components/pages/Contact";
import "./app.css"

function App() {
  return (
    <Router>
      <div className="app-body">
        <NavBar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio2} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}
export default App;
