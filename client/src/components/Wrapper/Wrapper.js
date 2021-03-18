import React from "react";
import "./style.css";

function Wrapper(props) {

  return (
  <>
  <h1 className="portfolio-title">PROJECTS</h1>
  <div className="wrapper">{props.children}</div>
  </>);
}

export default Wrapper;
