import React from 'react';
import store from '../../store/index';
import ProductItem from './ProductItem';

class ProductsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			productItems: [],
			filteredProducts: []
		}
	}
	setFilter = (e) => {
		console.log(e.target.value);
		let filterVal = e.target.value;
		let products = store.getState().products;
		let filteredProducts = products.filter(p => {
			return p.title.toLowerCase().includes(filterVal.toLowerCase()) === true;
		});
		console.log('filteredProducts');
		console.log(filteredProducts);

		this.setState({
			filteredProducts: filteredProducts
		}, this.buildProducts);
	}
	buildProducts = () => {
		let myProducts = [];

		if(this.state.filteredProducts.length > 0) {
			myProducts = this.state.filteredProducts;
		} else {
			myProducts = store.getState().products;
		}
		this.setState({
			products: myProducts
		}, this.createProductItems);
	}
	
	createProductItems = () => {
		const productItems = this.state.products.map((product, idx) => (
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
		let newState = this.state;
		newState.productItems = productItems;
		this.setState(newState);

		console.log('state');
		console.log(this.state);
	}
	componentDidMount() {
		this.buildProducts();
	}
	render() {
		return (
			<div className="MyProductsList">
				<div className="ProductsFilter">
					<span className="filter-label">Filter By Title: </span>
					<div className="ui input products-filter">
						<input type="text" placeholder="Filter..." onKeyUp={this.setFilter}></input>
					</div>
				</div>
				<div className="ProductsList">
					{ this.state.productItems }
				</div>
			</div>
		);
	}
};

export default ProductsList;