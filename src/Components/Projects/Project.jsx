import React, { Component } from "react";
import "./Project.css";
import Gameon from "../Image/gameon.png";
import Duro from "../Image/Duro.png";
import Youth from "../Image/youth-con.png";
import arrow from "../Image/slim-down.png";

import ProjectHeader from "./Project_Header";

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      direction: null,
      image1: false,
      image2: false,
      image3: false
    };
  }
  handleSelect = (selectedIndex, e) => {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };
  handleClickProject1 = () => {
    this.setState({
      image1: !this.state.image1
    });
  };
  handleClickProject2 = () => {
    this.setState({
      image2: !this.state.image2
    });
  };
  handleClickProject3 = () => {
    this.setState({
      image3: !this.state.image3
    });
  };

  render() {
    const { index, direction, image1, image2, image3 } = this.state;

    return (
      <section className="projects" id="projects">
        <ProjectHeader />
        <div className="project-right right">
          <div
            className="project-container project1 op"
            onClick={this.handleClickProject1}
          >
            <div className={image1 ? "back show" : "none"} />
            <div className={image1 ? "show box" : "none"}>
              <div className="project-name">GameOn</div>
              <div className="project-description">
                Compete with friends using this pick-up game app with gamified
                features. Built using JavaScript, ReactJS, CSS3, NodeJS,
                PostgreSQL.
              </div>
              <a href="https://github.com/JoyceAja/GameOn">
                <div className="project-link">Link</div>
              </a>
            </div>
          </div>
          <div
            className="project-container project2"
            onClick={this.handleClickProject2}
          >
            <div className={image2 ? "back show" : "none"} />
            <div className={image2 ? "show box" : "none"}>
              <div className="project-name">
                <div className="name-left">Duro</div> Sonde
              </div>
              <div className="project-description">
                A data visualization of water properties collected on the Sonde
                product of the Company Duro UAS. Built using JavaScript,
                ReactJS, D3, CSS3, NodeJS, PostgreSQL.
              </div>
              <a href="https://github.com/JoyceAja/Duro-Sonde">
                <div className="project-link">Link</div>
              </a>
            </div>
          </div>
          <div
            className="project-container project3"
            onClick={this.handleClickProject3}
          >
            <div className={image3 ? "back show" : "none"} />
            <div className={image3 ? "show box" : "none"}>
              <div className="project-name">
                <div className="name-left">Youth</div> Connection
              </div>
              <div className="project-description">
                A web application that connects New York City youth with job and
                internship opportunities. Built using NYC Open Data, JavaScript,
                ReactJS, CSS3.
              </div>
              <a href="https://github.com/JoyceAja/youth-connection">
                <div className="project-link">Link</div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
