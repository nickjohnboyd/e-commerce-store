import React from 'react';
import store from '../store';
import $ from 'jquery';

class ProductDetails extends React.Component {
	constructor(props) {
		super(props);
		this.cartNum = store.getState().cartNum;
	}
	getCurrentProduct = () => {
		const products = store.getState().products;
		const productId = this.props.match.params.productId;
		return products.filter(p => {
			return p.id == productId;
		});
	}
	addToCart = (currentProd) => {
		this.cartNum++;
		let cart = [currentProd];
		store.dispatch({
			type: "ADD_TO_CART",
			cart: cart
		});
		store.dispatch({
			type: "ADD_CART_QUANTITY",
			cartNum: this.cartNum
		});

		// JQuery slide in/out
		$(`#slide`).slideDown('slow');
		setTimeout(() => {
			$(`#slide`).slideUp('slow');
		}, 2000);
		
		console.log(store.getState().cart);
		console.log(store.getState().cartNum);
	}
	render() {
		const currentProduct = this.getCurrentProduct()[0];
		console.log(currentProduct);
		return (
			<div className="ProductDetails">
				<div className="item-added-slide-cont" id={`slide`}>
						<div className="item-added-cont">
							<div className="item-added">
								<div className="added-msg">Added to cart!</div>
							</div>
						</div>
					</div>
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