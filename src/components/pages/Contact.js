import React from "react";

function Contact() {
  return (
    <div className="container-fluid-portfolio">
      <div className="container">
        <div className="row">
          <section className="contact">
            <h2>Contact Info</h2>
            <ul>
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
                  href="https://www.linkedin.com/in/taylor-hackbart-97129b8a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Taylor Hackbart
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
