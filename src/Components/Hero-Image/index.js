import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


export default function Hero(props) {

    return (
        <div className={`hero-${props.tag}`}>
            <div className="banner">
                <h1 className="banner-title">{props.heading}</h1>
                <Link to={props.link} className="banner-btn">{props.subHeading}</Link>
            </div>
        </div>
    );
}
