import React, {Fragment} from 'react'
import JSONPretty from 'react-json-pretty';
import 'bootstrap/dist/css/bootstrap.min.css';

import {IoIosTime, IoMdCafe} from 'react-icons/io'
import {FaChair, FaKey, FaMapMarkerAlt} from "react-icons/fa";
import {GiPlantsAndAnimals} from "react-icons/gi";
import {MdLocalBar, MdRestaurant} from "react-icons/md";

import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Container,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from 'reactstrap'

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
                <Card onClick={this.toggle}>
                    <CardImg top width="100%" src={this.props.data.picture} alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>
                            {this.props.data.name}
                        </CardTitle>
                        <CardText>
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
                                </Row>
                                <Row>
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
                                </Row>
                            </Container>
                        </CardText>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.props.data.name}</ModalHeader>
                    <ModalBody>
                        <Container>
                            <JSONPretty data={this.props.data}/>
                        </Container>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }
}

export default RestaurantCard
