import React, { Component } from "react";
import Footer from "../Footer/Footer";

import axios from "axios";

import "./Contact.css";
export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: {
        name: name,
        email: email,
        messsage: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        console.log('getting here')
        alert("Message Sent.");
        this.setState({
          name: "",
          email: "",
          message: ""
        });
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    })
    .catch(err => console.log(err));
  };

  render() {
    const { handleInput, handleSubmit } = this;
    return (
      <div className="contact-container" id="contact">
        <div className="contact">
          <div className="contact-left left">
            <Footer />
            <div className="sub-title center">Contact</div>
          </div>
          <div className="right form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                onInput={handleInput}
              />

              <input
                type="text"
                name="email"
                placeholder="Email*"
                required
                onInput={handleInput}
              />

              <textarea
                name="message"
                placeholder="Message*"
                required
                cols="200"
                rows="4"
                onInput={handleInput}
              />

              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}
