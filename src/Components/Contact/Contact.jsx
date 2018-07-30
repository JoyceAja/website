import React, {Component} from "react";

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
            <div>
                <form onSubmit={handleSubmit}>
                <input
                type ="text"
                name="name"
                placeholder="Name"
                onInput={handleInput} />

                <input
                type ="text"
                name="email"
                placeholder="email"
                onInput={handleInput} />

                <input
                type ="text"
                name="message"
                placeholder="message"
                onInput={handleInput} />
                </form>
            </div>
        )
    }
}