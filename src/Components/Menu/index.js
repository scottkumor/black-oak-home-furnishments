import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class Menu extends Component {

    // possibly make expanded  menu options dynamic like the Collections, maybe write it to a json file so 
    // it can be globally accessed

    // click on overlay to close menu too

    render() {

        return (
            <>
                <div className={this.props.menu ? "menu-overlay menu-overlay-show" : "menu-overlay menu-overlay-hide"} >
                    <div className={this.props.menu ? "showMenu menu" : "menu"}>
                        <span className="close-menu" onClick={this.props.handleMenu}>
                            <h1 className="menu-header">Navigation Menu</h1>
                            <FontAwesomeIcon className="close" size="4x" icon={faWindowClose} />
                        </span>
                        <div className="menu-links">
                            <Link to="/">
                                Home
                            </Link>
                            <Link to="/all">
                                See All Products
                            </Link>
                            <Link to="/collections">
                                See All Collections
                            </Link>
                            <div className="dropdown-wrap">
                                <div className="dropdown-toggle">
                                    <div>Furnishment Collections</div>
                                    <FontAwesomeIcon className="dropdown" size="2x" icon={faCaretDown} />
                                </div>
                                <div className="dropdown-options">
                                    <Link to="/executive%20collection">
                                        Executive Collection
                                </Link>
                                    <Link to="ardence%20collection">
                                        Ardence Collection
                                </Link>
                                    <Link to="/ascendance%20collection">
                                        Ascendance Collection
                                </Link>
                                    <Link to="/modern%20collection">
                                        Modern Collection
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}