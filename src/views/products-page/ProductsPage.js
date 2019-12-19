import React from 'react';
import ProductsList from './ProductsList';

class ProductsPage extends React.Component {
	render() {
		return (
			<div className="ProductsPage main">
				<ProductsList />
			</div>
		);
	}
};

export default ProductsPage;