import React from 'react'
import {Col, Container, Modal, ModalBody, ModalHeader, Row} from "reactstrap";
import MiniIconList from "./MiniIconList";
import JSONPretty from "react-json-pretty";

class RestaurantModal extends React.Component {
    render() {
        return (
            <Modal size={"lg"} isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>{this.props.restaurant.name}</ModalHeader>
                <ModalBody>
                    <Container>
                        <Row>
                            <Col className={'center'}>
                                <img width={"750px"} height={"300px"} src={this.props.restaurant.picture}/>
                            </Col>
                        </Row>
                        <Row>
                            <MiniIconList data={this.props.restaurant}/>
                            {
                                this.props.restaurant.is_open_in_weekend ?
                                    <Col>
                                        <p>weekend hours:
                                            from {this.props.restaurant.weekend_opening_hours} to {this.props.restaurant.weekend_closing_hours}</p>
                                    </Col>
                                    : <Col>
                                        <p>close in weekend</p>
                                    </Col>
                            }
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <JSONPretty data={this.props.restaurant}/>s
                            </Col>
                        </Row>
                    </Container>
                </ModalBody>
            </Modal>
        );
    }
}

export default RestaurantModal
