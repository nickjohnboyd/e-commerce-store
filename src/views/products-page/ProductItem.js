import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import $ from 'jquery';

class ProductItem extends React.Component {
	getCurrentProduct = (id) => {
		const products = store.getState().products;
		return products.find(p => p.id === id);
	}
	setQuantity = (id) => {
		const currentProd = this.getCurrentProduct(id);
		const cart = store.getState().cart;
		const cartItem = cart.find(item => item.id === currentProd.id);
		if(cartItem) {
			const index = cart.indexOf(cartItem);
			let itemQuantity = cart[index].quantity;
			itemQuantity++;
			currentProd.quantity = itemQuantity;
			cart.splice(index, 1);
		}
		console.log(currentProd.quantity);
		this.addToCart(currentProd);
	}
	addToCart = (currentProd) => {
		const cart = [currentProd];
		store.dispatch({
			type: 'ADD_TO_CART',
			cart: cart
		});

		// JQuery slide in/out
		$(`#slide-${this.props.id}`).slideDown('medium');
		setTimeout(() => {
			$(`#slide-${this.props.id}`).slideUp('medium');
		}, 1500);

		console.log(store.getState().cart);
	}
	render() {
		return (
				<div className="ProductItem">
					<div className="item-added-slide-cont" id={`slide-${this.props.id}`}>
						<div className="item-added-cont">
							<div className="item-added">
								<div className="added-msg">Added to cart!</div>
							</div>
						</div>
					</div>
					<div className="product-img-cont">
						<img className="product-img" src={this.props.img} alt="product"></img>
					</div>
					<div className="product-info">
						<div className="product-title">{this.props.title}</div>
						<div className="p-info-bottom">
							<div className="product-category">Appliance</div>
							<div className="product-price">${this.props.price}</div>
						</div>
					</div>
					<div className="product-options">
						<button className="ui button add-cart-btn" onClick={() => (this.setQuantity(this.props.id))}>
							<i className="fas fa-shopping-cart"></i>
							<span>Add to cart</span>
						</button>
						<Link to={`/products/${this.props.id}`} className="details-link">
							<button className="ui button details-btn">
								<i className="fas fa-angle-right"></i>
								<span className="details-title">Details</span>
							</button>
						</Link>
					</div>
				</div>	
		);
	}
};

export default ProductItem;
