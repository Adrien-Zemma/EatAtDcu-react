import React from 'react'
import {Col, Container, ModalBody, Row} from "reactstrap";

class RestaurantModalBody extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {}
        }
    }

    render() {
        return (
            <ModalBody>
                <Container>
                    <Row>
                        <Col>
                            <h3>
                                today special
                            </h3>
                            {this.props.data.special}
                        </Col>
                        {
                            this.props.data.is_open_in_weekend ?
                                <Col>
                                    <h3>weekend-openning hours</h3>
                                    <p>from {this.props.data.weekend_opening_hours} to {this.props.data.weekend_closing_hours} </p>
                                </Col>
                                : null
                        }
                    </Row>
                </Container>
            </ModalBody>
        );
    }
}

export default RestaurantModalBody
