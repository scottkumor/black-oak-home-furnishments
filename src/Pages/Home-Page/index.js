import React, { Component } from "react";
import Hero from './../../Components/Hero-Image/index';
import Products from './../../Components/Product-Section/index';
import Cart from './../../Components/Cart/index';


import "./styles.css";


export default class Home extends Component {
  render() {
    return (
    <>
      <Cart />
      <Hero />
      <Products />
    </>
    );
  }
}