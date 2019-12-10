import React from 'react'
import {Col} from "reactstrap";
import {IoMdCafe} from 'react-icons/io'
import {FaKey} from "react-icons/fa";
import {GiPlantsAndAnimals} from "react-icons/gi";
import {MdLocalBar, MdRestaurant} from "react-icons/md";

class MiniIconList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.data.is_vegan ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span><GiPlantsAndAnimals/></span>
                    </Col> : null
                }
                {
                    this.props.data.is_staff_only ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span><FaKey/></span>
                    </Col> : null
                }
                {
                    this.props.data.type[0] === "cafe" ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span><IoMdCafe/></span>
                    </Col> : null
                }
                {
                    this.props.data.type[0] === "restaurant" ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span><MdRestaurant/></span>
                    </Col> : null
                }
                {
                    this.props.data.type[0] === "bar" ? <Col lg={1} md={1} sm={1} xl={1}>
                        <span><MdLocalBar/></span>
                    </Col> : null
                }
            </div>
        );
    }
}

export default MiniIconList
