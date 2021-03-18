import React from "react";
import headshot from "./images/taylor-photo.JPG";
import "./style.css";
import resume from "./images/resume.pdf"

function About() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <h1 className="aboutme">About Me</h1>
          <div className="col-md-6">
            <img
              src={headshot}
              alt="headshot"
              className="responsive about"
            ></img>
          </div>
          <div className="col-md-6">
            <p>
              Taylor is a full stack developer looking to fill a Full Stack Web
              Developer position. She is a highly organized coder that thrives
              in a teamwork environment- hungry to learn while simultaneously
              contributing her strengths to the team. She is an innovative
              problem-solver who is passionate about developing apps with a
              clean and maintainable interface
            </p>
            <p>
              Taylor primarily works with MERN (MongoDB, Express, ReactJS and
              Node.js) for full stack applications but also works with MySQL,
              JavaScript, jQuery, HTML, and CSS for front-end development, as
              well as Handlebars, REST API/AJAX, Inquirer, NoSQL, SQL and
              Mongoose for back-end development.
            </p>
            <p>
              Freelance work has kept her busy since graduating from The
              University of Denver's Full Stack Web Developer program in
              December 2020. The full stack development program gives the
              students the tools needed to become a front and back end web
              developer. The skills and knowledge gained from this course
              include:
              <br />
              <br />
              <li>Computer science applied through JavaScript</li>
              <li>Server-side development</li>
              <li>Databases and deployment</li>
              <li>Test-driven development</li>
              <li>Object relational mapping</li>
              <li>Object-oriented programming</li>
            </p>
            <br />
            <p>
              Check out Taylor's resume <a href={resume} target="_blank" rel="noreferrer"> here </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
