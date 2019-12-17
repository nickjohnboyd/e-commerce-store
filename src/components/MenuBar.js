import React from 'react';
import HomePage from '../views/home-page/HomePage';
import ProductsPage from '../views/products-page/ProductsPage';
import CartPage from '../views/cart-page/CartPage';

class MenuBar extends React.Component {
	render() {
		return (
			<div className="MenuBar">
				<HomePage />
				<ProductsPage />
				<CartPage />
			</div>
		);
	}
};

export default MenuBar;