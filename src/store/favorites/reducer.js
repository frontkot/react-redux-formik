import * as favoritesActions from './types';

const initialState = {
    isLoading: false,
    data: JSON.parse(localStorage.getItem('favorites-items')) || []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case favoritesActions.FAVORITES_LOADING:
      return { ...state, isLoading: action.payload }
    case favoritesActions.SAVE_FAVORITES:
      return { ...state, data: action.payload }
    case favoritesActions.TOGGLE_FAVORITES:
      const {item, all} = action.payload;
      const indexArr = state.data.map(e => e.article)
      let arr;
      if (indexArr.includes(item)){
        arr = state.data.filter(e => e.article !== item)
      } else {
        const favItem = all.filter(e => e.article === item)
        arr = [...state.data, ...favItem]
      }
      localStorage.setItem('favorites-items', JSON.stringify(arr))
      return { ...state, data: arr}
  }
}

export default reducer;