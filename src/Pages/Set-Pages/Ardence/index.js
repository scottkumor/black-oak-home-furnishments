import React, { Component } from "react";
import "./styles.css";
import ProductsDB from "./../../products.json";
import Product from "./../../Components/Product/index"
import { Link } from "react-router-dom";

export default class Ardence extends Component {

    render() {let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "ardence collection") {
                prodsArray.push(ProductsDB[i])
            }
        }


        return (
            <div className="pageWrap">

                <div className="headWrap">
                    <div className="collTitle">
                        The Ardence Collection
                    </div>

                    <p className="collDescription">
                        The Ardence Collection is everything you asked for and more - we're offering up fun, 
                        hip designs and quirky furnishments on a hipster's budget. Liven up your space with all
                        kinds of interesting products that will surely drum up some zeal in your home.
                    </p>

                    <div className="collSubTitle">
                        Bring Passion to Life.
                    </div>
                </div>

                <div className="products ardence">
                    {prodsArray.map(item => (
                        <Product
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            price={"$" + item.price}
                            image={item.image}
                            category={item.category}
                            type={item.type}
                        // description={item.description} short desc
                        // link={item.link} link to its own modal? page?
                        // icon={item.icon} icon based on category
                        />
                    ))}
                </div>
                <Link to="/collections" className="banner-btn back-btn">Back to Collections</Link>

            </div>
        )
    }
}