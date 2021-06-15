import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { cartHandler
    //, lsCart
} from "./../../CartHelpers.js"
//import ProductsDB from "./../../products.json"

export default class CartItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemCount: 1,
            price: this.props.price,
            id: this.props.id
        }

        this.chevronHandler = this.chevronHandler.bind(this);

    }

    chevronHandler = (direction, originalPrice) => () => {

        let count = this.state.itemCount;
        let newPrice = 0;
        let toCheckIDs = [];
        let processor = JSON.parse(localStorage.getItem('blackOaksUser'));

        if (direction === "up") { count++ };

        if (direction === "down" && count > 0) { count-- };

        //`````````````````````TO DO`````````````````````````````````````````````````

        if (count <= 0) {
            //logic to remove from local storage
            console.log("remove");
        }

        //``````````````````````````````````````````````````````````````````````````

        newPrice = parseFloat((count * originalPrice).toFixed(2));

        for (let i = 0; i < processor.length; i++) {
            toCheckIDs.push(parseInt(Object.keys(processor[i])[0]));
        }

        for (let j = 0; j < toCheckIDs.length; j++) {

            if (this.state.id === toCheckIDs[j]) {

                for (let k = 0; k < processor.length; k++) {

                    if (parseInt(Object.keys(processor[k])[0]) === toCheckIDs[j]) {

                        let currID = Object.keys(processor[k])[0];
                        processor[k][currID] = count;

                    }
                }
            }
        }

        localStorage.setItem('blackOaksUser', JSON.stringify(processor))

        this.setState({
            itemCount: count,
            price: newPrice
        });

        cartHandler();

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
                    <FontAwesomeIcon onClick={this.chevronHandler("up", this.props.price)} icon={faChevronUp} />
                    <p id="count" data-count={this.state.itemCount}> {this.state.itemCount} </p>
                    <FontAwesomeIcon onClick={this.chevronHandler("down", this.props.price)} icon={faChevronDown} />
                </div>
            </div>

        )
    }
}