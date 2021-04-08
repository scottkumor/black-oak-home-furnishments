import React, { Component } from "react";
import "./../templates.css"
import "./styles.css";
import ProductsDB from "./../../../products.json"
import Card from "./../../../Components/Card"
import { Link } from "react-router-dom";

export default class Ardence extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {

        
        let prodsArray = [];

        for (var i = 0; i < ProductsDB.length; i++) {
            if (ProductsDB[i].collection === "ardence collection") {
                prodsArray.push(ProductsDB[i])
            }
        }

        // trim the 'collection' off the end of the string so it can be used for unique classes
        let collection = prodsArray[0].collection.split(' ')[0];


        return (
            <div className={collection + "-pageWrap"}>

                <div className={collection + "-headWrap"}>
                    <div className={collection + "-collTitle"}>
                        The Ardence Collection
                    </div>

                    <p className={collection + "-collDescription"}>
                        The Ardence Collection is everything you asked for and more - we're offering up fun,
                        hip designs and quirky furnishments on a hipster's budget. Liven up your space with all
                        kinds of interesting products that will surely drum up some zeal in your home.
                    </p>

                    <div className={collection + "-collSubTitle"}>
                        Bring Passion to Life.
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