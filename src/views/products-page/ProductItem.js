import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../store';
import $ from 'jquery';

class ProductItem extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	itemAdded: false
		// }
		// this.cartNum = store.getState().cartNum;
		this.cartNum = 0;
	}
	getCurrentProduct = (id) => {
		const products = store.getState().products;
		return products.filter(p => {
			return p.id == id;
		});
	}
	addToCart = (id) => {
		this.cartNum++;
		let cart = this.getCurrentProduct(id)[0];
		console.log(cart);
		store.dispatch({
			type: 'ADD_TO_CART',
			cart: cart
		});
		store.dispatch({
			type: "ADD_CART_QUANTITY",
			cartNum: this.cartNum
		});

		// JQuery slide in/out
		$(`#slide-${this.props.id}`).slideDown('medium');
		setTimeout(() => {
			$(`#slide-${this.props.id}`).slideUp('medium');
		}, 2000);

		console.log(store.getState().cartNum);
		console.log('quantity');
		console.log(this.props.quantity);


		// this.setState(prevState => ({
		// 	itemAdded: !prevState.itemAdded
		// }), () => {
		// 	setTimeout(() => {
		// 		this.setState(prevState => ({
		// 			itemAdded: !prevState.itemAdded
		// 		}))
		// 	}, 2000);
		// });
	}
	render() {
		// const { itemAdded } = this.state;

		return (
				<div className="ProductItem">
					{/* <div className={`item-added-cont ${itemAdded ? "" : " hidden"}`}>
						<div className="item-added">
							<div className="added-msg">Item added to cart!</div>
						</div>
					</div> */}
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
						<button className="ui button add-cart-btn" onClick={() => (this.addToCart(this.props.id))}>
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
