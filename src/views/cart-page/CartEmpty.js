import React from 'react';
import { Link } from 'react-router-dom';

class CartEmpty extends React.Component {
	render() {
		return (
			<div className="CartEmpty">
				<div className="cart-title">Cart</div>
				<div className="empty-msg">Your cart is currently empty.</div>
				<Link to='/products'>
					<div className="continue-shopping">Continue Shopping</div>
				</Link>
			</div>
		);
	}
};

export default CartEmpty;