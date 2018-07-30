import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";

import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
                <nav className="nav">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Projects</a>
                    </li>
                    <li>
                      <a href="#">Skills</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
      </div>
    );
  }
}
