import React from 'react';
import store from '../../store/index';
import CartItem from './CartItem';

class CartList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: store.getState().cart,
			cartItems: []
		}
	}
	buildCart = () => {
		this.setState({
			cart: store.getState().cart
		}, this.buildCartItems);
	}
	buildCartItems = () => {
		console.log('new cart items');
		const cartItems = this.state.cart.map((item, idx) => (
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
				onDeleteItem={this.buildCart}
			/>
		));
		let newState = this.state;
		newState.cartItems = cartItems;
		this.setState(newState);
	}
	componentDidMount() {
		this.buildCart();
	}
	render() {
		return (
			<div className="CartList">
				<div className="cart-title">Cart</div>
				<div className="cart">
					{this.state.cartItems}
				</div>
			</div>
		);
	}
};

export default CartList;