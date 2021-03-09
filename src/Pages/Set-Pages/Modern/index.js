import React, { Component } from "react";
import "./styles.css";
import ProductsDB from "./../../products.json";
import Product from "./../../Components/Product/index"
import { Link } from "react-router-dom";

export default class Modern extends Component {

    render() {let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "modern collection") {
                prodsArray.push(ProductsDB[i])
            }
        }


        return (
            <div className="pageWrap">

                <div className="headWrap">
                    <div className="collTitle">
                        The Modern Collection
                    </div>

                    <p className="collDescription">
                        The Modern Collection is here - contemporary styles, shapes, and colors that
                        bring any space into the 21st century. Anyone catching a glimpse of these stylish
                        furnishments will know they aren't dealing with the antiquated type. Enjoy these
                        light palletes and minimalist designs that underline the avant-garde lifestyle.
                    </p>

                    <div className="collSubTitle">
                        Leading Edge Living.
                    </div>
                </div>

                <div className="products modern">
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