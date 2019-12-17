import React from 'react';
import CartItem from './CartItem';

class CartList extends React.Component {
	render() {
		return (
			<div className="CartList">
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
			</div>
		);
	}
};

export default CartList;