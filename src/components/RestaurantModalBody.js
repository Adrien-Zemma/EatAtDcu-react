import React from 'react'
import {Container, ModalBody, Spinner} from "reactstrap";
import JSONPretty from "react-json-pretty";
import {Fetch} from 'react-request';

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
                    <JSONPretty data={this.props.data}/>
                    <Fetch url={"https://jfoster.pythonanywhere.com/specials/" + this.props.data.name}>
                        {({fetching, failed, data}) => {
                            if (fetching) {
                                return (
                                    <Spinner color="primary"/>
                                );
                            }
                            if (failed) {
                                return (
                                    <p>No specials found</p>
                                )
                            }
                            if (data) {
                                return (
                                    <JSONPretty data={data}/>
                                );
                            }
                            return null;
                        }}
                    </Fetch>
                </Container>
            </ModalBody>
        );
    }
}

export default RestaurantModalBody
