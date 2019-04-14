import React from 'react';
import UserHeader from "../../modules/header/UserHeader";
import Footer from "../../modules/footer/Footer";
import DashboardContainer from "../../modules/user/DashboardContainer";

const DashboardPage = (props) => (
    <div>
        <UserHeader history={props.history}/>
        <h1>Dashboard Page</h1>
        <DashboardContainer/>
        <Footer/>
    </div>
);

export default DashboardPage;