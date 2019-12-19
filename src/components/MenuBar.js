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

class MenuBar extends React.Component {
	render() {
		return (
			<div className="MenuBar">
				<Router>
					<div className="ui menu" id="navbar">
						<Link to="/">
							<div className="item">WorkTech</div>
						</Link>
						<Link to="/products">
							<div className="item">Products</div>
						</Link>
						<div className="menu">
							<Link to="/cart">
								<div className="item">Cart</div>
							</Link>
						</div>
					</div>
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/products" component={ProductsPage} />
						<Route path="/cart" component={CartPage} />
					</Switch>
				</Router>
			</div>
		);
	}
};

export default MenuBar;