import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function CartItem(props) {



    return (

        <div className="cart-item" key={props.id}>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="" />            
            <div>
                <h4> {props.title} </h4>
                <h5> {props.price} </h5>
                <span className="remove-item">remove</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faChevronUp} />
                <p className="item-amount">1</p>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>

    )

}