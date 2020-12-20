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

    // const cartBtn  = document.querySelector('.cart-btn');
    // const clearcartBtn  = document.querySelector('.clear-cart');
    // const cartOverlay  = document.querySelector('.cart-overlay');
    // const cartItems  = document.querySelector('.cart-items');
    // const cartTotal  = document.querySelector('.cart-total');
    // const cartContent  = document.querySelector('.cart-content');
    // const cartDOM  = document.querySelector('.cart');

    // const productsDOM  = document.querySelector('.products-center');

    // let cart = [];

    //getting products
    // class Products {
    //   async getProducts(){
    //     try {
    //       let result = await fetch(ProductsDB);
    //       let data = await result.text();
    //       return data;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }

    // //display products
    // // class UI {

    // // }

    // //local storage
    // // class Storage {

    // // }

    // // listener
    // document.addEventListener("DOMContentLoaded", ()=>{

    //   //const ui = new UI ()
    //   const products = new Products ()

    //   //get all products
    //   products.getProducts().then(data => console.log(data))
    // })









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