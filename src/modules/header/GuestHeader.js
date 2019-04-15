import React from "react";
import {Link} from "react-router-dom";

const GuestHeader = () => (
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/sign-up">Sign Up</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link active" to="/sign-in">Sign In</Link>
        </li>
    </ul>
);

export default GuestHeader;