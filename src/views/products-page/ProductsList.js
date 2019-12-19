import React from 'react';
import store from '../../store/index';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
	buildProducts = () => {
		const products = store.getState();
		return products.map((product, idx) => (
			<ProductItem title={product.title} price={product.price} key={idx} />
		));
	}
	render() {
		return (
			<div className="ProductsList">
				{this.buildProducts()}
			</div>
		);
	}
};

export default ProductsList;