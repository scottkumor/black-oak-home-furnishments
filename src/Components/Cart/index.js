import React, { useState, useEffect } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import itemHandler, { cart, cartClear, itemRemover, lsCart } from "./../../CartHelpers.js"
import MyModal from "../Cart-Modal";


export default function Cart(props) {

  const [myCart, setCart] = useState([cart]);
  const [myTotal, setTotal] = useState(0);

  useEffect(() => {
    chevronHandler();
  }, [lsCart]);

  useEffect(() => {
    getTotal(myTotal, myCart);
  }, [myTotal, myCart, lsCart]);

  useEffect(() => {
    removeItem();
    getTotal(myTotal, myCart);
  }, [lsCart]);

  // throws error that lsCart isn't a valid dependency - it may not be, but the cart it renders depends on it so i left the error. the effects do not work without it

  const chevronHandler = (itemNum, operation) => {

    itemHandler(itemNum, operation)
    setCart(cart)
  }

  const clearCart = () => {
    cartClear();
    setCart(cart)
  }


  const getTotal = (total, cart) => {

    if (cart.length) {

      //set prices and total to empty array and 0 respectively to ensure accurate totaling
      let prices = [];
      let processor = cart;

      for (let i = 0; i < processor.length; i++) {

        prices.push(parseFloat(processor[i].price * processor[i].counter));

      }

      // // use array.reduce to summate all prices in the prices array
      let sum = prices.reduce(function (a, b) {
        return a + b;
      }, 0);

      // //rounding to two decimal places, then setting the total to be exported to the DOM
      total = sum.toFixed(2);
      setTotal(total)

    } else {
      setTotal(0)
    }
  }

  const removeItem = (id) => {
    itemRemover(id);
    setCart(cart);
  }

  return (

    <div
      className={props.cartView ? "cart-overlay cart-overlay-show" : "cart-overlay cart-overlay-hide"}
      onClick={props.cartView ? props.handleCart : null}
    >
      <div className={props.cartView ? "showCart cart" : "cart"} onClick={e => e.stopPropagation()}>
        <span className="close-cart" onClick={e => e.stopPropagation()}>
          <FontAwesomeIcon className="close" onClick={props.handleCart} size="4x" icon={faWindowClose} />
          <h1 className="cart-header">Your Cart</h1>
        </span>
        <div id="cart" className="cart-content" onClick={e => e.stopPropagation()}>

          {/* -------------------------------------------------------------------------------------------------------- */}

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={process.env.PUBLIC_URL + `${item.image}`} alt={item.title} className="" />
              <div className="wrap-one">
                <h4> {item.title} </h4>
                <h5 id="price"> ${item.price} </h5>
                <div className="btnsWrap">
                  <MyModal {...item} />
                  <span className="remove-item" onClick={() => removeItem(item.id)}>Remove</span>
                </div>
              </div>
              <div className="wrap-two" onChange={item.onChange}>
                <FontAwesomeIcon onClick={() => chevronHandler(item.id, "+", item.counter)} icon={faChevronUp} />
                <p id="count" >{item.counter} </p>
                <FontAwesomeIcon onClick={() => chevronHandler(item.id, "-", item.counter)} icon={faChevronDown} />
              </div>
            </div>
          ))}

          {/* -------------------------------------------------------------------------------------------------------- */}


        </div>
        <div className="cart-footer" >
          <h3> your total: $
            <span id="total" className="cl-total">
              {myTotal}
            </span>
          </h3>
          <button
            id="clearCart"
            className="clear-cart banner-btn"
            onClick={() => clearCart()}
          >
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
}