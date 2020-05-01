import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from '../pages/homepage';


const HatsPage = () => (
    <>
        <h1>Hats Page</h1>
    </>
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/hats' component={HatsPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes
