import React from 'react';
import { Link } from 'react-router-dom';

class OrderPlaced extends React.Component {
	render() {
		return (
			<div className="OrderPlaced">
				<div className="order-placed-title">Your order has been placed!</div>
				<Link to='/products'>
					<div className="continue-shopping">Continue Shopping</div>
				</Link>
			</div>
		);
	}
}

export default OrderPlaced;