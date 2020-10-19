import React from 'react';
import { Link } from "react-router-dom";

import './Page404.scss';

const Page404 = ({
    history
}) => {
    

        return (
            <div className='page-404'>
                <h2>404</h2>
                <h3>Page not found</h3>
                <div className='button-block'>
                <Link className='page404-button' onClick={history.goBack}>Go back</Link>
                <Link className='page404-button' to={'/'}>Go to the home page</Link>
                </div>

            </div>
        );
}

export default Page404;