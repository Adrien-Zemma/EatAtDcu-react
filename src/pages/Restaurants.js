import React, {Fragment} from 'react'
import RestaurantCard from '../components/RestaurantCard'
import {CardDeck, Col, Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/Restaurants.css'
import MyNav from "../components/MyNav";
import FilterBar from '../components/FilterBar'
import Container from "reactstrap/es/Container";
import JSONPretty from "react-json-pretty";

var Airtable = require('airtable');
let airtableApiKey = process.env.REACT_APP_AIRTABLE_KEY;
let airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
var client = new Airtable({apiKey: airtableApiKey}).base(airtableBase);

class Restaurants extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: [],
            filter: {
                campus: "null",
                selectedButton: ""
            }
        };
        this.handleChangeInChild = this.handleChangeInChild.bind(this);
        this.filterRestaurant = this.filterRestaurant.bind(this);
    }

    handleChangeInChild(event) {
        let tmp = this.state.filter;
        tmp[event.target.name] = event.target.type === "checkbox" ? !tmp[event.target.name] : event.target.value;
        this.setState({filter: tmp});
    }

    async updateREstaurant() {
        const restaurants = (await (await (client('Restaurants').select(
            {
                view: "Grid view",
            })))
            .all()).map((record) => {
            return {...record.fields, id: record.id}
        });
        this.setState({restaurants: restaurants});
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateREstaurant(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    filterRestaurant() {
        const date = new Date();
        let restaurants = [];
        const filter = this.state.filter;
        for (const restaurant of this.state.restaurants) {
            if (filter.vegan && !restaurant.is_vegan || filter.staff && !restaurant.is_staff_only) {
                continue
            }
            if (filter.campus !== "null" && restaurant.campus[0] !== filter.campus) {
                continue
            }
            if (filter.open && (date.getHours() < restaurant.opening_hours.split(':')[0] || date.getHours() > restaurant.closing_hours.split(':')[0])) {
                continue
            }
            if (filter.selectedButton !== '' && filter.selectedButton !== restaurant.type[0]) {
                continue
            }
            restaurants.push(restaurant);
        }
        return restaurants;
    }

    render() {
        let tmp = [];
        let restaurantList = [];
        const restaurantFiltered = this.filterRestaurant();
        for (const reataurant of restaurantFiltered) {
            restaurantList.push(
                <Col lg={5} md={5} sm={6}>
                    <RestaurantCard key={reataurant.id} data={reataurant}/>
                </Col>
            );
        }
        restaurantList.push(
            <CardDeck key={1}>
                {tmp}
            </CardDeck>
        );
        return (
            <Fragment>
                <MyNav/>
                <FilterBar sendChangeToParent={this.handleChangeInChild} airtable={client} filter={this.state.filter}/>
                <Container>
                    <JSONPretty data={this.state.filter}/>
                    <Row>
                        <CardDeck className={"deck"}>
                            {restaurantList}
                        </CardDeck>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Restaurants
