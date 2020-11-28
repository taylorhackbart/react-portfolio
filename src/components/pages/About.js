import React from "react";
import headshot from "./images/taylor-photo.JPG"
import "./style.css"

function About() {
  return (
    <div className = "container">
      <div className= "row">
      <h1>About Page</h1>
      <img src={headshot} alt="headshot" className="responsive about"></img>
      <p>
        Hello, and welcome to my page! I am a twenty-four years old, grew up in San Diego, CA and recently moved to Morrison, CO. My boyfriend and I live in a wonderful apartment with our dog, Osa, that overlooks Bear Creek. I originally moved to Colorado to partake in a coding program through Denver University, but given the pandemic, our courses are online anyways! As much as I miss San Diego, Colorado has become a place that I am proud to call home.  
      </p>
      <p>
        Before coding sparked my interest, I was pursuing a career in the Marine Biology field. I graduated from the Univeristy of Oregon in 2016 with a BAS in Marine Biology, and after obtaining my degree, I moved way down south to Quintana-Roo, MX. I lived on a research base for six months in the middle of the jungle with no electricity or running water. While we did have drinking water delivered bi-weekly, our main water supply was dependent on our well, which was dependent on rain. As water got low, we were allowed a half or quarter bucket a day to do any showering, washing, etc. As you can imagine, a warm shower and laundromat (or lavanderia) in the closet town, Tulum (about an hour North), was a true luxury on weekends we spent off base. It was a very grounding experience to say the least.
      </p>
      <p>
        The research on our base consisted of looking at the health of the corals at our twenty-one monitoring sites. We tracked all diseases, predation and bleaching. We also looked at the juvenile and adult fish that lived on the reefs, and compared this data to previous years to view any changes in the reefs ecology. Unfortunately, our data showed a rapid decline in the health of the reefs and record high water temperatures that would aggressively bleach and kill corals quickly.
      </p>
  
      <p>
        As heartbreaking as it was to see the corals dimish in front of my eyes, and as many bug bites, missed showers, and grueling hot days I had, I wouldn't trade my experience for anything.
      </p>
      <p>
        If you would like to learn more about the work I did in Mexico, please take a look at my <a href="assets/images/resume.pdf" target="_blank" rel="noreferrer">resume</a>.
      </p>
    </div>
  </div>
  );
}

export default About;
