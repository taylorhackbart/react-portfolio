import React, {useState} from "react"
import { useForm } from '@formspree/react';
import API from "../../utils/API"

function SubmitForm(props) {
  // const [state, handleSubmit] = useForm('signupForm');
  // if (state.succeeded) {
  //   return <div>Your message to Taylor has been sent!</div>;
  // }

  return (
  <form>
  <div className="form-row container">
    <div className="form-group col-md-6">
      <label htmlFor="inputName">First Name</label>
      <input type="text" 
      className="form-control" 
      id="inputName"
      name="firstName"
      value={props.firstName}
      onChange={props.handleInputChange}
      ></input>
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputName">Last Name</label>
      <input type="text" 
      className="form-control" 
      id="inputName"
      name="lastName"
      value={props.lastName}
      onChange={props.handleInputChange}
      ></input>
    </div> 
  </div>
  
  <div className="form-group col-md-12">
    <label htmlFor="inputAddress">Email</label>
    <input type="text" 
    className="form-control" 
    id="inputEmail" 
    placeholder="jane.doe@email.com"
    name="email"
    value={props.email}
    onChange={props.handleInputChange}
    ></input>
  </div>

  <div className="form-group col-md-12">
    <label htmlFor="inputSubject">Subject</label>
    <input type="text" 
    className="form-control" 
    id="inputSubject" 
    placeholder="Job Opportunity"
    name="subject"
    value= {props.subject}
    onChange={props.handleInputChange}
    ></input>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12 message">
      <label htmlFor="inputMessage">Message</label>
      <input type="text" 
      className="form-control" 
      id="inputMessage"
      name="message"
      value={props.message}
      onChange={props.handleInputChange}
      ></input>
    </div>
  </div>
  <div className="form-row col-md-12">
  <button type="submit" onClick={props.onSubmit} className="btn btn-primary" >Send Message</button>
  <p style={{display:"none"}}> Message sent!</p>
</div>
</form>

  )
}
export default SubmitForm;