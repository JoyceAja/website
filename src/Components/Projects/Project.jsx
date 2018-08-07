import React, { Component } from "react";
import "./Project.css";
import Gameon from "../Image/gameon.png";
import Duro from "../Image/Duro.png";
import Youth from "../Image/youth-con.png";
import { Carousel } from "react-bootstrap";

export default class Projects extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      direction: null
    };
  }
  handleSelect = (selectedIndex, e) => {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  };

  render() {
    const { index, direction } = this.state;

    return (
      <div>
      <Carousel className="projects">
        <Carousel.Item>
          <div className="project-container">
          <img className = 'project-img center-block'alt="500x500" src={Duro} />
            <h3 className="project-name">First slide label</h3>
            <p className="project-description">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="project-container">
          <img className = 'project-img center-block'alt="500x500" src={Gameon} />
            <h3 className="project-name">Second slide label</h3>
            <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="project-container">
          <img className = 'project-img center-block'alt="500x500" src={Youth} />
            <h3 className="project-name">Third slide label</h3>
            <p className="project-description">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </div>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }

  // return (
  // <div className="projects">
  //{/* <div className="project-title header">Projects</div> */}
  // <div className="project-slide">
  //{
  /* <img className="project-pic" src={Gameon} alt="gameon" />
          <img className="project-pic" src={Duro} alt="Duro" />
          <img className="project-pic" src={Youth} alt="Youth" /> */
  //}

  //{
  /* <section id="slider">
            <div className="project-box">
            <input type="radio" name="slider" id="s1" />
            </div>
            <div className="project-box">
            <input type="radio" name="slider" id="s2" defaultChecked/>
            </div>
            <div className="project-box">
            <input type="radio" name="slider" id="s3" />
            </div>
            <div className="project-box">
            <label htmlFor="s1" id="slide1" />
            </div>
            <div className="project-box">
            <label htmlFor="s2" id="slide2" />
            </div>
            <div className="project-box">
            <label htmlFor="s3" id="slide3" />
            </div>
          </section> */
  //}
  //   </div>
  // </div>
  // );
}
