import React from 'react'
import "../static/style/Marker.css"
import RestaurantModal from "./RestaurantModal";

class Marker extends React.Component {
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
        const {color, name, id, onClick} = this.props;
        return (
            <div>
                <div>
                    <div
                        className="pin bounce"
                        style={{backgroundColor: color, cursor: 'pointer'}}
                        title={name}
                        onClick={this.toggle}
                    />
                    <div className="pulse"/>
                </div>
                {
                    this.props.restaurant ?
                        <RestaurantModal isOpen={this.state.modal} toggle={this.toggle}
                                         restaurant={this.props.restaurant}/> : null
                }

            </div>
        );
    }
}

export default Marker
