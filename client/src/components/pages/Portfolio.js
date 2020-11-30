import React from "react";
import pila from "./images/pila.png";
import password from "./images/password.png";
import hotel from "./images/hotelmotel.png";
import resume from "./images/resumeimg.png";
import scheduler from "./images/scheduler.png";
import burger from "./images/burger.png";
import resumepdf from "./images/resume.pdf";
import Collapsible from "react-collapsible";

function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="block-header">Portfolio</h1>

        <hr />
        <div className="row">
          <div className="col-md-4">
            <h4> Let's Hit the Slopes</h4>
            <div className="card" style={{ width: "30rem" }}>
              <img src={pila} className="card-img-top" alt="project1"></img>
              <div className="card-body">
                <Collapsible trigger="Read More">
                  <p className="card-text">
                    To the left is my first project I generated with a team. We
                    created a website that will show the weather conditions of a
                    mountain in Italy, along with a currency converter from
                    Euros to your home currency.
                  </p>
                </Collapsible>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a
                    href="https://github.com/Matt-Boggs/Lets-Hit-the-Slopes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository Link
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://matt-boggs.github.io/Lets-Hit-the-Slopes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <h4> Hotel Motel</h4>
            <div className="card" style={{ width: "30rem" }}>
              <img src={hotel} className="card-img-top" alt="project1"></img>
              <div className="card-body">
                <Collapsible trigger="Read More">
                  <p className="card-text">
                    Hotel Motel is a guest management system designed for small
                    occupancy hotels and motels. The application is simple to
                    use, and allows the user to see all of the guest information
                    and hotel occupancy on one screen. The user can input
                    information about a guest when they want to save a
                    reservation (guest name, number of guests, number of rooms,
                    check-in date, check-out date, and guest phone number). This
                    information is sent to the database and stored, a new guest
                    is created and added to the guest check-in column. Once a
                    guest is ready to check in the user can click the check in
                    button and the guest is moved to the guest check-out column.
                    The daily-occupancy updates the hotel data so the user can
                    easily see how many rooms are still available for
                    reservation. When a guest is checked-out, the the guest is
                    removed from the database and the room occupancy is updated
                    accordingly.
                  </p>
                </Collapsible>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a
                    href="https://github.com/taylorhackbart/hotel_motel"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository Link
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://hotelmotel.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <h4> Eat-da-Burger</h4>
            <div className="card" style={{ width: "30rem" }}>
              <img src={burger} className="card-img-top" alt="project1"></img>
              <div className="card-body">
                <Collapsible trigger="Read More">
                  <p className="card-text">
                    For this assignment, we created a website that will allow
                    the user to add/order a burger that they would like to eat.
                    Once the burger has been added, they can click the "devour"
                    button, and it will be shown on the right side of the screen
                    as devoured.
                  </p>
                </Collapsible>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a
                    href="https://github.com/taylorhackbart/burger-handlebars"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repository Link
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://floating-waters-58437.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-md-4">
            <h4>Day Planner</h4>
            <div className="card" style={{ width: "30rem" }}>
              <img
                src={scheduler}
                className="card-img-top"
                alt="project1"
              ></img>
              <div className="card-body">
                <Collapsible trigger="Read More">
                  <p className="card-text">
                    This Work Day Planner will allow you to write in plans for
                    the day by the hour, and save them so you can access them
                    throughout the day by clicking "save". This website will
                    highlight the current time in red, have the past times in
                    grey, and the future tasks highlighted in green. To access
                    the live website, click the "Work Day Scheduler".
                  </p>
                </Collapsible>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a
                    href="https://github.com/taylorhackbart/DayPlannerForYou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Repository Link
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://taylorhackbart.github.io/DayPlannerForYou/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <h4> Password Generator</h4>
            <div className="card" style={{ width: "30rem" }}>
              <img src={password} className="card-img-top" alt="project1"></img>
              <div className="card-body">
                <Collapsible trigger="Read More">
                  <p className="card-text">
                    Here, we have a random password generator. This will prompt
                    you to choose a length for your password, approve various
                    parameters, and finally generate a random password.
                  </p>
                </Collapsible>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a
                    href="https://github.com/taylorhackbart/RandomPasswordGen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Repository Link
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://taylorhackbart.github.io/RandomPasswordGen/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Link
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <h4> Resume</h4>
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
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
