import React, {Fragment} from 'react'
import RestaurantCard from '../components/RestaurantCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/style/Restaurants.css'
import MyNav from "../components/MyNav";
import FilterBar from '../components/FilterBar'
import {CardDeck, Col, Container, Row} from 'reactstrap'

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
                selectedButton: "",
                cardview: true
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

    async updateRestaurants() {
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
            () => this.updateRestaurants(),
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
            if ((filter.vegan && !restaurant.is_vegan) || (filter.staff && !restaurant.is_staff_only)) {
                continue
            }
            if (filter.campus !== "null" && restaurant.campus[0] !== filter.campus) {
                continue
            }
            if (filter.open && (date.getHours() < restaurant.opening_hours.split(':')[0] ||
                date.getHours() > restaurant.closing_hours.split(':')[0])) {
                continue
            }
            if (filter.weekend && !restaurant.is_open_in_weekend) {
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
        let restaurantList = [];
        const restaurantFiltered = this.filterRestaurant();
        for (const reataurant of restaurantFiltered) {
            restaurantList.push(
                <Col key={reataurant.id}>
                    <RestaurantCard data={reataurant}/>
                </Col>
            );
        }
        return (
            <Fragment>
                <MyNav/>
                <FilterBar sendChangeToParent={this.handleChangeInChild} airtable={client} filter={this.state.filter}/>
                {
                    this.state.cardview ?
                        <Container className={"full-size"}>
                            <Row>
                                <CardDeck>
                                    {restaurantList}
                                </CardDeck>
                            </Row>
                        </Container> :
                        null
                }


            </Fragment>
        );
    }
}

export default Restaurants
