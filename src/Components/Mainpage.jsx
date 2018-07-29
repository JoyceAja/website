import React, {Component} from "react";

import Navbar from './Navbar/Navbar.jsx'
import Navdot from './Navdot/Dots.jsx'
import Home from './Home/Home';

export default class Mainpage extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Home />
                <Navdot />
            </div>
        )
    }
}