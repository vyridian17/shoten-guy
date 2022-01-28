import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAILED} from '../constants/productConstants.js'

// state is initial state, action will be passed to productListReducer
// type of action will be evualted. could have a payload
// 
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST: 
      return { loading: true, products: [] } // empty array because not fulfilled yet
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default productListReducer;