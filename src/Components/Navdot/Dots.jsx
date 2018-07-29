import React, {Component} from "react";

import "./Dots.css"

export default class Navbar extends Component{
    render(){
        return(
            <div className="dots">
                <ul>
                <li><a className= "dot" href="#"></a></li>
                <li><a className= "dot" href="#"></a></li>
                <li><a className= "dot" href="#"></a></li>
                <li><a className= "dot" href="#"></a></li>
                <li><a className= "dot" href="#"></a></li>
                </ul>
            </div>
        )
    }
}