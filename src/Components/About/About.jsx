import React, { Component } from "react";

import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about_me content" id="about">
        <div className="about-background"></div>
        <div className="sub-title">About</div>
        <div className="bio contents">
          <p className="short-bio">
          I am a Biomedical Engineer turned Software Engineer living in New York
          </p>
          <p>
            I recieved my bachelor in Biomedical Engineering with a minor in Bio-Devices and
            Bio-Instrumentation on May 2017. I absolutely loved it because I got to particpate in research on really cool topics
            like Nanotechnology and Drug Delivery. However, after working on the programming for
            my Capstone Project I realized I particularly enjoyed programming, from the headache and fustration to the accomplished feeling when something finally
            works. So after graduation, I made the decision to pursue software developement. So far my journey has been like a roller coaster 
            but love for learning continues to propel me to engage in new platform and experiment with new frameworks.
          </p>
          <p> A huge career aspiration of mine is 
            to improve the quality of life of people, I hope to work for an organization whose values aligns with positively impacting people.
          </p>
        </div>
      </div>
    );
  }
}
