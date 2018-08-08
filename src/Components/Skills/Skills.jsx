import React, { Component } from "react";
import react_logo from "../Image/react.png";
import redux_logo from "../Image/redux.png";
import d3_logo from "../Image/d3.png";
import postgres_logo from "../Image/postgres.png";
import node_logo from "../Image/node.png";
import html_logo from "../Image/html.png";
import css_logo from "../Image/css.png";

import "./Skills.css"

export default class Skills extends Component{
    render(){
        return(
            <section className="skills">
                <div className="sub-title">Skills</div>
                <div className="skills-content">
                    <img className="react" src={react_logo} alt="react" />
                    <img className="left-margin" src={redux_logo} alt="redux"/>
                    <img src={d3_logo} alt="d3"/>
                    <img src={node_logo} alt="node"/>
                    <img src={postgres_logo} alt="postgres"/>
                    <img src={html_logo} alt="html"/>
                    <img src={css_logo} alt="css"/>
                </div>
            </section>
        )
    }
}