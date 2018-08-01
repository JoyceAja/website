import React, {Component} from "react";

import './Contact.css'
export default class Contact extends Component{
    constructor(){
        super()

        this.state = {
            name:"",
            email:"",
            message:""
        }
    }

    handleInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e =>{

    }

    render(){
        const {handleInput, handleSubmit} = this
        return(
            <div className="contact">
                <div className="sub-header">Contact</div>
                <form onSubmit={handleSubmit}>
                <input
                type ="text"
                name="name"
                placeholder="Name*"
                required
                onInput={handleInput} />

                <input
                type ="text"
                name="email"
                placeholder="Email*"
                required
                onInput={handleInput} />

                <textarea
                name="message"
                placeholder="Message*"
                required
                cols="200"
                rows="4"
                onInput={handleInput} />

                <input
                type="submit"
                value="Submit" />
                </form>
            </div>
        )
    }
}