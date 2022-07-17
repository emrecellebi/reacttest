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
		event.preventDefault();
		alertifyjs.success(this.state.email + " added to db!");
	}
	
	render(){
		return(
			<div>
				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input type="email" name="email" id="email" placeholder="Enter Email" onChange={this.handleEvent}></Input>
					</FormGroup>
					
					<FormGroup>
						<Label for="password">Password</Label>
						<Input type="password" name="password" id="password" placeholder="Enter Password" onChange={this.handleEvent}></Input>
					</FormGroup>
					
					<FormGroup>
						<Label for="description">Description</Label>
						<Input type="textarea" name="description" id="description" placeholder="Enter Description" onChange={this.handleEvent}></Input>
					</FormGroup>
					
					<FormGroup>
						<Label for="city">City</Label>
						<Input type="select" name="city" id="city" onChange={this.handleEvent}>
							<option>Ankara</option>
							<option>İstanbul</option>
							<option>İzmir</option>
							<option>Bayburt</option>
							<option>Samsun</option>
						</Input>
					</FormGroup>
					
					<Input onChange={this.handleEvent} type="submit" value="Save"></Input>
				</Form>
			</div>
		);
	}
}