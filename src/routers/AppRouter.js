import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemsPage from '../component/ItemsPage';
import LiensPage from '../component/LiensPage';
import HomePage from '../component/HomePage';
import AdminPage from '../component/AdminPage';
import NotFoundPage from '../component/NotFoundPage';
import Header from '../component/Header';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/items" component={ItemsPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/liens" component={LiensPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default AppRouter;