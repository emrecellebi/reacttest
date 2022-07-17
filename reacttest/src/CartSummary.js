import React, {Component} from "react";
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

export default class CartSummary extends Component{
	renderSummary(){
		return (
			<UncontrolledDropdown inNavbar nav>
				<DropdownToggle caret nav>Your Cart</DropdownToggle>
				<DropdownMenu right>
					{this.props.cart.map(cartItem => (
						<DropdownItem key={cartItem.product.id}><Badge color="danger" onClick={()=> this.props.removeFromCart(cartItem.product)}>Delete</Badge> {cartItem.product.productName} <Badge color="success">{cartItem.quantity}</Badge></DropdownItem>
					))}
					<DropdownItem divider />
					<DropdownItem><Link to="cart" >Go to Cart List</Link></DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		);
	}
	0
	renderEmptyCart(){
		return (
			<NavItem>
				<NavLink>Empty Cart</NavLink>
			</NavItem>
		);
	}
	
	render(){
		return(
			<div>
				{this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
			</div>
		);
	}
}









// aaa öylemi olmuş hiç farkında değilim başkasını ararken seni aratmışım demek ki