import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0; 
    }

    nandleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId = "email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                         <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.nandleChange}
                            />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        )
    }
}