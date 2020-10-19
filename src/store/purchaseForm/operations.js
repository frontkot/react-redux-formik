import { openForm, submitForm } from './actions';

export const openFormWindow = (isOpen) => (dispatch) => {
    dispatch(openForm(isOpen))
}

export const confirmOrder = (obj) => (dispatch) => {
    dispatch(submitForm(obj))
}
