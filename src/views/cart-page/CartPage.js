import React from 'react';
import CartList from './CartList';

class CartPage extends React.Component {
	render() {
		return (
			<div className="CartPage main">
				<CartList />
			</div>
		);
	}
};

export default CartPage;