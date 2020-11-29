import React from "react";
import pila from "./images/pila.png";
import password from "./images/password.png";
import hotel from "./images/hotelmotel.png";
import resume from "./images/resumeimg.png";
import scheduler from "./images/scheduler.png";
import burger from "./images/burger.png";
import resumepdf from "./images/resume.pdf";

function Portfolio() {
  return (
    <div className="container-fluid"> 
    <div className="container">
      <main className="row">
        <div className="col-md-12">
          <article className="block">
            <h1 className="block-header">Portfolio</h1>
            <hr />
            <div className="row" id="portfolio-border">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <a
                  href="https://matt-boggs.github.io/Lets-Hit-the-Slopes/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid port-image"
                    src={pila}
                    alt="Project1"
                  ></img>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <p className="paragraph">
                  To the left is my first project I generated with a team. We
                  created a website that will show the weather conditions of a
                  mountain in Italy, along with a currency converter from Euros
                  to your home currency. To access the live website, click on
                  the photo of the map. For access to our repository, click 
                  <a
                    href="https://github.com/Matt-Boggs/Lets-Hit-the-Slopes"
                    target="_blank"
                    rel="noreferrer"
                  > here
                  </a>
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <a
                  href="https://hotelmotel.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid port-image"
                    style={{ marginTop: "60px" }}
                    src={hotel}
                    alt="Krabby Patty"
                  ></img>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <p className="paragraph">
                  Hotel Motel is a guest management system designed for small
                  occupancy hotels and motels. The application is simple to use,
                  and allows the user to see all of the guest information and
                  hotel occupancy on one screen. The user can input information
                  about a guest when they want to save a reservation (guest
                  name, number of guests, number of rooms, check-in date,
                  check-out date, and guest phone number). This information is
                  sent to the database and stored, a new guest is created and
                  added to the guest check-in column. Once a guest is ready to
                  check in the user can click the check in button and the guest
                  is moved to the guest check-out column. The daily-occupancy
                  updates the hotel data so the user can easily see how many
                  rooms are still available for reservation. When a guest is
                  checked-out, the the guest is removed from the database and
                  the room occupancy is updated accordingly. To access the live
                  website that is deployed via Heroku, click on the HotelMotel
                  logo. For access to my repository, click 
                  <a
                    href="https://github.com/taylorhackbart/hotel_motel"
                    target="_blank"
                    rel="noreferrer"
                  > here
                  </a>
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <a
                  href="https://floating-waters-58437.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid port-image"
                    src={burger}
                    alt="Krabby Patty"
                  ></img>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <p className="paragraph" 
                >
                  For this assignment, we created a website that will allow the
                  user to add/order a burger that they would like to eat. Once
                  the burger has been added, they can click the "devour" button,
                  and it will be shown on the right side of the screen as
                  devoured. To access the live website that is deployed via
                  Heroku, click on the Krabby Patty photo. For access to my
                  repository, click 
                  <a
                    href="https://github.com/taylorhackbart/burger-handlebars"
                    target="_blank"
                    rel="noreferrer"
                  > here
                  </a>
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <a
                  href="https://taylorhackbart.github.io/DayPlannerForYou/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid port-image"
                    style={{ marginTop: "20px" }}
                    src={scheduler}
                    alt="Password generator"
                  ></img>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <p className="paragraph" 
                >
                  This Work Day Planner will allow you to write in plans for the
                  day by the hour, and save them so you can access them
                  throughout the day by clicking "save". This website will
                  highlight the current time in red, have the past times in
                  grey, and the future tasks highlighted in green. To access the
                  live website, click the "Work Day Scheduler". For access to my
                  repository, click 
                  <a
                    href="https://github.com/taylorhackbart/DayPlannerForYou"
                    target="_blank"
                    rel="noreferrer"
                  > here
                  </a>
                </p>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <a
                  href="https://taylorhackbart.github.io/RandomPasswordGen/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid port-image"
                    src={password}
                    alt="Work day scheduler"
                  ></img>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <p className="paragraph" 
                >
                  Here, we have a random password generator. This will prompt
                  you to choose a length for your password, approve various
                  parameters, and finally generate a random password. To access
                  the live website, click "Generate Password". For access to my
                  repository, click 
                  <a
                    href="https://github.com/taylorhackbart/RandomPasswordGen"
                    target="_blank"
                    rel="noreferrer"
                  > here
                  </a>
                </p>
              </div>
            </div>
            <hr />
            <div className="row" style={{marginBottom: "80px"}}>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <a href={resumepdf} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid port-image"
                    src={resume}
                    alt="resume"
                  ></img>
                </a>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <p
                  className="paragraph" 
                >
                  To load my resume in full screen, please click the image on
                  the left.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
    </div>
  );
}

export default Portfolio;
