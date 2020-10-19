import axios from 'axios';
import { saveProducts, productsLoading } from './actions';


export const loadProducts = () => (dispatch) => {
    dispatch(productsLoading(true))
    axios('./items.json')
        .then(res => {
        dispatch(saveProducts(res.data.items))
        dispatch(productsLoading(false))
    })
}