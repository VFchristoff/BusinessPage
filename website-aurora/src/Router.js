import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page_1 from './pages/Page_1';
import Page_2 from './pages/Page_2';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Page_1} />
                <Route path="/values" component={Page_2} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
