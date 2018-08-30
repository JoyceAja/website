import React, { Component } from "react";
import "./Project.css";
import arrow from "../Image/slim-down.png";

export default class Header extends Component {
  render() {
    return (
      <div className="left">
        <div className="project-header">
          <div className="header project">Projects</div>
          <div>
            <div>Scroll</div>
            <div className="scroll-img">
              <img src={arrow} alt="scroll"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
