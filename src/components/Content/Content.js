import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import Modal from '../Modal/Modal'
import PurchaseForm from '../PurchaseForm/PurchaseForm'
import { useSelector } from 'react-redux';
import { checkIsOpen } from '../../store/modal/selectors';
import { useLocation } from 'react-router-dom';
import './Content.scss'
import Button from '../Button/Button';
import { getProductsInCart } from '../../store/cart/selectors';
import { checkIsOpenForm } from '../../store/purchaseForm/selectors';

const Content = ({
    header, content
}) => {
    const isOpen = useSelector(checkIsOpen);
    const isOpenForm = useSelector(checkIsOpenForm);
    const location = useLocation();
    const cartPage = location.pathname === '/cart';
    const headerContent = cartPage ? 'Remove product' : 'Choose this product';
    const textContent = cartPage ? 'Do you want remove product from Cart?' : 'Do you want to add this product to your cart';
    const isProductsInCart = useSelector(getProductsInCart).length !== 0

    return  <div className='container'>
                <div className='content'>
                    <h3>{header}</h3>
                    <ListItem products={content}/>
                    {cartPage && isProductsInCart ? <Button className='purchase-button'>Go to purchase</Button> : null}
                </div>
                {isOpen && <Modal 
                    header={headerContent} 
                    text={textContent} 
                />}
                {isOpenForm && <PurchaseForm />}
            </div>
};

export default Content;

Content.propTypes = {
    header: PropTypes.string,
    content: PropTypes.array
};

Content.defaultProps = {
    header: 'header',
    content: []
};