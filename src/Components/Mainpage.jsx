import React, {Component} from "react";

import Navbar from './Navbar/Navbar.jsx';
import Navdot from './Navdot/Dots.jsx';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

export default class Mainpage extends Component{
    // handleScroll = () =>{
    //     style = {}
    // }
    render(){
        return(
            <div>
                <Navbar />
                <Home />
                <Navdot />
                <About />
                <Contact />
            </div>
        )
    }
}