import React from 'react';
import store from '../../store';

class ProductsFilter extends React.Component {
	setFilter = (e) => {
		console.log(e.target.value);

		let filterVal = e.target.value;
		let products = store.getState().products;
		console.log(products);
		let filteredProducts = products.filter(p => {
			return p.title.toLowerCase().includes(filterVal.toLowerCase()) === true;
		});

		console.log('filteredProducts');
		console.log(filteredProducts);

		store.dispatch({
			type: 'FILTER_PRODUCTS',
			filteredProducts: filteredProducts
		});
		console.log('store filteredProducts');
		console.log(store.getState().filteredProducts);
		this.forceUpdate();
	}
	render() {
		return (
			<div className="ProductsFilter">
				<div className="ui input products-filter">
					<input type="text" placeholder="Filter..." onKeyUp={this.setFilter}></input>
				</div>
			</div>
		);
	}
}

export default ProductsFilter;