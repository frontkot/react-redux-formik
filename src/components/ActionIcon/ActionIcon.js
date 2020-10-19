import React from 'react';
import PropTypes from 'prop-types';
import * as icons from '../Icons';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, addIdToModal } from '../../store/modal/operations';
import { checkIsOpen } from '../../store/modal/selectors';
import { toggleFavorites } from '../../store/favorites/operations';
import { getAllProducts } from '../../store/products/selectors';
import './ActionIcon.scss';

const Icon = ({
  type, color, filled, size, id, className, onClick
}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const cartPage = location.pathname === '/cart';
  const trueColor = cartPage ? className ? color : '#ffff' : color;
  const isModalOpen = useSelector(checkIsOpen);
  const allProducts = useSelector(getAllProducts);

  const openModalWindow = () => {
    dispatch(openModal(!isModalOpen))
    dispatch(addIdToModal(id))
  }

  const toggleFav = () => {
    dispatch(toggleFavorites(id, allProducts));
  } 

  const defineOnClick = () => {
    if (isModalOpen) {
      openModalWindow()
    } else if (cartPage && !className) {
      openModalWindow()
    } else if (className) {
      onClick()
    } else {
      toggleFav()
    }
  }

  const iconJsx = icons[type];

  if (!iconJsx) {
    return null;
  }

  return (
    <div className={className ? className :`icon ${size ? `icon--${size}` : ''}`} 
      onClick={defineOnClick}
    >
      {iconJsx(trueColor, filled)}
    </div>
  )
}

export default Icon

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  filled: PropTypes.bool,
  size: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Icon.defaultProps = {
  type: '',
  color: 'white',
  filled: false,
  size: '',
  id:0
};


