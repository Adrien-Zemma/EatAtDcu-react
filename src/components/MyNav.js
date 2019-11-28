import React from 'react'
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/MyNav.css'

class MyNav extends React.Component {
    render() {
        const icon = (
            <span class="logo">
      <a href="/">
        <img src={"../static/images/favicon.png"} height="33" width="120" alt="text here"/></a>
    </span>
        );
        return (
            <Navbar className={"MyNav"} color={"#FFFFFF"} brand={icon} expand="md">
                <NavbarBrand brand={icon} href="/">Eat At DCU</NavbarBrand>
                <NavbarToggler/>
                <Nav className="mr-auto" navbar/>
                <NavLink href="/account">My Account</NavLink>
            </Navbar>
        );
    }
}

export default MyNav
