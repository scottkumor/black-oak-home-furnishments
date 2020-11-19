import React, { Component } from "react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faWindowClose, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
//import Cart from './../../Components/Cart/index';

export default class NavBar extends Component {
  state = {
    toggle: false
  }
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    var colStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems:"center"
    }

    return (
      <>
        <nav className="navbar">
          <div className="navbar-center">
            <span className="nav-icon">
              {/* <FontAwesomeIcon icon={faHome}/> */}
              <FontAwesomeIcon icon={faBars} />

            </span>
            {/* <img src="./../../images/logo.svg" alt="store logo" /> */}
            <div style={colStyle}>
              <div> Black Oak </div>
              <div>Home Furnishments</div>
            </div>
            <div className="cart-btn">
              <span className="nav-icon">
                <FontAwesomeIcon icon={faShoppingCart} onClick={this.Toggle}
                />
              </span>
              <div className="cart-items">0</div>
            </div>
          </div>
        </nav>

        {/* begin cart */}
        <div className={this.state.toggle ? "cart-overlay cart-overlay-show" : "cart-overlay cart-overlay-hide"}>
          <div className={this.state.toggle ? "showCart cart" : "cart"}>
            <span className="close-cart" onClick={this.Toggle}>
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
        {/* end cart */}

      </>
    );
  }
}