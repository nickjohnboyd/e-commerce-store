import { createStore } from 'redux';

function reducer(state = [], action) {
	switch(action.type) {
		case "CREATE_PRODUCTS":
			return state.concat(action.products);
		case "GRAB_PRODUCTS":
			return state;
		default:
			return state;
	}

	// if(action.type === "CREATE_PRODUCTS") {
	// 	return state.concat(action.products);
	// } else {
	// 	return state;
	// }
}

const store = createStore(reducer);
export default store;