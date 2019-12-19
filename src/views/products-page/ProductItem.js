import React from 'react';
import ProductDetails from '../../components/ProductDetails';

class ProductItem extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="ProductItem">
				<ul>
					<li>{this.props.title}</li>
					<li>{this.props.price}</li>
				</ul>
				<ProductDetails />
			</div>
		);
	}
};

export default ProductItem;