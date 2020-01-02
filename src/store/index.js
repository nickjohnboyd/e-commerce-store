import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  products: productsReducer,
	categories: categoriesReducer,
	currentProd: currentProductReducer
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

function currentProductReducer(state = [], action) {
	if(action.type === "CURRENT_PRODUCT") {
		return state.concat(action.currentProd);
	} else {
		return state;
	}
}

const store = createStore(reducer);

export default store;