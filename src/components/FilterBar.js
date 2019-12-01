import React, {Fragment} from 'react'
import "../static/style/FilterBar.css"

import {Button, ButtonGroup, Col, Form, FormGroup, Input, Label} from 'reactstrap';

class FilterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            campus: [],
        };
        this.toggle = this.toggle.bind(this)
    }

    async componentDidMount() {
        const campus = (await (await (this.props.airtable('campus').select(
            {
                view: "Grid view",
            })))
            .all()).map((record) => {
            return {...record.fields, id: record.id}
        });
        this.setState({campus: campus})
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        let optionList = [];
        optionList.push(
            <option key={0} value={"null"}> All </option>
        );
        for (const campus of this.state.campus) {
            optionList.push(
                <option key={campus.id} value={campus.id}> {campus.name} </option>
            )
        }

        return (
            <Fragment>
                <Form className={"grey-background margin-top-n-20px"}>
                    <FormGroup row className={"FilterBar"}>
                        <Label for="campus">Campus</Label>
                        <Col sm={2} md={2} lg={2}>
                            <Input type="select" name="campus" id="campus" onChange={this.props.sendChangeToParent}>
                                {optionList}
                            </Input>
                        </Col>
                        <Col sm={2} md={2} lg={2}>
                            <ButtonGroup>
                                <Button color="primary" className={"AllButton"} name={"selectedButton"}
                                        onClick={this.props.sendChangeToParent}
                                        value={""}
                                        active={this.props.filter.selectedButton === ""}>All</Button>
                                <Button color="primary" className={"CafeButton"} name={"selectedButton"}
                                        onClick={this.props.sendChangeToParent}
                                        value={"cafe"}
                                        active={this.props.filter.selectedButton === "cafe"}>Cafe</Button>
                                <Button color="primary" className={"RestaurantButton"} name={"selectedButton"}
                                        onClick={this.props.sendChangeToParent}
                                        value={"restaurant"}
                                        active={this.props.filter.selectedButton === "restaurant"}>Restaurant</Button>
                                <Button color="primary" className={"BarButton"} name={"selectedButton"}
                                        onClick={this.props.sendChangeToParent}
                                        value={"bar"}
                                        active={this.props.filter.selectedButton === "bar"}>Bar</Button>
                            </ButtonGroup>
                        </Col>
                        <Label>Vegan</Label>
                        <Col sm={1}>
                            <Input className={"checkbox"} type={"checkbox"} name={"vegan"} id={"vegan"}
                                   onClick={this.props.sendChangeToParent}/>
                        </Col>
                        <Label>Staff Only</Label>
                        <Col sm={1}>
                            <Input className={"checkbox"} type={"checkbox"} name={"staff"} id={"staff"}
                                   onClick={this.props.sendChangeToParent}/>
                        </Col>
                        <Label>Currently open</Label>
                        <Col sm={1}>
                            <Input className={"checkbox"} type={"checkbox"} name={"open"} id={"open"}
                                   onClick={this.props.sendChangeToParent}/>
                        </Col>
                        <Label>open in weekend</Label>
                        <Col sm={1}>
                            <Input className={"checkbox"} type={"checkbox"} name={"weekend"} id={"weekend"}
                                   onClick={this.props.sendChangeToParent}/>
                        </Col>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}

export default FilterBar;
