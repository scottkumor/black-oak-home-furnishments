import React, { Component } from "react";
import "./styles.css";
import Product from "../../Components/Product"
import ProductsDB from "../../products.json"
import Hero from '../../Components/Hero-Image/index';
import Header from "../../Components/Section-Header/index"
import "./styles.css";


export default class All extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <Hero
          tag="all"
          heading="Furniture Selection"
          subHeading="Browse by Collection"
          link="/collections"
        />
        <Header 
          header="Our Products"
          description="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum."
        />
        
        <div className="products-center">
          {ProductsDB.map(item => (
            <Product
              id={item.id}
              key={item.id}
              title={item.title}
              price={"$" + item.price}
              image={item.image}
              category={item.category}
              collection={item.collection}
              type={item.type}
            // description={item.description} short desc
            // link={item.link} link to its own modal? page?
            // icon={item.icon} icon based on category
            />
          ))}
        </div>
      </>
    );
  }
}