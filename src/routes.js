import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Response from './pages/Response';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Response} path="/response" />
        </BrowserRouter>
    );
};

export default Routes;