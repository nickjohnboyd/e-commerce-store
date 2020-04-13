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

function cartReducer(state = [], action) {
	if(action.type === "ADD_TO_CART") {	
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