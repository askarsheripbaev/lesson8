import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter, Route, Switch} from "react-router-dom";
import PostPage from "./pages/post";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <Switch>
            <Route exact path='/'>
                <App/>
            </Route>
            <Route exact path='/posts/:id'>
                <PostPage />
            </Route>
        </Switch>
    </HashRouter>
);

reportWebVitals();
