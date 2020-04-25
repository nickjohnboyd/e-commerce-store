import React from 'react';
import store from '../../store';
import $ from 'jquery';

class ProductDetails extends React.Component {
	getCurrentProduct = () => {
		const products = store.getState().products;
		const productId = Number(this.props.match.params.productId);
		return products.find(p => p.id === productId);
	}
	setQuantity = (currentProd) => {
		const cart = store.getState().cart;
		const cartItem = cart.find(item => item.id === currentProd.id);
		if(cartItem) {
			let itemQuantity = cartItem.quantity;
			itemQuantity++;
			currentProd.quantity = itemQuantity;
			cart.splice(cart.indexOf(cartItem), 1);
		}
		console.log(currentProd.quantity);
		this.addToCart(currentProd);
	}
	addToCart = (currentProd) => {
		const cart = [currentProd];
		store.dispatch({
			type: "ADD_TO_CART",
			cart: cart
		});

		// JQuery slide in/out
		$(`#slide`).slideDown('medium');
		setTimeout(() => {
			$(`#slide`).slideUp('medium');
		}, 1500);
		
		console.log(store.getState().cart);
	}
	render() {
		const currentProduct = this.getCurrentProduct();
		console.log(currentProduct);
		return (
			<div className="ProductDetails">
				<div className="prod-top">
					<div className="item-added-slide-cont" id="slide">
						<div className="item-added-cont">
							<div className="item-added">
								<div className="added-msg">Added to cart!</div>
							</div>
						</div>
					</div>
				</div>
				<div className="prod-middle">
					<div className="prod-info">
						<div className="prod-title">{currentProduct.title}</div>
						<div className="prod-price">${currentProduct.price}</div>
						<button className="ui button add-to-cart" onClick={() => (this.setQuantity(currentProduct))}>Add to cart</button>
						<div className="prod-descrip">{currentProduct.description}</div>
					</div>
					<div className="prod-img-cont">
						<img className="prod-img" src={currentProduct.img} alt={currentProduct.title}></img>
					</div>
				</div>
				<div className="prod-bottom"></div>
			</div>
		);
	}
};

export default ProductDetails;