import React, { Component } from "react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default class NavBar extends Component {
  render() {
    var colStyle= {
      display: "flex",
      flexDirection:"column"
    }

    return (
      <nav className="navbar">
        <div className="navbar-center">
          <span className="nav-icon">
            {/* <FontAwesomeIcon icon={faHome}/> */}
            <FontAwesomeIcon icon={faBars}/>

          </span>
          {/* <img src="./../../images/logo.svg" alt="store logo" /> */}
          <div style={colStyle}>
            <div> Black Oak </div>
            <div>Home Furnishments</div>
          </div>
          <div className="cart-btn">
            <span className="nav-icon">
              <FontAwesomeIcon icon={faShoppingCart}/>
            </span>
            <div className="cart-items">0</div>
          </div>
        </div>
      </nav>
      
    );
  }
}