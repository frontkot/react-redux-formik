import * as cartActions from './types';

export const cartLoading = (isLoading) => ({
  type: cartActions.CART_LOADING, 
  payload: isLoading
})

export const saveCartItems = (items) => ({
  type: cartActions.SAVE_CART_ITEMS, 
  payload: items
})

export const addToCart = (index, arr) => ({
  type: cartActions.ADD_TO_CART, 
  payload: {item: index, all: arr}
})

export const deleteFromCart = (index) => ({
  type: cartActions.DELETE_FROM_CART, 
  payload: index
})

export const deleteAllFromCart = () => ({
  type: cartActions.DELETE_ALL_FROM_CART, 
})