import React from 'react';
import GuestHeader from "../../modules/header/GuestHeader"
import Footer from "../../modules/footer/Footer"
import SignInContainer from "../../modules/user/SignInContainer";

const SignUpPage = (props) => (
    <div>
        <GuestHeader/>
        <SignInContainer history={props.history}/>
        <Footer/>
    </div>
);

export default SignUpPage;