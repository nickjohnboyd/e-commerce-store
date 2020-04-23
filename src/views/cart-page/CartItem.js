import React from 'react';
import store from '../../store';
import { Link } from 'react-router-dom';

class CartItem extends React.Component {
	deleteItem = () => {
		store.dispatch({
			type: "DELETE_ITEM",
			itemId: this.props.id
		});

		this.props.onUpdateCart();

		console.log('deleted');
		console.log(this.props.id);
		console.log(store.getState().cart);
	}
	updateQuantity = (condition) => {
		let cart = store.getState().cart;
		let cartItem = cart.find(item => item.id === this.props.id);
		switch(condition) {
			case 'subtract':
				if(cartItem.quantity <= 0) break;
				cartItem.quantity--;
				break;
			case 'add':
				cartItem.quantity++;
				break;
			default:
				console.log(condition.target.value);
				cartItem.quantity = Number(condition.target.value);
				break;
		}
		// if(cartItem.quantity === 0) {
		// 	store.dispatch({
		// 		type: "DELETE_ITEM",
		// 		itemId: this.props.id
		// 	});
		// }
		cart.splice(cart.indexOf(cartItem), 1, cartItem);
		store.dispatch({
			type: "REPLACE_CART",
			cart: cart
		});

		this.props.onUpdateCart();
		setTimeout(() => {
			console.log(this.props.quantity);
		}, 100);
	}
	render() {
		return (
			<div className="CartItem">
				<div className="item-left">
					<div className="item-img-cont">
						<img className="item-img" src={this.props.img} alt="cart-item"></img>
					</div>
					<div className="item-title">{this.props.title}</div>
				</div>
				<div className="item-quantity">
					<button className="ui button subtract" onClick={() => (this.updateQuantity('subtract'))}>
						<i className="fas fa-minus"></i>
					</button>
					<div className="ui transparent input quantity-input">
						<input className="q-input" type="text" value={this.props.quantity} onChange={this.updateQuantity}></input>
					</div>
					<button className="ui button add" onClick={() => (this.updateQuantity('add'))}>
						<i className="fas fa-plus"></i>
					</button>
				</div>
				<div className="item-right">
					{/* <Link to={`products/${this.props.id}`}>
						<div className="update-btn-cont">
							<button className="ui button update-btn">Update</button>
						</div>
					</Link> */}
					<div className="item-price">${this.props.price}</div>
					<div className="delete-btn" onClick={() => {this.deleteItem()}}>Delete</div>
				</div>
			</div>
		);
	}
};

export default CartItem;