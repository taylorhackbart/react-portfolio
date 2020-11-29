import React from "react";
import headshot from "./images/taylor-photo.JPG";
import "./style.css";


function About() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <h1 className = "aboutme" >About Me</h1>
          <div className = "col-md-6">
          <img src={headshot} alt="headshot" className="responsive about"></img>
          </div>
          <div className = "col-md-6">
          <p>
            I am a full stack developer looking to fill a Full Stack Web Developer
            position. I am a highly organized coder that
            thrives in a teamwork environment- hungry to learn while
            simultaneously contributing my strengths to the team. I am an innovative
            problem-solver who is passionate about developing apps with a clean
            and maintainable interface
          </p>
          <p>
            Before coding sparked my interest, I was pursuing a career in the
            Marine Biology field. I graduated from the Univeristy of Oregon in
            2016 with a BAS in Marine Biology, and after obtaining my degree, I
            moved way down south to Quintana-Roo, MX. I lived on a research base
            for six months in the middle of the jungle with no electricity or
            running water. 
          </p>
          <p>
            The research on our base consisted of looking at the health of the
            corals at our twenty-one monitoring sites. We tracked all diseases,
            predation and bleaching. We also looked at the juvenile and adult
            fish that lived on the reefs, and compared this data to previous
            years to view any changes in the reefs ecology. Unfortunately, our
            data showed a rapid decline in the health of the reefs and record
            high water temperatures that would aggressively bleach and kill
            corals quickly.
          </p>

          <p>
            As heartbreaking as it was to see the corals dimish in front of my
            eyes, and as many bug bites, missed showers, and grueling hot days I
            had, I wouldn't trade my experience for anything.
          </p>
         </div>
        </div>
      </div>
    </div>
  );
}

export default About;
