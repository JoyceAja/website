import React, {Component} from "react";

import "./Navbar.css"

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <nav>
                <ul className="nav">
                <li><a className= "nav" href="#">Home</a></li>
                <li><a className= "nav" href="#">About</a></li>
                <li><a className= "nav" href="#">Projects</a></li>
                <li><a className= "nav" href="#">Skills</a></li>
                <li><a className= "nav" href="#">Contact</a></li>
                </ul>
                </nav>
            </div>
        )
    }
}