import React from 'react';
import store from '../store';

class ProductDetails extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cart: []
		}
	}
	getCurrentProduct = () => {
		const products = store.getState().products;
		const productId = this.props.match.params.productId;
		return products.filter(p => {
			return p.id == productId;
		});
	}
	addToCart = (currentProd) => {
		let cart = this.state.cart;
		cart.push(currentProd);
		this.setState({cart});
		console.log(this.state.cart);
		store.dispatch({
			type: "ADD_TO_CART",
			cart: this.state.cart
		});
		console.log(store.getState().cart);
	}
	render() {
		const currentProduct = this.getCurrentProduct()[0];
		console.log(currentProduct);
		return (
			<div className="ProductDetails">
				<div className="prod-top">
					<div className="prod-info">
						<div className="prod-title">{currentProduct.title}</div>
						<div className="prod-price">${currentProduct.price}</div>
						<button className="ui button add-to-cart" onClick={() => (this.addToCart(currentProduct))}>Add to cart</button>
						<div className="prod-descrip">{currentProduct.description}</div>
					</div>
					<div className="prod-img-cont">
						<img className="prod-img" src={currentProduct.img}></img>
					</div>
				</div>
				<div className="prod-bottom">
				</div>
			</div>
		);
	}
};

export default ProductDetails;