import React from 'react'
import Switch from "react-switch";
import {Label} from "reactstrap";
import "../static/style/MySwitch.css"

class MySwitch extends React.Component {
    render() {
        return (
            <div className={"MySwitch"}>
                <Label className={"MySwitchText"}>{this.props.name} </Label>
                <Switch className={"MySwitchCheck"} height={19} width={38} onChange={(status) => {
                    this.props.handler(status, this.props.nameValue)
                }}
                        checked={this.props.filter[this.props.nameValue] || false}/>
            </div>

        );
    }
}

export default MySwitch
