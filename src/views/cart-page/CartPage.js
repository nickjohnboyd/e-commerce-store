import React from 'react';
import CartList from './CartList';
import store from '../../store';
import CartEmpty from './CartEmpty';

class CartPage extends React.Component {
	buildCartPage = () => {
		if(store.getState().cart.length > 0) return <CartList />
		else return <CartEmpty />
	}
	render() {
		return (
			<div className="CartPage">
				{this.buildCartPage()}
			</div>
		);
	}
};

export default CartPage;