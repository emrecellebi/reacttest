import {Component} from "react";
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from "reactstrap";
// import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink} from "reactstrap";

export default class Navi extends Component {
	render(){
		return (
			<div>
				<Navbar color="light" expand="md" light>
					<NavbarBrand href="/">Home</NavbarBrand>
					<NavbarToggler onClick={function noRefCheck(){}} />
					<Collapse navbar>
						<Nav className="me-auto" navbar>
							<NavItem><NavLink href="#"></NavLink></NavItem>
							<UncontrolledDropdown inNavbar nav>
								<DropdownToggle caret nav>Your Cart</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Meleğim</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Sevdiceğim</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<NavbarText>Melek Şentürk</NavbarText>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}