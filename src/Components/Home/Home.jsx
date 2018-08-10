import React, { Component } from "react";
import "./Home.css";
import profilePic from "../Image/profile_pic.png"
// import Nav
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="home">
      <div className="home-container">
        <div className="home-content">
        <div className="header header-home">Joyce <span className="space">Ajagbe</span></div>
        <div className="sub-header ">Software Engineer</div>
        </div>

        <div className="profile-pic">
          <img className="pic" src={profilePic} alt="img"/>
        </div>

      </div>
      </section>
    );
  }
}
