import React from 'react';
import store from '../../store/index';
import CartItem from './CartItem';

class CartList extends React.Component {
	constructor(props) {
		super(props);
		this.cart = store.getState().cart;
	}
	setQuanitity = () => {
		console.log(this.cart);
		for(let i = 0; i < this.cart.length - 1; i++) {
			if(this.cart[i].id === this.cart[i + 1].id) {
				this.cart[i].quantity++;
			}
		}
	}
	buildCart = () => {
		this.setQuanitity();
		return this.cart.map((item, idx) => (
			<CartItem
				id={item.id}
				title={item.title}
				description={item.description}
				img={item.img}
				price={item.price}
				rating={item.rating}
				category={item.category}
				key={idx}
				quantity={item.quantity}
			/>
		));
	}
	render() {
		return (
			<div className="CartList">
				<div className="cart-title">Cart</div>
				<div className="cart">
					{this.buildCart()}
				</div>
			</div>
		);
	}
};

export default CartList;