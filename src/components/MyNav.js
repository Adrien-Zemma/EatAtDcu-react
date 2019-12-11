import React, {Fragment} from 'react'
import {Nav, Navbar, NavbarBrand, NavbarToggler} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/MyNav.css'
import HomeLogo from "../static/images/home.png"

class MyNav extends React.Component {
    render() {
        const icon = (
            <span class="logo">
      <a href="/">
        <img src={"../static/images/favicon.png"} height="33" width="120" alt="text here"/></a>
    </span>
        );
        return (
            <Fragment>
                <Navbar className={"MyNav"} brand={icon} expand="md">
                    <NavbarBrand brand={icon} href="/">
                        <div className="logo-image">
                            <img src={HomeLogo} className="img-fluid" alt={" Eat At DCU"}/>
                        </div>
                    </NavbarBrand>
                    <NavbarToggler/>
                    <Nav className="mr-auto" navbar/>
                </Navbar>
            </Fragment>

        );
    }
}

export default MyNav
