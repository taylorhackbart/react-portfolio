import React from "react";
import Collapsible from "react-collapsible";
import "./card.css";

function Card(props) {
  return (
    <>
    <div className="main-port-body">
    <div className="card" style={{ width: "30rem" }}>
      <h4 className="card-title"> {props.title}</h4>
      <img src={props.image} className="card-img-top" alt="projectimg"></img>
      <div className="card-body">
        <Collapsible trigger="READ MORE" triggerWhenOpen="Read Less">
          <p className="card-text">{props.description}</p>
        </Collapsible>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href={props.repoLink} target="_blank" rel="noreferrer">
            Repository Link
          </a>
        </li>
        <li className="list-group-item">
          <a href={props.liveLink} target="_blank" rel="noreferrer">
            Live Link
          </a>
        </li>
      </ul>
    </div>
    </div>
    </>
  );
}

export default Card;
