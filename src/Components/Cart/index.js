import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class Cart extends Component {

  // pull from local storage here and place into queen bed placeholder
  // click on overlay to close cart too

  render() {
    
    return (

      <div className={this.props.toggle ? "cart-overlay cart-overlay-show" : "cart-overlay cart-overlay-hide"}>
        <div className={this.props.toggle ? "showCart cart" : "cart"}>
          <span className="close-cart" onClick={this.props.handleClick}>
            <FontAwesomeIcon className="close" size="2x" icon={faWindowClose} />
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