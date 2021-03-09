import React, { Component } from "react";
import "./../templates.css"
import "./styles.css";
import ProductsDB from "./../../../products.json"
import Card from "./../../../Components/Card"
import { Link } from "react-router-dom";

export default class Executive extends Component {

    render() {

        let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "executive collection") {
                prodsArray.push(ProductsDB[i])
            }
        }

        // trim the 'collection' off the end of the string so it can be used for unique classes
            let set = prodsArray[0].collection.split(' ')[0];

        return (
            <div className={set+"-pageWrap"}>

                <div className={set+"-headWrap"}>
                    <div className={set+"-collTitle"}>
                        The Executive Collection
                    </div>

                    <p className={set+"-collDescription"}>
                        The Executive Collection is all about class - each of these products exhudes
                        a presence that can only be matched in the upper echelons. Now you
                        too can be high society when you bring any of these fine furnishments into
                        your home.
                    </p>

                    <div className={set+"-collSubTitle"}>
                        Project Greatness.
                    </div>
                </div>

                <div className={set+"-cardsWrap"}>
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
                        // description={item.description} short desc
                        // link={item.link} link to its own modal? page?
                        // icon={item.icon} icon based on category
                        />
                    ))}
                </div>
                <Link to="/collections" className={set+"-backBtn"}>Back to Collections</Link>

            </div>
        )
    }
}