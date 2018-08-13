import React, { Component } from "react";
import "./Home.css";
import profilePic from "../Image/profile_pic.png";
import Navdot from '../Navdot/Dots.jsx';
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
        <div className="header header-home animated fadeInDownBig delay-6s">Joyce <span className="space">Ajagbe</span></div>
        <div className="sub-header animated fadeInDownBig delay-4s">Software Engineer</div>
        </div>
        {/* <div className="home-box"> */}
        <div className="profile-pic animated fadeInDownBig delay-3s">
          <img className="pic " src={profilePic} alt="img"/>
        </div>
        {/* <Navdot />
        </div> */}
      </div>
      </section>
    );
  }
}
