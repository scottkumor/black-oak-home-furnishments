import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { chevronHandler } from "./../../CartHelpers.js"

export default function CartItem(props) {

//TO DO persistent counts on refresh
    return (

        <div className="cart-item" key={props.id}>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="" />            
            <div>
                <h4> {props.title} </h4>
                <h5 id="price">${props.price} </h5>
                <span className="remove-item">remove</span>
            </div>
            <div>
                <FontAwesomeIcon onClick={() => chevronHandler("up", props.price)}icon={faChevronUp} />
                <p className="item-amount" id="count"> 1 </p>
                <FontAwesomeIcon onClick={() => chevronHandler("down", props.price)}icon={faChevronDown} />
            </div>
        </div>

    )

}