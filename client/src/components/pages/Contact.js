import React, { useState } from "react";
// import SubmitForm from "./SubmitForm.js";
import API from "../../utils/API";

function Contact() {
  const [user, setUser] = useState({
    firstName: "",
    lastName:"",
    email:"",
    message: "",
    subject: ""
  });
  
  console.log(user)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    API.saveUser(user).then((resp) => {
      console.log(resp.data)
    });
  };
  return (
    <div className="container-fluid-portfolio">
      <div className="container">
        <div className="row">
          <section className="contact">
            <h2 className="contact">Contact Info</h2>
            <ul className="contact">
              <li>
                <strong>Email:</strong> taylor.hackbart@gmail.com
              </li>
              <li>
                <strong>Email:</strong> taylor.hackbart@du.edu
              </li>
              <li>
                <strong>Github:</strong>{" "}
                <a
                  href="https://github.com/taylorhackbart"
                  target="_blank"
                  rel="noreferrer"
                >
                  taylorhackbart{" "}
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/taylorhackbart"
                  target="_blank"
                  rel="noreferrer"
                >
                  Taylor Hackbart
                </a>
              </li>
            </ul>
          </section>

          <h3> Send Taylor a Message: </h3>

          <form onSubmit={handleSubmit}>
            <div className="form-row container">
              <div className="form-group col-md-6">
                <label>First Name</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={user.firstName}
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className="form-group col-md-6">
                <label>Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={user.lastName}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="inputAddress">Email</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail"
                placeholder="jane.doe@email.com"
                name="email"
                value={user.email}
                onChange={handleInputChange}
              ></input>
            </div>

            <div className="form-group col-md-12">
              <label htmlFor="inputSubject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="inputSubject"
                placeholder="Job Opportunity"
                name="subject"
                value={user.subject}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12 message">
                <label htmlFor="inputMessage">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMessage"
                  name="message"
                  value={user.message}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className="form-row col-md-12">
              <button
                type="submit"
                // onClick={onSubmit}
                className="btn btn-primary"
              >
                Send Message
              </button>
              <p style={{ display: "none" }}> Message sent!</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
