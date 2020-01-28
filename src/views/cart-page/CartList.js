import React from 'react';
import store from '../../store/index';
import CartItem from './CartItem';

class CartList extends React.Component {
	buildCart = () => {
		const cart = store.getState().cart;
		return cart.map((item, idx) => (
			<CartItem 
				id={item.id}
				title={item.title}
				description={item.description}
				img={item.img}
				price={item.price}
				rating={item.rating}
				category={item.category}
				key={idx}
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