import { cartLoading, saveCartItems, deleteFromCart, addToCart, deleteAllFromCart } from './actions';

export const loadCartItems = (items) => (dispatch) => {
    dispatch(cartLoading(true))
    dispatch(saveCartItems(items))
    dispatch(cartLoading(false))
}

export const deleteProductFromCart = (index) => (dispatch) => {
    dispatch(deleteFromCart(index))
}

export const deleteAllProductsFromCart = () => (dispatch) => {
    dispatch(deleteAllFromCart())
}

export const addProductToCart = (index, arr) => (dispatch) => {
    dispatch(addToCart(index, arr))
}
