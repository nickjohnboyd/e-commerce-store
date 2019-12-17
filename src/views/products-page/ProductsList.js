import React from 'react';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
	render() {
		return (
			<div className="ProductsList">
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		);
	}
};

export default ProductsList;