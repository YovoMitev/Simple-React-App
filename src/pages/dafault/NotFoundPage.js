import React from 'react';
import GuestHeader from "../../modules/header/GuestHeader"
import Footer from "../../modules/footer/Footer"

const NotFoundPage = () => (
    <div>
        <GuestHeader/>
        <h2 className="text-center">404 Not Found !</h2>
        <Footer/>
    </div>
);

export default NotFoundPage;