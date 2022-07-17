import React, {Component} from "react";
import alertifyjs from "alertifyjs"

import {Buttom, Form, FormGroup, Label, Input} from "reactstrap";

export default class FormDemo2 extends Component{
	
	state = {email: "", password: "", city: "", description: ""};
	
	handleEvent = (event) =>{
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]:value});
	}
	
	handleSubmit = (event) =>{
		event.pereventDefalut();
		alertifyjs.success(this.state.email + " removed to db!");
	}
	
	render(){
		return(
			<div>
				<Form>
					<Label for="email">Email</Label>
					<Input type="email" name="email"></Input>
				</Form>
			</div>
		);
	}
}