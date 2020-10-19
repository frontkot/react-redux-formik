// import axios from 'axios';
import { favoritesLoading, saveFavorites, toggleFav } from './actions';

export const loadFavorites = (items) => (dispatch) => {

    dispatch(favoritesLoading(true))
    dispatch(saveFavorites(items))
    dispatch(favoritesLoading(false))
}

export const toggleFavorites = (index, arr) => (dispatch) => {
    dispatch(toggleFav(index, arr))
}
