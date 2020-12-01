import React, {useState} from "react";
import SubmitForm from "./SubmitForm.js"
import API from "../../utils/API"
function Contact () {
  const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
      email: ""
  })
  const onSubmit = event => {
    event.preventDefault()
    API.saveUser(user).then(resp => {
      console.log(resp)
    })
  }

  const handleInputChange = event => {
    event.preventDefault();
    console.log(event.target.value)
    setUser({...user, [event.target.name]: event.target.value})

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

    // this.setState({
    //   firstName: "",
    //   lastName: "",
    //   subject: "",
    //   message: "",
    //   email: ""
    // })
    // window.location.reload();
  }

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
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          subject={user.subject}
          message={user.message}
          // handleFormSubmit={this.handleFormSubmit}
          handleInputChange={handleInputChange}
          onSubmit = {onSubmit}
          />
        </div>
      </div>
    </div>
  );
}


export default Contact;
