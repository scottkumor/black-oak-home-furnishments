import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class Menu extends Component {

    /* 
        possibly make expanded  menu options dynamic like the Collections, maybe write it to a json file so 
        it can be globally accessed
    */

    /* 
        ternary handleMenu onClicks: when I added the onClick to close the menu and the overlay, the close button did not
        trigger the onClick when the close btn itself was clicked. by adding this conditional, I was able
        to bypass the code not noticing that menu state needed to bubble up. onClick expects a function, so in order for the onClick to be
        ignored under certain conditions, the other option had to be null.     
    
        stopProps: in order for some elements to trigger handleMenu and others to ignore it, I had
        to use selective stopProps to prevent handleMenu to fire when I didn't want it to, such as when  blank
        space is clicked or text is clicked. 
    
    */

    constructor(props) {
        super(props);
        this.state = {
            drop: false,
        };

        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop() {

        this.setState(state => ({
            drop: !state.drop
        }))

    }

    render() {

        return (

            <div
                className={this.props.menu ? "menu-overlay menu-overlay-show" : "menu-overlay menu-overlay-hide"}
                onClick={this.props.menu ? this.props.handleMenu : null}
            >
                <div
                    className={this.props.menu ? "showMenu menu" : "menu"}
                    onClick={e => e.stopPropagation()}
                >
                    <span
                        className="close-menu"
                        onClick={(e => e.stopPropagation())}
                    >
                        <h1 className="menu-header">Navigation Menu</h1>
                        <FontAwesomeIcon
                            className="close"
                            onClick={this.props.handleMenu}
                            size="4x"
                            icon={faWindowClose}
                        />
                    </span>
                    <div
                        className="menu-links-wrap"
                        onClick={e => e.stopPropagation()}
                    >
                        <div
                            className="menu-links" 
                            onClick={this.props.handleMenu}
                        >
                            <Link to="/">
                                Home
                            </Link>
                            <Link to="/all">
                                See All Products
                            </Link>
                            <Link to="/collections">
                                See All Collections
                            </Link>
                        </div>
                        <div
                            className="dropdown-wrap"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="dropdown-toggle">
                                <h3>Furnishment Collections</h3>
                                <FontAwesomeIcon
                                    className={this.state.drop ? "dropdown-icon drop-open" : "dropdown-icon drop-closed"}
                                    size="2x"
                                    icon={faCaretRight}
                                    onClick={this.handleDrop}
                                />
                            </div>
                            <div
                                className={this.state.drop ? "dropdown-options drop-show" : "dropdown-options drop-hide"}
                                onClick={this.props.handleMenu}
                            >
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
        );
    }
}