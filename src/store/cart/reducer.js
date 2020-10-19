import * as cartActions from './types';

const initialState = {
    isLoading: false,
    data: JSON.parse(localStorage.getItem('cart-items')) || []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case cartActions.CART_LOADING:
      return { ...state, isLoading: action.payload }
    case cartActions.SAVE_CART_ITEMS:
      return { ...state, data: action.payload }
    case cartActions.ADD_TO_CART:
      const { item, all } = action.payload;
      const prod = all.filter(e => e.article === item);
      const newAddArr = [...state.data, ...prod]
      localStorage.setItem('cart-items', JSON.stringify(newAddArr))
      return {...state, data: newAddArr}
    case cartActions.DELETE_FROM_CART:
      const newDelArr = state.data.filter(e => e.article !== action.payload)
      localStorage.setItem('cart-items', JSON.stringify(newDelArr))
      return { ...state, data: newDelArr}
    case cartActions.DELETE_ALL_FROM_CART:
      localStorage.removeItem('cart-items');
      return {...state, data: []}
  }
}

export default reducer;