import React from 'react';
import store from '../store';

class ProductDetails extends React.Component {
	getCurrentProduct = () => {
		const products = store.getState().products;
		const productId = this.props.match.params.productId;
		return products.filter(p => {
			return p.id == productId;
		});
	}

	render() {
		const currentProduct = this.getCurrentProduct()[0];
		console.log(currentProduct);
		return (
			<div className="ProductDetails">
				<div className="p-img-cont">
					<img className="p-img" src={currentProduct.img}></img>
				</div>
				<button className="ui button add-to-cart">Add to cart</button>
			</div>
		);
	}
};

export default ProductDetails;