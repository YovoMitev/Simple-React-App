import React from 'react';
import GuestHeader from "../../modules/header/GuestHeader"
import Footer from "../../modules/footer/Footer"
import SignUpContainer from "../../modules/user/SignUpContainer";

const SignUpPage = (props) => (
    <div>
        <GuestHeader/>
        <SignUpContainer history={props.history}/>
        <Footer/>
    </div>
);

export default SignUpPage;