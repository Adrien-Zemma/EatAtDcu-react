import React, {Fragment} from 'react'
import RestaurantModalBody from "../components/RestaurantModalBody"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/RestaurantCard.css'

import {IoIosTime} from 'react-icons/io'
import {FaChair, FaMapMarkerAlt, FaRegClock} from "react-icons/fa";

import {Card, CardBody, CardImg, CardTitle, Col, Container, Modal, ModalHeader, Row} from 'reactstrap'
import MiniIconList from "./MiniIconList";

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
                    <CardImg top width="100%" className={"RestaurantCardImg"} src={this.props.data.picture}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>
                            {this.props.data.name}
                        </CardTitle>
                        <Container>
                            <Row>
                                <Col>
                                    <span><FaMapMarkerAlt/> {this.props.data.adresse_precision}</span>
                                </Col>

                                <Col>
                                    <span><IoIosTime/>{this.props.data.opening_hours} to {this.props.data.closing_hours}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <span><FaChair/> {this.props.data.capacity}</span>
                                </Col>
                                {
                                    this.props.data.is_open_in_weekend ?
                                        <Col>
                                            <span>
                                                <FaRegClock/>
                                                open in weekend
                                            </span>
                                        </Col> : null
                                }
                            </Row>
                            <Row>
                                <MiniIconList data={this.props.data}/>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
                {
                    this.props.withModal ? <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{this.props.data.name}</ModalHeader>
                        <RestaurantModalBody data={this.props.data}/>
                    </Modal> : null
                }

            </Fragment>
        );
    }
}

export default RestaurantCard
