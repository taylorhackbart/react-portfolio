import React from "react";
import Card from "../Card/Card.js";
import Wrapper from "../Wrapper/Wrapper.js";
import data from "../projects.js";
import resume from "./images/resumeimg.png"
import resumepdf from "./images/resume.pdf"

function Portfolio2() {
  const portfolioData = data;

  return (
    <>
    <Wrapper>
      {portfolioData.map((x) => (
        <Card key={x.title} {...x} />
      ))}
      <div className="main-port-body">
         <h4 className="card-title"> Resume</h4>
          <div className="card" style={{ width: "30rem" }}>
            <img src={resume} className="card-img-top" alt="project1"></img>
            <div className="card-body">
              <p className="card-text">
                To load my resume in full screen, please click below.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={resumepdf} target="_blank" rel="noreferrer">
                  Load Resume
                </a>
              </li>
            </ul>
          </div>
          </div>
    </Wrapper>
    </>
  );
}
export default Portfolio2;
