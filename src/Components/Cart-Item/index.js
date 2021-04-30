import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { getTotal } from "./../../CartHelpers.js"



//TO DO persistent counts on refresh
/* 
    possibly create a pseudo login that saves the items and their count to local storage seperate from
    the items themslves. when user coms back and they enter the same name, it loads a cart
*/ 



export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemCount: 1,
            price: this.props.price
        }

        this.chevronHandler = this.chevronHandler.bind(this);

    }

    chevronHandler = (direction, originalPrice, count) => () => {

        count = this.state.itemCount;
        let newPrice = 0

        if (direction === "up") {

            count++

            newPrice = (count * originalPrice).toFixed(2);

            this.setState({
                itemCount: count,
                price: newPrice
            });

            getTotal();
        }

        if (direction === "down" && count > 0) {

            count--

            newPrice = (count * originalPrice).toFixed(2);

            this.setState({
                itemCount: count,
                price: newPrice
            });

            getTotal();
        }

        if (count <= 0) {
            //logic to remove from local storage
            console.log("remove");
        }

    }

    render() {


        return (

            <div className="cart-item" key={this.props.id}>
                <img src={process.env.PUBLIC_URL + `${this.props.image}`} alt={this.props.title} className="" />
                <div className="wrap-one">
                    <h4> {this.props.title} </h4>
                    <h5 id="price" data-price={this.props.price}>${this.state.price} </h5>
                    <span className="remove-item">remove</span>
                </div>
                <div className="wrap-two">
                    <FontAwesomeIcon onClick={this.chevronHandler("up", this.props.price, this.props.count)} icon={faChevronUp} />
                    <p id="count" data-count={this.state.itemCount}> {this.state.itemCount} </p>
                    <FontAwesomeIcon onClick={this.chevronHandler("down", this.props.price, this.props.count)} icon={faChevronDown} />
                </div>
            </div>

        )
    }
}