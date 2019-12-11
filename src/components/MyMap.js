import React from 'react'

import GoogleMapReact from 'google-map-react';
import Marker from "../components/Marker"
import {Col, Container, Row, Spinner} from 'reactstrap';

class MyMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coords: undefined
        }
    }

    render() {
        navigator.geolocation.getCurrentPosition((position) => {
            if (this.state.coords === undefined) {
                this.setState({coords: position.coords});
            }
        });
        let markerList = [];
        for (const restaurant of this.props.restaurants) {
            markerList.push(
                <Marker
                    key={restaurant.id}
                    lat={restaurant.latitude}
                    lng={restaurant.longitude}
                    name={restaurant.name}
                    color="blue"
                    restaurant={restaurant}
                />
            );
        }

        return (
            this.state.coords ?
                <div style={{height: '100vh', width: '100%'}}>
                    <GoogleMapReact
                        bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_API}}
                        defaultCenter={{
                            lat: this.state.coords.latitude,
                            lng: this.state.coords.longitude,
                        }}
                        defaultZoom={15}
                    >
                        {markerList}
                        <Marker
                            lat={this.state.coords.latitude}
                            lng={this.state.coords.longitude}
                            name="you"
                            color="green"
                        />
                    </GoogleMapReact>
                </div> :
                <Container>
                    <Row>
                        <Col>
                            <Spinner color="dark"/>
                        </Col>
                    </Row>
                </Container>
        )
            ;
    }
}

export default MyMap
