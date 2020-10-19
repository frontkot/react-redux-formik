import * as favoritesActions from './types';

export const favoritesLoading = (isLoading) => ({
  type: favoritesActions.FAVORITES_LOADING, 
  payload: isLoading
})

export const saveFavorites = (items) => ({
  type: favoritesActions.SAVE_FAVORITES, 
  payload: items
})

export const toggleFav = (index, arr) => ({
  type: favoritesActions.TOGGLE_FAVORITES, 
  payload: {item: index, all: arr}
})