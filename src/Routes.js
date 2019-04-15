import React from 'react';
import {Route, Switch} from 'react-router-dom';
import RequireUser from "./helpers/guards/RequireUser";
import RequireGuest from "./helpers/guards/RequireGuest";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/user/SignUpPage";
import SignInPage from "./pages/user/SignInPage";
import DashboardPage from "./pages/user/DashboardPage";
import EditUserPage from "./pages/user/EditUserPage";
import NotFoundPage from "./pages/dafault/NotFoundPage";

const Routes = () => (
    <Switch>
        <Route exact path="/" component={RequireGuest(HomePage)}/>
        <Route exact path="/sign-up" component={RequireGuest(SignUpPage)}/>
        <Route exact path="/sign-in" component={RequireGuest(SignInPage)}/>
        <Route exact path="/dashboard" component={RequireUser(DashboardPage)}/>
        <Route exact path="/user/edit" component={RequireUser(EditUserPage)}/>
        <Route component={NotFoundPage}/>
    </Switch>
);

export default Routes;