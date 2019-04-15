import React from 'react';
import GuestHeader from "../../modules/header/GuestHeader"
import Footer from "../../modules/footer/Footer"
import SignUpContainer from "../../modules/user/SignUpContainer";

const SignUpPage = (props) => (
    <div>
        <GuestHeader/>
        <h1 className="text-center">Sign Up Page</h1>
        <SignUpContainer history={props.history}/>
        <Footer/>
    </div>
);

export default SignUpPage;