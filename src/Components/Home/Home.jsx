import React, { Component } from "react";
import "./Home.css";
import profilePic from "../Image/profile_pic.png"

export default class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="home">
        <div className="home-content">
        <div className="header header-home">Joyce Ajagbe</div>
        <div className="sub-header ">Full-Stack Developer</div>
        </div>

        <div className="profile-pic">
          <img className="pic" src={profilePic} alt="img"/>
        </div>

      </div>
    );
  }
}
