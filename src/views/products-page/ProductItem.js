import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from '../../components/ProductDetails';
import store from '../../store';

class ProductItem extends React.Component {
	constructor(props) {
		super(props)
	}
	onProductClick = () => {
		store.dispatch({
			type: "CURRENT_PRODUCT",
			currentProd: this.props.id
		})
	}
	render() {
		return (
				<Link to={`/products/${this.props.id}`}>
					<div className="ProductItem" onClick={this.onProductClick}>
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