import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./../../Components/Cart-Item/index"
//import ProductsDB from "../../products.json"
import { cartHandler, cart, total } from "./../../CartHelpers.js"




export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myCart: []
    }
    this.getInitialCart = this.getInitialCart.bind(this);
    this.clearCart = this.clearCart.bind(this);

  }

  getInitialCart() {
    cartHandler();
    this.setState({
      myCart: cart
    });
  }


  componentDidMount() {
    this.getInitialCart();
  }

  clearCart() {
    localStorage.clear();
    cartHandler();
    this.forceUpdate();

    this.setState({
      myCart: cart
    });
  }

  componentDidUpdate() {
    if (this.state.myCart!==cart) {
      this.setState({
        myCart: cart
      });
    }
  }

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
          <div id="cart" className="cart-content" onClick={e => e.stopPropagation()}>
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
          <div className="cart-footer" onClick={e => e.stopPropagation()}>
            <h3> your total: $
                <span id="total" className="cl-total">{total}</span>
            </h3>
            <button
              className="clear-cart banner-btn"
              onClick={this.clearCart}
            >
              clear cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}