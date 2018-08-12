import React, {Component} from "react";
import './Footer.css';


export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <i className="fab fa-twitter fa-2x" style={{color:"#C67D8A"}}></i>
                <i className="fab fa-linkedin-in fa-2x" style={{color:"#C67D8A"}}></i>
                <i className="fas fa-envelope fa-2x" style={{color:"#C67D8A"}}></i>
                <i className="fab fa-github fa-2x" style={{color:"#C67D8A"}}></i>
            </div>
        )
    }
}