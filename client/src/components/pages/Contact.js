import React, { useState } from "react";
import SubmitForm from "./SubmitForm.js";
import API from "../../utils/API";
function Contact() {
  const [userArr, setUserArr] = useState([])
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
    email: "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    API.saveUser(user).then(resp => {
      const newUser = user.slice(0);
      newUser.push(resp.data)
      console.log(newUser)
       setUserArr(newUser);
    
    })
 
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value });
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

          <SubmitForm
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            subject={user.subject}
            message={user.message}
            handleInputChange={handleInputChange}
            onClick={onSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
