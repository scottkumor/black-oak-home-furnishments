import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'



export default class Products extends Component {
    render() {
        return (
            <section className="products">
                <div className="section-title">
                    <h2>Our Products</h2>
                </div>
                <div className="products-center">
                    <article className="product">
                        <div className="img-container">
                            <img src="./../../images/product-1.jpeg" alt="product-1" className="product-img"/>
                        </div>
                        <button className="bag-btn" data-id="1">
                            <FontAwesomeIcon icon={faCartPlus}/>
                            Add to Cart
                        </button>
                        <h3>Queen Bed</h3>
                        <h4>$1000</h4>
                    </article>
                </div>
            </section>
        );
    }
}