import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/user/SignUpPage";
import SignInPage from "./pages/user/SignInPage";
import NotFoundPage from "./pages/dafault/NotFoundPage";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route component={NotFoundPage}/>
    </Switch>
);

export default Routes;