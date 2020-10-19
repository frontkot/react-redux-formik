import * as modalActions from './types';

export const isOpenWindow = (isOpen) => ({
  type: modalActions.IS_OPEN, 
  payload: isOpen
})

export const addId = (id) => ({
  type: modalActions.ADD_ID_TO_MODAL,
  payload: id
})

