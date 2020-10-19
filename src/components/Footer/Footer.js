import React from 'react';

import './Footer.scss'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavoritesProducts } from '../../store/favorites/selectors';
import { getAllProducts } from '../../store/products/selectors';
import { getProductsInCart } from '../../store/cart/selectors';

const Footer = () => {
    const location = useLocation();
    const page = location.pathname;
    const allProducts = useSelector(getAllProducts);
    const favoritesProducts = useSelector(getFavoritesProducts);
    const productsInCart = useSelector(getProductsInCart);
    const fixedFooterClassName = 'footer-bg footer-fixed';
    const normalFooterClassName = 'footer-bg';

    let products;
    switch(page) {
        case '/favorites':
            products = favoritesProducts;
            break;
        case '/cart': 
            products = productsInCart;
            break;
        case '/': 
            products = allProducts;
            break;
        default:
            products = [];
            break;
    }

    return (
        <div className={
                products.length < 5 ? 
                    products.length > 0 ?
                        window.innerHeight < 650 ? normalFooterClassName :  fixedFooterClassName 
                    : fixedFooterClassName
                : normalFooterClassName
            }>
            <div className='container'>
                <p>Aaa...Together because...</p>
            </div>
        </div>
    );
}

export default Footer;