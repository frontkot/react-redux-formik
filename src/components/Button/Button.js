import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsInCart } from '../../store/cart/selectors';
import { openModal, addIdToModal } from '../../store/modal/operations';
import { checkIsOpen } from '../../store/modal/selectors';
import { addProductToCart, deleteProductFromCart } from '../../store/cart/operations';
import { getAllProducts } from '../../store/products/selectors';
import { useLocation } from 'react-router-dom';
import './Button.scss';
import { checkIsOpenForm } from '../../store/purchaseForm/selectors';
import { openFormWindow } from '../../store/purchaseForm/operations';

const Button = ({
  children, className, id
}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getProductsInCart);
  const allProduct = useSelector(getAllProducts);
  const isModalOpen = useSelector(checkIsOpen);
  const location = useLocation();
  const cartPage = location.pathname === '/cart'
  const isFormOpen = useSelector(checkIsOpenForm);

  const openForm = () => {
      dispatch(openFormWindow(!isFormOpen));
  }


  const addToCart = () => {
    const cartIdArr = cartItems.map(e => e.article)
    if (cartIdArr.includes(id)) {
      alert('This products already in cart!')
    } else {
      dispatch(addProductToCart(id, allProduct))
    }
    dispatch(openModal(!isModalOpen))
  }

  const openModalWindow = () => {
    dispatch(openModal(!isModalOpen))
    dispatch(addIdToModal(id))
  }

  const deleteFromCart = () => {
      dispatch(deleteProductFromCart(id));
      dispatch(openModal(!isModalOpen))
  }

  const defineOnClick = () => {
    if (cartPage) {
      if (children === 'Cansel') {
        openModalWindow()
      } else if (children === 'Go to purchase') {
        openForm()
      }else {
        deleteFromCart()
      }
    } else if (isModalOpen) {
      addToCart()
    } else {
      openModalWindow()
    }
  }

  return (
    <button
      className={className}
      onClick={() => defineOnClick()}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};

Button.defaultProps = {
  children: 'Default button',
  id: 0,
  className: ''
};

export default Button;
