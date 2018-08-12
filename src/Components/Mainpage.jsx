import React, {Component} from "react";

import Navbar from './Navbar/Navbar.jsx';
import Navdot from './Navdot/Dots.jsx';

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Project from './Projects/Project';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

const debounce = (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  }

export default class Mainpage extends Component{
    constructor(){
        super()

        this.state = {
            scrollPositionY: 0,
          }
    }
    componentDidMount() {
        return window.addEventListener('scroll', debounce(this.handleScroll, 16))
      }
    
      componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
      }
    
      handleScroll = () => {
        const scrollPositionY = +window.scrollY
        return this.setState({ scrollPositionY })
      }
    render(){
        const isScrolling = !!this.state.scrollPositionY        
        return(
            <div>
                <div className={isScrolling? "fixed": ""}><Navbar/></div>
                <Home />
                {/* <Footer /> */}
                {/* <Navdot /> */}
                <About />
                <Project />
                <Skills />
                <Contact />
                
            </div>
        )
    }
}