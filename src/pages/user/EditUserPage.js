import React from 'react';
import UserHeader from "../../modules/header/UserHeader"
import Footer from "../../modules/footer/Footer"
import EditUserContainer from "../../modules/user/EditUserContainer";

const EditUserPage = (props) => (
    <div>
        <UserHeader/>
        <h1 className="text-center">Edit Page</h1>
        <EditUserContainer history={props.history}/>
        <Footer/>
    </div>
);

export default EditUserPage;