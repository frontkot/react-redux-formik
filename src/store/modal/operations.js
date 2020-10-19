import { isOpenWindow, addId } from './actions';

export const openModal = (bool) => (dispatch) => {
    dispatch(isOpenWindow(bool))
}

export const addIdToModal = (id) => (dispatch) => {
    dispatch(addId(id))
} 