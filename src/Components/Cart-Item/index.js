import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import itemHandler, { itemRemover } from "./../../CartHelpers"


export default function CartItem(props) {

    let itemCount = props.count;

    const [counter, setCounter] = useState(itemCount);
    let incrementCounter = () => setCounter(counter => counter + 1);
    let decrementCounter = () => setCounter(counter => counter - 1);

    useEffect(() => {
        setCounter(itemCount)
    }, [itemCount])




    function chevronHandler(itemNum, operation, price) {

        console.log('handling chevron...')
        price = "$" + price;

        itemHandler(itemNum, operation, price);

        if (operation === "+") { incrementCounter() }
        if (operation === "-") { decrementCounter() }


    }

    return (

        <div className="cart-item" key={props.id}>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="" />
            <div className="wrap-one">
                <h4> {props.title} </h4>
                <h5 id="price" data-price={props.price}>${props.price} </h5>
                <span className="remove-item">remove</span>
            </div>
            <div className="wrap-two" onChange={props.onChange}>
                <FontAwesomeIcon onClick={() => chevronHandler(props.id, "+", props.price)} icon={faChevronUp} />
                <p id="count" >{counter} </p>
                <FontAwesomeIcon onClick={() => chevronHandler(props.id, "-", props.price)} icon={faChevronDown} />
            </div>
        </div>

    )

}