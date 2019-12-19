import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
	render() {
		return (
			<div className="home-page main">
				<div className="h-info">
					<h2 className="h-header">Technology at it's finest</h2>
					<Link to="/products">
						<button className="ui button">Shop</button>
					</Link>
				</div>
			</div>
		);
	}
};

export default HomePage;