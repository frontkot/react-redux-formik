import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../../components/Content/Content'
import * as selectors from '../../store/products/selectors';

const Main = () => {
    const allProducts = useSelector(selectors.getAllProducts);

    return (
        <Content
            header='Our products'
            content={allProducts}
        />
    );
};

export default Main;