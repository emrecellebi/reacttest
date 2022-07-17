import React, {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "reactstrap";

import CartSummary from "./CartSummary";

export default class Navi extends Component{
	render(){
		return(
			<div>
				<Navbar color="light" expand="md" light>
					<NavbarBrand href="/">Home</NavbarBrand>
					<NavbarToggler onClick={function noRefCheck(){}} />
					<Collapse navbar>
						<Nav className="me-auto" navbar>
							<NavItem><NavLink href="/form1">Form 1</NavLink></NavItem>
							<NavItem><NavLink href="/form2">Form 2</NavLink></NavItem>
							<CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
						</Nav>
						<NavbarText>Simple Text</NavbarText>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}