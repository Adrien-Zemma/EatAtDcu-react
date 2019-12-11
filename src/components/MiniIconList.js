import React, {Fragment} from 'react'
import {Col, UncontrolledTooltip} from "reactstrap";
import {IoMdCafe} from 'react-icons/io'
import {FaCarrot, FaKey} from "react-icons/fa";
import {MdLocalBar, MdRestaurant} from "react-icons/md";

class MiniIconList extends React.Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.restaurant.is_vegan ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span id={"is_vegan"}><FaCarrot/></span>
                        <UncontrolledTooltip placement="auto" target="is_vegan">
                            Vegan
                        </UncontrolledTooltip>
                    </Col> : null
                }
                {
                    this.props.restaurant.is_staff_only ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span id={"is_staff_only"}>
                            <FaKey/>
                        </span>
                        <UncontrolledTooltip placement="auto" target="is_staff_only">
                            Staff Only
                        </UncontrolledTooltip>
                    </Col> : null
                }
                {
                    this.props.restaurant.type[0] === "cafe" ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span id={"cafe"}>
                            <IoMdCafe/>
                        </span>
                        <UncontrolledTooltip placement="auto" target="cafe">
                            Cafe
                        </UncontrolledTooltip>
                    </Col> : null
                }
                {
                    this.props.restaurant.type[0] === "restaurant" ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span id={'restaurant'}>
                            <MdRestaurant/>
                        </span>
                        <UncontrolledTooltip placement="auto" target="restaurant">
                            Restaurant
                        </UncontrolledTooltip>
                    </Col> : null
                }
                {
                    this.props.restaurant.type[0] === "bar" ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span id={"bar"}>
                            <MdLocalBar/>
                        </span>
                        <UncontrolledTooltip placement="auto" target="bar">
                            Bar
                        </UncontrolledTooltip>
                    </Col> : null
                }
            </Fragment>
        );
    }
}

export default MiniIconList
