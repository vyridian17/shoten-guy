import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer} from './reducers/productReducers'

// bring in the reducers, combine into one

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
});
const initialState = {};
const middleWare = [thunk];

// we'll have multiple mid-ware, so use spread op and pass on all in
// composeWithDevTools allows React Dev Tools to integrate
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;