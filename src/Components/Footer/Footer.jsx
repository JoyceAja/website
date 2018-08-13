import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://twitter.com/_JoyceA_">
          <i className="fab fa-twitter fa-2x" style={{ color: "#C67D8A" }} />
        </a>
        <a href="https://www.linkedin.com/in/joyce-ajagbe-43794a84/">
          <i
            className="fab fa-linkedin-in fa-2x"
            style={{ color: "#C67D8A" }}
          />
        </a>
        <a href="https://github.com/JoyceAja">
          <i className="fab fa-github fa-2x" style={{ color: "#C67D8A" }} />
        </a>
        <a href="mailto:ajagbe.joyce@gmail.com">
          {" "}
          <i className="fas fa-envelope fa-2x" style={{ color: "#C67D8A" }} />
        </a>
        <a href="https://drive.google.com/file/d/1Gv2yVNkym21wTJIbArNcm87zSaLCk-yF/view" target="_blank">
          <i className="fas fa-file-alt fa-2x" style={{ color: "#C67D8A" }}/>
        </a>
      </div>
    );
  }
}
