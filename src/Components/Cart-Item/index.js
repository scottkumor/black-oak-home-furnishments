import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import itemHandler, { cartHandler } from "./../../CartHelpers.js"
//import ProductsDB from "./../../products.json"

export default class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemCount: this.props.count,
            price: this.props.price,
            id: this.props.id
        }

        this.chevronHandler = this.chevronHandler.bind(this);

    }

    chevronHandler = (itemNum, operation, price) => () => {

        price = "$" + price;

        itemHandler(itemNum, operation, price);

        if (operation === "+") {
            this.setState({
                itemCount: this.props.count
            })
            
        };
        

        console.log(this.state);
    }

    

    render() {


        return (

            <div className="cart-item" key={this.props.id}>
                <img src={process.env.PUBLIC_URL + `${this.props.image}`} alt={this.props.title} className="" />
                <div className="wrap-one">
                    <h4> {this.props.title} </h4>
                    <h5 id="price" data-price={this.state.price}>${this.state.price} </h5>
                    <span className="remove-item">remove</span>
                </div>
                <div className="wrap-two">
                    <FontAwesomeIcon onClick={this.chevronHandler(this.props.id, "+", this.props.price)} icon={faChevronUp} />
                    <p id="count" data-count={this.state.itemCount}> {this.props.count} </p>
                    <FontAwesomeIcon onClick={this.chevronHandler(this.props.id, "-", this.props.price)} icon={faChevronDown} />
                </div>
            </div>

        )
    }
}