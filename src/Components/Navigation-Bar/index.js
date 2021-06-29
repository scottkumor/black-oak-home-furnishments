import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from './../Cart/index';
import Menu from './../Menu/index';
import { cart } from "./../../CartHelpers.js"




export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: false,
      menu: false,
      cartCount: 0
    };

    this.handleCart = this.handleCart.bind(this);
    this.handleMenu = this.handleMenu.bind(this);

  }


  handleCart() {
    this.setState(state => ({
      cart: !state.cart
    }));

    if (this.state.cart === false) {
      this.disableScrolling()
    }
    else {
      this.enableScrolling()
    }
  }

  handleMenu() {
    this.setState(state => ({
      menu: !state.menu
    }))
    if (this.state.menu === false) {
      this.disableScrolling()
    }
    else {
      this.enableScrolling()
    }
  }

  disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
  }

  enableScrolling() {
    window.onscroll = null;
  }

  componentDidMount() {
    let items = 0;
    console.log(cart)
    for (let i = 0; i < cart.length; i++){
       items++ 
    }
    this.setState({cartCount: items}); 
  }

  render() {


    return (
      <>
        <nav className="navbar">
          <div className="navbar-center">
            <div className="menu-btn">
              <span className="nav-icon">
                <FontAwesomeIcon
                  icon={faBars}
                  size="2x"
                  onClick={this.handleMenu}
                />
              </span>
            </div>
            {/* <img src="./../../images/logo.svg" alt="store logo" /> */}
            <Link to="/">
              <div> Black Oak </div>
              <div>Home Furnishments</div>
            </Link>
            <div className="cart-btn">
              <span className="nav-icon" onClick={this.handleCart}>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="2x"
                />
                <div className="cart-items">{this.state.cartCount}</div>
              </span>
            </div>
          </div>
        </nav>

        <Menu
          menu={this.state.menu}
          handleMenu={this.handleMenu}
        />
        <Cart
          cart={this.state.cart}
          handleCart={this.handleCart}
        />
      </>
    );
  }
}