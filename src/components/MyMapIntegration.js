import React from 'react'
import {GoogleApiWrapper, InfoWindow} from 'google-maps-react';

class MyMapIntegration extends React.Component {
    render() {
        return (<div>
           <InfoWindow

           />
        </div>)
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBU-KbRmveuNvY7Pq_RMlql3IxDy_m0w6s'
})(MyMapIntegration);
