import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<Link to={`/products/${this.props.id}`}>
				<div className="ProductItem">
					<div className="product-img-cont">
						<img className="product-img" src={this.props.img} alt="product"></img>
					</div>
					<div className="product-info">
						<div className="product-title">{this.props.title}</div>
						<div className="p-info-bottom">
							<div className="product-category">Appliance</div>
							<div className="product-price">${this.props.price}</div>
						</div>
					</div>
					<div className="product-options">
						<button className="ui button add-cart-btn">Add to cart</button>
						<button className="ui button details-btn">Details</button>
					</div>
				</div>
			</Link>
			
		);
	}
};

export default ProductItem;

