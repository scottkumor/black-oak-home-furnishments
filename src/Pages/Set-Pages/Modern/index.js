import React, { Component } from "react";
import "./../templates.css"
import "./styles.css";
import ProductsDB from "./../../../products.json"
import Card from "./../../../Components/Card"
import { Link } from "react-router-dom";

export default class Modern extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {

        let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "modern collection") {
                prodsArray.push(ProductsDB[i])
            }
        }

        // trim the 'collection' off the end of the string so it can be used for unique classes
        let collection = prodsArray[0].collection.split(' ')[0];

        return (
            <div className={collection + "-pageWrap"}>

                <div className={collection + "-headWrap"}>
                    <div className={collection + "-collTitle"}>
                        The Modern Collection
                    </div>

                    <p className={collection + "-collDescription"}>
                        The Modern Collection is here - contemporary styles, shapes, and colors that
                        bring any space into the 21st century. Anyone catching a glimpse of these stylish
                        furnishments will know they aren't dealing with the antiquated type. Enjoy these
                        light palletes and minimalist designs that underline the avant-garde lifestyle.
                    </p>

                    <div className={collection + "-collSubTitle"}>
                        Leading Edge Living.
                    </div>
                </div>

                <div className={collection + "-cardsWrap"}>
                    {prodsArray.map(item => (
                        <Card
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            collection={item.collection}
                            price={"$" + item.price}
                            image={item.image}
                            category={item.category}
                            type={item.type}
                            blurb={item.blurb}
                        // icon={item.icon} icon based on category
                        />
                    ))}
                </div>
                <Link to="/collections" className={collection + "-backBtn"}>Back to Collections</Link>

            </div>
        )
    }
}