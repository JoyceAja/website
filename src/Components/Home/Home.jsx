import React, { Component } from "react";
import "./Home.css";
import profilePic from "../Image/profile_pic.png";
// import Nav
export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="home" id="home">
      <div className="home-container">
        <div className="home-content">
        <div className="header header-home"><div className="name-left">Joyce</div>Ajagbe</div>
        <div className="sub-header row"><div className="name-left">Software</div> Engineer</div>
        </div>
        {/* <div className="home-box"> */}
        <div className="profile-pic">
          <img className="pic " src={profilePic} alt="img"/>
        </div>
      </div>
      </section>
    );
  }
}
