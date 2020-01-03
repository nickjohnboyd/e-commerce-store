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
					<h4 className="product-title">{this.props.title}</h4>
					<div className="product-price">${this.props.price}</div>
				</div>
			</Link>
		);
	}
};

export default ProductItem;