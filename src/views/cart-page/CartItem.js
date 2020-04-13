import React from 'react';
import store from '../../store';

class CartItem extends React.Component {
	deleteItem = () => {
		store.dispatch({
			type: "DELETE_ITEM",
			itemId: this.props.id
		});

		this.props.onDeleteItem();

		console.log('deleted');
		console.log(this.props.id);
		console.log(store.getState().cart);
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
					<button className="ui button subtract">
						<i className="fas fa-minus"></i>
					</button>
					<div className="ui transparent input quantity-input">
						<input className="q-input" type="text" defaultValue={this.props.quantity}></input>
					</div>
					<button className="ui button add">
						<i className="fas fa-plus"></i>
					</button>
				</div>
				<div className="item-right">
					<div className="update-btn-cont">
						<button className="ui button update-btn">Update</button>
					</div>
					<div className="delete-btn-cont">
						<button className="ui button delete-btn" onClick={() => {this.deleteItem()}}>Delete</button>
					</div>
					<div className="item-price">${this.props.price}</div>
				</div>
			</div>
		);
	}
};

export default CartItem;