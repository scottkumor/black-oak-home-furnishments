import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWindowClose, faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";

export default class Cart extends Component {
    render() {
        return (
            <div className="cart-overlay">
                <div className="cart">
                    <span className="close-cart">
                        <FontAwesomeIcon icon={faWindowClose} />
                    </span>
                    <h2>Your Cart</h2>
                    <div className="cart-content">
                        <div className="cart-item">
                            <img src="./../../images/product-1.jpeg" alt="cart item" />
                            <div>
                                <h4> queen bed </h4>
                                <h5> $1000 </h5>
                                <span className="remove-item">remove</span>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChevronUp} />
                                <p className="item-amount">1</p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className="cart-footer">
                        <h3> your total: $
                            <span className="class-total">1000</span>
                        </h3>
                        <button className="clear-cart banner-btn"> clear cart</button>
                    </div>
                </div>
            </div>
        );
    }
}
