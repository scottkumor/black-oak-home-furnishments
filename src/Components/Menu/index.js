import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faCaretRight, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default function Menu(props) {

    /* 
        ternary handleMenu onClicks: when I added the onClick to close the menu and the overlay, the close button did not
        trigger the onClick when the close btn itself was clicked. by adding this conditional, I was able
        to bypass the code not noticing that menu state needed to bubble up. onClick expects a function, so in order for the onClick to be
        ignored under certain conditions, the other option had to be null.     
    
        stopProps: in order for some elements to trigger handleMenu and others to ignore it, I had
        to use selective stopProps to prevent handleMenu to fire when I didn't want it to, such as when  blank
        space is clicked or text is clicked. 
    
    */


    return (
        <div
            className={props.menu ? "menu-overlay menu-overlay-show" : "menu-overlay menu-overlay-hide"}
            onClick={props.menu ? props.handleMenu : null}
        >
            <div
                className={props.menu ? "showMenu menu" : "menu"}
                onClick={e => e.stopPropagation()}
            >
                <span
                    className="close-menu"
                >
                    <h1 className="menu-header">Navigation</h1>
                    <FontAwesomeIcon
                        className="close"
                        onClick={props.handleMenu}
                        size="4x"
                        icon={faWindowClose}
                    />
                </span>

                <div className="menu-links" >
                    <Link className="menu-link" to="/" onClick={props.menu ? props.handleMenu : null}>
                    <FontAwesomeIcon
                            className="menu-caret"
                            icon={faCaretSquareRight}
                        />
                        <p>Home</p>
                    </Link>
                    <Link className="menu-link" to="/all" onClick={props.menu ? props.handleMenu : null}>
                    <FontAwesomeIcon
                            className="menu-caret"
                            icon={faCaretSquareRight}
                        />
                        <p>See All Products</p>
                    </Link>
                </div>

                <h2>Furnishment Collections</h2>

                <div className="coll-options">

                    <Link className="coll-link" to="/ardence%20collection" onClick={props.menu ? props.handleMenu : null}>
                        <FontAwesomeIcon
                            className="coll-caret"
                            icon={faCaretRight}
                        />
                        <p>Ardence Collection</p>
                    </Link>
                    <Link className="coll-link" to="/ascendance%20collection" onClick={props.menu ? props.handleMenu : null}>
                        <FontAwesomeIcon
                            className="coll-caret"
                            icon={faCaretRight}
                        />
                        <p>Ascendance Collection</p>
                    </Link>
                    <Link className="coll-link" to="/executive%20collection" onClick={props.menu ? props.handleMenu : null}>
                        <FontAwesomeIcon
                            className="coll-caret"
                            icon={faCaretRight}
                        />
                        <p>Executive Collection</p>
                    </Link>
                    <Link className="coll-link" to="/modern%20collection" onClick={props.menu ? props.handleMenu : null}>
                        <FontAwesomeIcon
                            className="coll-caret"
                            icon={faCaretRight}
                        />
                        <p>Modern Collection</p>
                    </Link>
                    <Link className="menu-link" to="/collections" onClick={props.menu ? props.handleMenu : null}>
                        <FontAwesomeIcon
                            className="menu-caret"
                            icon={faCaretSquareRight}
                        />
                        <p>See All Collections</p>
                    </Link>

                </div>

            </div>
        </div>
    )
}