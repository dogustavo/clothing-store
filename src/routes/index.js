import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../pages/homepage';
import ShopPage from '../pages/shopPage/shop';
import Header from '../components/header';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/shop' component={ShopPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes
