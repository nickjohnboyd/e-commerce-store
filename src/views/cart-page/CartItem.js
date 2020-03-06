import React from 'react';

class CartItem extends React.Component {
	constructor(props) {
		super(props);
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
				<div className="item-quantity">{this.props.quantity}</div>
				<div className="item-price">${this.props.price}</div>
			</div>
		);
	}
};

export default CartItem;