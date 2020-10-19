import React from 'react';
import {Route, Switch} from "react-router-dom";
import Page404 from "../pages/Page404/Page404";
import Favorites from '../pages/Favorites/Favorites';
import Main from '../pages/Main/Main';
import Cart from '../pages/Cart/Cart';

const AppRoutes = () => (
    <>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/favorites' exact component={Favorites} />
            <Route exact path='/cart' component={Cart} />
            <Route path='*' component={(routeProps) => <Page404 {...routeProps}/>} />
        </Switch>
    </>
);


export default AppRoutes;
