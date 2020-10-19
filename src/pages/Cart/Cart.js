import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Content from '../../components/Content/Content'
import * as selectors from '../../store/cart/selectors';
import { loadCartItems } from '../../store/cart/operations';
import Loader from '../../components/Loader/Loader'

const Cart = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector(selectors.getProductsInCart);
  const isLoading = useSelector(selectors.cartLoading);

  useEffect(() => {
      dispatch(loadCartItems(productsInCart))
  }, [dispatch, productsInCart]);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Content
        header='Products in Cart'
        content={productsInCart}
    />
  );
};

export default Cart;
