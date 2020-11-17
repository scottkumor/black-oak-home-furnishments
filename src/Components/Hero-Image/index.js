import React, { Component } from "react";
import "./styles.css";


export default class Hero extends Component {
    render() {
        return (
            <header className="hero">
                <div className="banner">
                    <h1 className="banner-title">Furniture Collection</h1>
                    <button className="banner-btn">Shop Pieces</button>
                </div>
            </header>
        );
    }
}