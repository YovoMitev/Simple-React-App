import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

const GuestHeader = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Navbar.Brand>
                <Link style={{ textDecoration: 'none' }} to="/dashboard">Dashboard</Link>
            </Navbar.Brand>
        </Nav>
    </Navbar>
);

export default GuestHeader;