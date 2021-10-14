import React from 'react';
import './styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const iconPath = process.env.PUBLIC_URL + '/images/';

export default function Footer() {

    const scrollTop = () => {
        window.scrollTo(
            { 
                top: 0, 
                behavior: 'smooth' 
            }
        );
    }

    return (
        <>

            <div className="footer">

                <div className="scrollTop" onClick={scrollTop}> Back to Top </div>
                
                <div className="contentWrap">

                    
                    <div className="navigationWrap">
                        <div className="footerTitle">Site Navigation</div>
                        <div className="choiceWrap">
                            <Link className="link" to="/">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>Home</p>
                            </Link>
                            <Link className="link" to="/all">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>See All Products</p>
                            </Link>
                            <Link className="link" to="/collections">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>Go to Collections</p>
                            </Link>
                            {/* 
                        <Link className="link" to="/checkout">
                            <FontAwesomeIcon
                                className=""
                                icon={faCaretRight}
                            />
                            <p>Proceed to Checkout</p>
                        </Link>
                        */}
                        </div>
                    </div>
                    
                    <div className="furnishmentWrap">
                        <div className="footerTitle">Furnishment Collections</div>

                        <div className="choiceWrap">
                            <Link className="link" to="/ardence%20collection">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>Ardence Collection</p>
                            </Link>
                            <Link className="link" to="/ascendance%20collection">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>Ascendance Collection</p>
                            </Link>
                            <Link className="link" to="/executive%20collection">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>Executive Collection</p>
                            </Link>
                            <Link className="link" to="/modern%20collection">
                                <FontAwesomeIcon
                                    className=""
                                    icon={faCaretRight}
                                />
                                <p>Modern Collection</p>
                            </Link>
                        </div>
                    </div>
                </div>

                <img className="icon" src={`${iconPath}Logo.png`} alt="logo" />
            
            </div>
        </>
    );
}