import React, { Component } from "react";
import "./Project.css";
import arrow from "../Image/slim-down-64.png";

export default class Header extends Component {
  render() {
    return (
      <div className="left">
        <div className="project-header">
          <div className="header project">Projects</div>
          <div className="scroll">
            {/* <div className="scroll-name">Scroll</div>
            <div className="scroll-img">
              <img src={arrow} alt="scroll"/>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
