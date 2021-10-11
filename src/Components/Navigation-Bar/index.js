import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Cart from './../Cart/index';
import Menu from './../Menu/index';
import { lsCart, iconHandler } from "./../../CartHelpers.js"


export default function NavBar() {

  const [myIcon, setIcon] = useState([Object.keys(JSON.parse(lsCart).length)]);
  const [cartView, setCartView] = useState(false);
  const [menuView, setMenuView] = useState(false);

  useEffect(() => {

    /*
    using an interval to update the icon in here rather than passing state back and forth.
    re-rendering based on a child component that was not already rendered proved near impossible.
    using code to check lsCart every time it changed did not work until the cart rendered. this
    way i can passively check for updates without rendering the cart.
    */

    const interval = setInterval(() =>
      setIcon(iconHandler(myIcon)), 1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (cartView === true || menuView === true) {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () { window.scrollTo(x, y); };
    }
    else {
      window.onscroll = null;
    }
  }, [cartView, menuView]);


  const handleCart = () => { setCartView(!cartView); }

  const handleMenu = () => { setMenuView(!menuView); }

  // const handleIcon = () => {
  //   setIcon(iconHandler(myIcon));
  // }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="menu-btn">
            <span className="nav-icon">
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                onClick={() => handleMenu()}
              />
            </span>
          </div>
          {/* <img src="./../../images/logo.svg" alt="store logo" /> */}
          <Link to="/">
            <div> Black Oak </div>
            <div>Home Furnishments</div>
          </Link>
          <div className="cart-btn">
            <span className="nav-icon"
              onClick={() => handleCart()}
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="2x"
              />
              <div className="cart-items">
                {myIcon}
              </div>
            </span>
          </div>
        </div>
      </nav>

      <Menu
        menu={menuView}
        handleMenu={() => handleMenu()}
      />
      <Cart
        cartView={cartView}
        handleCart={() => handleCart()}
        cartIcon={myIcon}
      />
    </>
  );
}
