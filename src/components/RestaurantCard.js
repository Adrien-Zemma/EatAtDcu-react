import React, {Fragment} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/RestaurantCard.css'

import {IoIosTime} from 'react-icons/io'
import {FaChair, FaMapMarkerAlt, FaRegClock} from "react-icons/fa";

import {Card, CardBody, CardImg, CardTitle, Col, Container, Row} from 'reactstrap'
import MiniIconList from "./MiniIconList";
import RestaurantModal from "./RestaurantModal";

class RestaurantCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({modal: !this.state.modal})
    }

    render() {
        return (
            <Fragment>
                <Card onClick={this.toggle} className={"RestaurantCard"}>
                    <CardImg top width="100%" className={"RestaurantCardImg"} src={this.props.restaurant.picture}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>
                            {this.props.restaurant.name}
                        </CardTitle>
                        <Container>
                            <Row>
                                <Col>
                                    <span><FaMapMarkerAlt/> {this.props.restaurant.adresse_precision}</span>
                                </Col>

                                <Col>
                                    <span><IoIosTime/>{this.props.restaurant.opening_hours} to {this.props.restaurant.closing_hours}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span><FaChair/> {this.props.restaurant.capacity}</span>
                                </Col>
                                {
                                    this.props.restaurant.is_open_in_weekend ?
                                        <Col>
                                            <span>
                                                <FaRegClock/>
                                                open in weekend
                                            </span>
                                        </Col> : null
                                }
                            </Row>
                            <Row>
                                <MiniIconList restaurant={this.props.restaurant}/>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>

                {
                    this.props.withModal ?
                        <RestaurantModal isOpen={this.state.modal} toggle={this.toggle}
                                         restaurant={this.props.restaurant}/>
                        : null
                }

            </Fragment>
        );
    }
}

export default RestaurantCard
