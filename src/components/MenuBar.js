import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

import HomePage from '../views/home-page/HomePage';
import ProductsPage from '../views/products-page/ProductsPage';
import CartPage from '../views/cart-page/CartPage';
import ProductDetails from '../views/products-page/ProductDetails';
import LoginPage from '../views/login-page/LoginPage';

class MenuBar extends React.Component {
	buildMenuItems = () => {
		// const categories = 0;
	}
	render() {
		return (
			<div className="MenuBar">
				<Router>
					<div className="navbar">
						<Link to="/">
							<div className="nav-item nav-title">WorkTech</div>
						</Link>
						<Link to="/products">
							<div className="shop-btn nav-item">SHOP</div>
						</Link>
						<div className="right-nav nav-item">
							{/* <Link to="/login">
								<div className="nav-icon"><i className="fas fa-user-alt"></i></div>
							</Link> */}
							<Link to="/cart">
								<div className="nav-icon"><i className="fas fa-shopping-cart"></i></div>
							</Link>
						</div>
					</div>
					<div className="message-bar">Free standard shipping over $200</div>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/e-commerce-store" component={HomePage} />
						<Route exact path="/products" component={ProductsPage} />
						<Route path="/login" component={LoginPage} />
						<Route path="/cart" component={CartPage} />
						<Route path="/products/:productId" component={ProductDetails} />
					</Switch>
				</Router>
			</div>
		);
	}
};

export default MenuBar;