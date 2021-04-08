import React, { Component } from "react";
import "./../templates.css"
import "./styles.css";
import ProductsDB from "./../../../products.json"
import Card from "./../../../Components/Card"
import { Link } from "react-router-dom";

export default class Ascendance extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        
        let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "ascendance collection") {
                prodsArray.push(ProductsDB[i])
            }
        }

                // trim the 'collection' off the end of the string so it can be used for unique classes
                let collection = prodsArray[0].collection.split(' ')[0];


        return (
            <div className={collection + "-pageWrap"}>

                <div className={collection + "-headWrap"}>
                <div className={collection + "-collTitle"}>
                        The Ascendance Collection
                    </div>

                    <p className={collection + "-collDescription"}>
                        The Ascendance Collection has been elevated. Rising to meet its sleek designs and
                        tasteful styles are clean lines and elegant shapes that will bring your comfort to new heights. 
                        We'll let your home achieve the ultimate altitude of interior fashion for not so lofty prices.
                    </p>

                    <div className={collection + "-collSubTitle"}>
                        Mobility Ever Upward.
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
                        // link={item.link} link to its own modal? page?
                        // icon={item.icon} icon based on category
                        />
                    ))}
                </div>
                <Link to="/collections" className={collection + "-backBtn"}>Back to Collections</Link>

            </div>
        )
    }
}