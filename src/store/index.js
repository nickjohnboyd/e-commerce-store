import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  products: productsReducer,
	categories: categoriesReducer,
	currentProd: currentProductReducer,
	cart: cartReducer,
	cartNum: addCartQuantityReducer
});

function productsReducer(state = [], action) {
	if(action.type === "CREATE_PRODUCTS") {
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
		// for(let i = 0; i < state - 1; i++) {
		// 	let current = state[i];
		// 	for(let j = 0; j < state - 1; j++) {
		// 		if(current.id === state[j].id) {
		// 			current.quantity++;
		// 		}
		// 	}
		// }
		
		return state.concat(action.cart);
	} else {
		return state;
	}
}

function addCartQuantityReducer(state = 0, action) {
	if(action.type === "ADD_CART_QUANTITY") {
		// state = 0;
		return state += action.cartNum;
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