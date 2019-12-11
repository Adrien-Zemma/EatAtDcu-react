import React, {Fragment} from 'react'
import {IoIosTime} from 'react-icons/io'
import {FaChair, FaCrown, FaRegClock} from "react-icons/fa";
import {Col, Container, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import MiniIconList from "./MiniIconList";

class RestaurantModal extends React.Component {
    render() {
        return (
            <Modal size={"md"} isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>{this.props.restaurant.name}</ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            <Col className={'center'}>
                                <img alt={"restaurant"} width={"450px"} height={"250px"}
                                     src={this.props.restaurant.picture}/>
                            </Col>
                        </Row>
                        <Row>
                            <MiniIconList restaurant={this.props.restaurant}/>
                        </Row>
                        <Row>
                            <Col>
                                <span>
                                    <IoIosTime/> from {this.props.restaurant.opening_hours} to {this.props.restaurant.closing_hours}
                                </span>
                            </Col>
                            <Fragment>
                                {
                                    this.props.restaurant.is_open_in_weekend ?
                                        <Col>
                                            <p><FaRegClock/> weekend hours:
                                                from {this.props.restaurant.weekend_opening_hours} to {this.props.restaurant.weekend_closing_hours}
                                            </p>
                                        </Col>
                                        : <Col>
                                            <p><FaRegClock/> close in weekend</p>
                                        </Col>
                                }
                            </Fragment>
                        </Row>
                        <Row>
                            <Col>
                                <span><FaChair/> capacity: {this.props.restaurant.capacity}</span>
                            </Col>
                            <Col>
                                <span><FaCrown/> special: {this.props.restaurant.special}</span>
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
}

export default RestaurantModal
