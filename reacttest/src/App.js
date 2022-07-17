import {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import {Switch, Route} from "react-router-dom";
import alertifyjs from "alertifyjs"

import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
	
	state={currentCategory:"", products: [], cart: []}
	
	changeCategory = (category) => {
		this.setState({currentCategory: category.categoryName});
		this.getProducts(category.id);
	};
	
	getProducts = (categoryId) => {
		let url = "http://localhost:3000/products";
		if(categoryId) url += "?categoryId=" + categoryId;
		
		fetch(url).then(response => response.json()).then(data => this.setState({products:data}));
	}
	
	addToCard = (product) => {
		let newCart = this.state.cart;
		var addedItem = newCart.find(c => c.product.id === product.id);
		if(addedItem) addedItem.quantity++; else newCart.push({product: product, quantity: 1});
		this.setState({cart: newCart});
		alertifyjs.success(product.productName + " added to cart");
	}
	
	removeFromCart = (product) => {
		let newCart = this.state.cart.filter(c => c.product.id !== product.id);
		this.setState({cart: newCart});
		alertifyjs.error(product.productName + " removed to cart");
	}
	
	componentDidMount(){
		this.getProducts();
	}
	
	render(){
		let productInfo = {title:"Product List"};
		let categoryInfo = {title:"Category List"};
		return (
			<div>
				<Container>
					<Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
					<Row>
						<Col xs="3"><CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}/></Col>
						<Col xs="9">
							<Switch>
								<Route exact path="/" render={props => (<ProductList {...props} products={this.state.products} addToCard={this.addToCard} currentCategory={this.state.currentCategory} info={productInfo}/>)}/>
								<Route exact path="/cart" render={props => (<CartList {...props} cart={this.state.cart} removeFromCart={this.removeFromCart}/>)}/>
								<Route path="/form1" component={FormDemo1}/>
								<Route path="/form2" component={FormDemo2}/>
								<Route component={NotFound}/>
							</Switch>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}