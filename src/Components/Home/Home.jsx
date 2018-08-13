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
        <div className="header header-home animated fadeInDownBig delay-6s"><div className="name-left">Joyce</div>Ajagbe</div>
        <div className="sub-header animated fadeInDownBig delay-4s row"><div className="name-left">Software</div> Engineer</div>
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
