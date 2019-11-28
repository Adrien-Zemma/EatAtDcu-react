import React, {Fragment} from 'react'
import "../static/style/FilterBar.css"

import {Button, Col, Collapse, Form, FormGroup, Input, Label, ButtonGroup} from 'reactstrap';

class FilterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            campus: []
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
                <Form>
                    <FormGroup row className={"FilterBar"}>
                        <Label for="isOpen">Currently open </Label>
                        <Col sm={1}>
                            <Input className={"checkbox"} type="checkbox" name="isOpen" id="isOpen"
                                   onClick={this.props.sendChangeToParent}/>
                        </Col>
                        <Label for="campus">Campus</Label>
                        <Col sm={1}>
                            <Input type="select" name="campus" id="campus" onChange={this.props.sendChangeToParent}>
                                {optionList}
                            </Input>
                        </Col>
                        <Col>
                            <ButtonGroup>
                                <Button color="primary" onClick={this.props.sendChangeToParent} >All</Button>
                                <Button color="primary" onClick={this.props.sendChangeToParent} >Cafe</Button>
                                <Button color="primary" onClick={this.props.sendChangeToParent} >Restaurant</Button>
                            </ButtonGroup>
                        </Col>
                        <Button onClick={this.toggle} className={"MoreFilter"}>
                            More filter
                        </Button>
                    </FormGroup>
                </Form>
                <Collapse isOpen={this.state.collapse}>
                    <Form className={"FilterBar"}>
                        <FormGroup row>
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
                        </FormGroup>
                    </Form>
                </Collapse>
            </Fragment>
        );
    }
}

export default FilterBar;
