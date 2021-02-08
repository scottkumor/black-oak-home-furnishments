import React, { Component } from "react";
import Hero from './../../Components/Hero-Image/index';
import Products from './../../Components/Product-Section/index';


import "./styles.css";


export default class Home extends Component {
  
  render() {
    return (
    <>
      <Hero 
        heading="Furniture Selection"
        subHeading="Browse by Collection"
        link="/collections"
      />
      <Products />
    </>
    );
  }
}