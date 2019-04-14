import React from 'react';
import UserHeader from "../../modules/header/UserHeader";
import Footer from "../../modules/footer/Footer";

const DashboardPage = (props) => (
    <div>
        <UserHeader history={props.history}/>
        <h1>Dashboard Page</h1>
        <Footer/>
    </div>
);

export default DashboardPage;