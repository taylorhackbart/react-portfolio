import React from "react"

function SubmitForm(props) {
  return (
  <form>
  <div className="form-row container">
    <div className="form-group col-md-6">
      <label htmlFor="inputName">First Name</label>
      <input type="text" 
      className="form-control" 
      id="inputName"
      name="firstName"
      value={props.value}
      onChange={props.handleInputChange}
      ></input>
    </div>

    <div className="form-group col-md-6">
      <label htmlFor="inputName">Last Name</label>
      <input type="text" 
      className="form-control" 
      id="inputName"
      name="lastName"
      value={props.value}
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
    name="firstName"
    value={props.value}
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
    value= {props.value}
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
      value={props.value}
      onChange={props.handleInputChange}
      ></input>
    </div>
  </div>
  <div className="form-row col-md-12">
  <button type="submit" onClick={props.handleFormSubmit} className="btn btn-primary" >Send Message</button>
</div>
</form>

  )
}
export default SubmitForm;