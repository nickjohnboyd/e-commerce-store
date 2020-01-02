import React from 'react';

class ProductDetails extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="ProductDetails">
				<div>{this.props.match.params.productId}</div>
				<div className="p-img"></div>
			</div>
		);
	}
};

export default ProductDetails;