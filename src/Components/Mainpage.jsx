import React, {Component} from "react";

import Navbar from './Navbar/Navbar.jsx';
import Navdot from './Navdot/Dots.jsx';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

export default class Mainpage extends Component{
    // handleScroll = () =>{
    //     style = {}
    // }
    render(){
        return(
            <div>
                <Navbar />
                <Home />
                <Footer />
                {/* <Navdot /> */}
                <About />
                <Project />
                <Skills />
                <Contact />
                
            </div>
        )
    }
}