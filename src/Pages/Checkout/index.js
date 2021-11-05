import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { lsCart, cartClear } from './../../CartHelpers';

import "./styles.css"


const Checkout = () => {

    const location = useLocation();
    const myProps = location.myProps;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        cartClear();
    }, []);


    return (
        <>

            <div className="div">You checked out!</div>

            {myProps.checkoutCart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <h4> {item.title} </h4>

                    <img src={process.env.PUBLIC_URL + `${item.image}`} alt={item.title} className="" />
                    <div className="wrap-one">
                        <h4> {item.title} </h4>
                        <h5 id="price"> ${item.price} </h5>

                    </div>

                    <div className="wrap-two" onChange={item.onChange}>

                        <p id="count" >{item.counter} </p>

                    </div>
                </div>
            ))}

        </>
    )

}


export default Checkout;