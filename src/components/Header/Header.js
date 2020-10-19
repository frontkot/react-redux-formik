import React from 'react';
import {NavLink} from "react-router-dom";
import { useSelector } from 'react-redux';
import { getFavoritesProducts } from '../../store/favorites/selectors';
import { getProductsInCart } from '../../store/cart/selectors';
import './Header.scss'

const Header = () => {
    const favNum = useSelector(getFavoritesProducts).length;
    const cartNum = useSelector(getProductsInCart).length;
    const classNameLink = 'nav-link';
    const classNameCounter = 'count-num';

    return (
        <div className='header-bg'>
            <div className='container'>
                <div className='main-header'>
                    <NavLink 
                        exact to='/' 
                        activeStyle={{color: 'coral'}} 
                        className={classNameLink}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        exact 
                        to='/favorites' 
                        activeStyle={{color: 'coral'}} 
                        className={classNameLink}
                    >
                        Favorites
                        {
                            favNum > 0 && <span className={classNameCounter}>{favNum}</span>
                        }
                    </NavLink>
                    <NavLink 
                        exact 
                        to='/cart' 
                        activeStyle={{color: 'coral'}} 
                        className={classNameLink}
                    >
                        Cart
                        {
                            cartNum > 0 && <span className={classNameCounter}>{cartNum}</span>
                        }
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
