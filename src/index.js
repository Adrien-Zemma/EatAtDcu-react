import React from 'react';
import ReactDOM from 'react-dom';
import './static/style/index.css';
import App from './pages/App';
import Account from "./pages/Account";
import Restaurants from "./pages/Restaurants";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Restaurants/>
            </Route>
            <Route exact path="/account">
                <Account/>
            </Route>
            <Route exact path="/restaurants">
                <Restaurants/>
            </Route>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
