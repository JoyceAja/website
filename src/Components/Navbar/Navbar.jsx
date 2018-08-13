import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-body">
                <nav className="nav">
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about">About</a>
                    </li>
                    <li>
                      <a href="#projects">Projects</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
      </div>
    );
  }
}
