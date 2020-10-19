import * as purchaseFormAclion from './types';

export const openForm = (isOpen) => ({
  type: purchaseFormAclion.OPEN_FORM, 
  payload: isOpen
})

export const submitForm = (obj) => ({
  type: purchaseFormAclion.SUBMIT_FORM,
  payload: obj
})

