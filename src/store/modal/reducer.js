import * as modalActions from './types';

const initialState = {
    isOpen: false,
    id: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case modalActions.IS_OPEN:
      return { ...state, isOpen: action.payload }
    case modalActions.ADD_ID_TO_MODAL:
      return { ...state, id: action.payload }
  
  }
}

export default reducer;