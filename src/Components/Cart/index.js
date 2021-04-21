import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./../../Components/Cart-Item/index"
import ProductsDB from "../../products.json"





//the master cart
let cart = [];

// loop through localStorage, effectively the pre-processed cart, push all items as objects into the cart array. 
// the products will be rendered based on a map function that will in turn render each product seperately
for (var i=0; i < localStorage.length; i++) {
  cart.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
  //needs to update cart state
}


//console.log(cart)



export default class Cart extends Component {



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
            {cart.map((item) => (
              <CartItem
                id={item.id}
                key={item.id}
                title={item.title}
                price={"$" + item.price}
                image={item.image}
              //  category={item.category}
              //  collection={item.collection}
              //  type={item.type}
              // description={item.description} short desc
              // link={item.link} link to its own modal? page?
              // icon={item.icon} icon based on category
              />
            ))}
          </div>
          <div className="cart-footer">
            <h3> your total: $
                <span className="cl-total">1000</span>
            </h3>
            <button className="clear-cart banner-btn"> clear cart </button>
          </div>
        </div>
      </div>
    );
  }
}