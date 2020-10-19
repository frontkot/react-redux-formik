import * as purchaseFormActions from './types';

const initialState = {
    isOpen: false,
    data: [],
    purchaseValues: {
      firstName: '',
      lastName: '',
      age: '',
      deliveryAdress: '',
      mobileNumber: '+380',
      dateOfDelivery: '',
      callAfterPlacingOrder: false
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
    case purchaseFormActions.OPEN_FORM:
      return { ...state, isOpen: action.payload }
    case purchaseFormActions.SUBMIT_FORM:
      const newArr = [...state.data, action.payload]
      console.log([...newArr])
      return { ...state, data: newArr }
  }
}

export default reducer;