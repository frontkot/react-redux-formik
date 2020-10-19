import * as productsActions from './types';

const initialState = {
    isLoading: false,
    data: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: 
      return state
    case productsActions.PRODUCTS_LOADING:
      return { ...state, isLoading: action.payload }
    case productsActions.SAVE_PRODUCTS:
      return { ...state, data: action.payload }
  }
}

export default reducer;