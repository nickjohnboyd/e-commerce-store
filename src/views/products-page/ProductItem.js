import React from 'react';
import ProductDetails from '../../components/ProductDetails';

class ProductItem extends React.Component {
	render() {
		return (
			<div className="ProductItem">
				<ProductDetails />
			</div>
		);
	}
};

export default ProductItem;