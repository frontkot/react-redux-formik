import { combineReducers } from 'redux';
import products from './products/reducer';
import favorites from './favorites/reducer';
import cart from './cart/reducer';
import modal from './modal/reducer';
import purchaseForm from './purchaseForm/reducer';


const rootReducer = combineReducers({
    products,
    favorites,
    cart,
    modal,
    purchaseForm
  })

export default rootReducer;