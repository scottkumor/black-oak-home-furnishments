import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default class Cart extends Component {

  // pull from local storage here and place into queen bed placeholder
  // create cart-items component, use it as a dynamic props template like Product and Card
  
  /* see Menu component index for explanation on ternary onClicks and stopProps */

  render() {

    return (

      <div
        className={this.props.cart ? "cart-overlay cart-overlay-show" : "cart-overlay cart-overlay-hide"}
        onClick={this.props.cart ? this.props.handleCart : null}
      >
        <div className={this.props.cart ? "showCart cart" : "cart"} onClick={e => e.stopPropagation()}>
          <span className="close-cart" onClick={e => e.stopPropagation()}>
            <FontAwesomeIcon className="close" onClick={this.props.handleCart} size="4x" icon={faWindowClose} />
            <h1 className="cart-header">Your Cart</h1>
          </span>
          <div className="cart-content" onClick={e => e.stopPropagation()}>
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
            <button className="clear-cart banner-btn"> clear cart </button>
          </div>
        </div>
      </div>
    );
  }
}