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
            fixedScroll: false
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

      onScroll = () => {
        window.scrollTo(0,1076)
    }
    render(){
        const isScrolling = !!this.state.scrollPositionY       
        // console.log('let me know what you think', this.state.scrollPostionY === 1076, this.state.scrollPositionY, typeof this.state.scrollPositionY, 1076 === 1076)
        // if(this.state.scrollPostionY === 1076){
        //     window.removeEventListener('scroll', this.onScroll())
        //     console.log('I am at least getting here')
        // }
        return(
            <div className="page-container">
                <div className={isScrolling? "fixed": ""}><Navbar/></div>
                <Home />
                <About />
                <Project />
                <Skills />
                <Contact />      
            </div>
        )
    }
}