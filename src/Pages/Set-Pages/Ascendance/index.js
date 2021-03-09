import React, { Component } from "react";
import "./styles.css";
import ProductsDB from "./../../products.json";
import Product from "./../../Components/Product/index"
import { Link } from "react-router-dom";

export default class Ascendance extends Component {

    render() {let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "ascendance collection") {
                prodsArray.push(ProductsDB[i])
            }
        }


        return (
            <div className="pageWrap">

                <div className="headWrap">
                    <div className="collTitle">
                        The Ascendance Collection
                    </div>

                    <p className="collDescription">
                        The Ascendance Collection has been elevated. Rise to meet its sleek designs and
                        tasteful styles that will bring your comfort to new heights. 
                    </p>

                    <div className="collSubTitle">
                        Mobility Ever Upward.
                    </div>
                </div>

                <div className="products ascendance">
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