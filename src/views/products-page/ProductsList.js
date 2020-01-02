import React from 'react';
import store from '../../store/index';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
	buildProducts = () => {
		const products = store.getState().products;
		return products.map((product, idx) => (
			<ProductItem
				id={product.id}
				title={product.title}
				description={product.description}
				img={product.img}
				price={product.price}
				rating={product.rating}
				category={product.category}
				key={idx}
			/>
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