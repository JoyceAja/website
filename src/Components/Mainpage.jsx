import React, {Component} from "react";

import Navbar from './Navbar/Navbar.jsx'
import Home from './Home/Home';

export default class Mainpage extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Home />
            </div>
        )
    }
}