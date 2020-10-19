import * as productsActions from './types';

export const productsLoading = (isLoading) => ({
  type: productsActions.PRODUCTS_LOADING, 
  payload: isLoading
})

export const saveProducts = (products) => ({
  type: productsActions.SAVE_PRODUCTS, 
  payload: products
})