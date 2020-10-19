import React from 'react';
import ActionIcon from '../ActionIcon/ActionIcon';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFavoritesProducts } from '../../store/favorites/selectors';
import { useLocation } from 'react-router-dom';
import './Item.scss'

const Item = ({
    className, name, price, url, article, color
}) => {
    const location = useLocation()
    const favItemsId = useSelector(getFavoritesProducts).map(e => e.article)
    const cartPage = location.pathname === '/cart';
    const isFavorite = favItemsId.includes(article);

    return (
        <li id={article} className={className}>
            <h3>{name}</h3>
            <ActionIcon type={cartPage ? 'cross' : 'star'} 
                filled={isFavorite} 
                color={isFavorite ? 'yellow' : '#ffff'} 
                id={article}
            />
            <img 
                src={url} 
                style={{borderRadius: '10px'}} 
                alt='item-img'
            />
            <p>Price - {price}</p>
            <p>Article: {article}</p>
            <p>Color: {color}</p>
            {cartPage === false &&
            <Button 
                className='item-button'
                id={article}
            >
                Add to Cart
            </Button>
            }
        </li>
    );
};

export default Item;


Item.propTypes = {
    className: PropTypes.string, 
    name: PropTypes.string,
    price: PropTypes.string,
    url: PropTypes.string ,
    article: PropTypes.string,
    color: PropTypes.string
};

Item.defaultProps = {
    className: '', 
    name: '',
    price: '',
    url: '',
    article: '',
    color: ''
};