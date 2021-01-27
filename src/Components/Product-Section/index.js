import React, { Component } from "react";
import "./styles.css";
import Product from "./../Product/index.js"
import ProductsDB from "./../../products.json"



export default class Products extends Component {
    render() {
        return (
            <section className="products">
                <div className="section-title">
                    <h2>Our Products</h2>
                </div>
                <div className="products-center">
                    {ProductsDB.map(item => (
                        <Product
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            category={item.category}
                            collection={item.collection}
                            type= {item.type}
                            // description={item.description} short desc
                            // link={item.link} link to its own modal? page?
                            // icon={item.icon} icon based on category
                        />
                    ))}
                </div>
            </section>
        );
    }
}