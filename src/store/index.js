import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  products: productsReducer,
	categories: categoriesReducer,
	currentProd: currentProductReducer,
	cart: cartReducer
});

function productsReducer(state = [], action) {
	if(action.type === "CREATE_PRODUCTS") {
		action.products.forEach(p => p.quantity = 1);
		return state.concat(action.products);
	} else {
		return state;
	}
}


function categoriesReducer(state = [], action) {
	if(action.type === "CREATE_CATEGORIES") {
		return state.concat(action.categories);
	} else {
		return state;
	}
}

function cartReducer(state = [
	{
		id: 1,
		title: "Toshiba - 49” Class – LED - 1080p",
		description: "Toshiba HDTV Fire TV Edition is a new generation of smart TVs featuring the Fire TV experience built-in and including a Voice Remote with Alexa.",
		img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6211/6211009_sd.jpg",
		price: 199.99,
		rating: 4.6,
		category: "tv",
		quantity: 1
	},
	{
		id: 4,
		title: "Apple - AirPods with Charging Case",
		description: "Introducing wireless AirPods. Just take them out and they're ready to use with all your Apple devices¹. Put them in your ears and they connect instantly.",
		img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5577/5577872_rd.jpg",
		price: 149.99,
		rating: 4.8,
		category: "headphones",
		quantity: 3
	}
], action) {
	if(action.type === "ADD_TO_CART") {
		console.log(action.cart);
		return state.concat(action.cart);
	}
	else if(action.type === "DELETE_ITEM") {
		console.log(action.itemId);
		state.splice(state.indexOf(state.find(item => action.itemId === item.id)), 1);
		return state;
	} else {
		return state;
	}
}

function currentProductReducer(state = [], action) {
	if(action.type === "CURRENT_PRODUCT") {
		return state.concat(action.currentProd);
	} else {
		return state;
	}
}

const store = createStore(reducer);

export default store;