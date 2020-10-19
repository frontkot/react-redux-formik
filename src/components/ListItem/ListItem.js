import React from 'react';
import Item from '../Item/Item'
import PropTypes from 'prop-types';
import './ListItem.scss'

const ListItem = ({
    products
}) => {
    const productItems = ( 
        products.map((e) => 
            <Item 
                className='product-item' 
                name={e.name}
                price={e.price}
                url={e.url}
                article={e.article}
                color={e.color}
                key={e.article}
            />
        )
    )
 
    return (
        productItems.length > 0 ? <ul className='list-item'>{productItems}</ul> : <h3>You don't selected any product yet :'(</h3>
    );
};

export default ListItem;


ListItem.propTypes = {
    products: PropTypes.array
};

ListItem.defaultProps = {
    products: []
};