import React, {Component} from "react";
import SubmitForm from "./SubmitForm.js"
import API from "../../utils/API"
class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
    email: ""
  };
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]:value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Message Sent!")
    API.savePost ({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
   
    })
    .then(function(response) {
      
      return response.json()
    }).then(function(body) {
      console.log(body);
    });

    // if (!this.state.firstName || !this.state.lastName){
    //   alert("Must fill in first and last name fields")
    // } else if (!this.state.subject){
    //   alert ("Please enter a subject")
    // } else if (!this.state.message) {
    //   alert ("Please enter a message you'd like to send to taylor")
    // } else if (!this.state.email){
    //   alert("Please enter your email")
    // } else {
    //   alert("Message sent!")
    // }

    this.setState({
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
      email: ""
    })
    window.location.reload();
  }
  render(){
  return (
    <div className="container-fluid-portfolio">
      <div className="container">
        <div className="row">
          <section className="contact">
            <h2 className="contact" >Contact Info</h2>
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
          
          <h3> Send Taylor a Message:   </h3>

          <SubmitForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          subject={this.state.subject}
          message={this.state.message}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}
}

export default Contact;
