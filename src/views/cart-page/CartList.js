import React from 'react';
import store from '../../store/index';
import CartItem from './CartItem';
import OrderPlaced from './OrderPlaced';

class CartList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cart: store.getState().cart,
			cartItems: [],
			totalPrice: 0
		}
		this.total = 0;
		this.orderPlaced = false;
	}
	buildCart = () => {
		this.setState({
			cart: store.getState().cart
		}, this.buildCartItems);
	}
	buildCartItems = () => {
		let cartItems = [];
		if(this.orderPlaced) {
			cartItems.push(<OrderPlaced key="0" />);
		} else {
			console.log('new cart items');
			cartItems = this.state.cart.map((item, idx) => (
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
					onUpdateCart={this.buildCart}
				/>
			));
		}

		let newState = this.state;
		newState.cartItems = cartItems;
		this.setState(newState, this.setTotal);
	}
	setTotal = () => {
		this.total = 0;
		this.state.cart.map(item => {
			let itemPrice = item.quantity * item.price;
			this.total += itemPrice;
		});
		let newState = this.state;
		newState.totalPrice = this.total;
		this.setState(newState);
		console.log(newState.totalPrice);
	}
	placeOrder = () => {
		console.log('order placed');
		store.dispatch({
			type: "REPLACE_CART",
			cart: []
		});
		this.buildCart();
		this.orderPlaced = true;
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
				<div className="total">
					<div className="subtotal">
						<div className="subtotal-title">Subtotal:</div>
						<div className="subtotal-price">${this.state.totalPrice}</div>
					</div>
					<button className="ui button order-btn" onClick={this.placeOrder}>Place Order</button>
				</div>
			</div>
		);
	}
};

export default CartList;