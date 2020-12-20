import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function Product(props) {
    return (
        <article className="product" id={props.id} data-type={props.type}>
            <div className="img-container">
                <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="product-img" />
            </div>
            {/* <button className="bag-btn" data-id="1">
                <FontAwesomeIcon icon={faCartPlus} />
                Add to Cart
            </button> */}
            <h3>{props.title}</h3>
            <h3>{props.category}</h3>
            <h4>{props.set}</h4>
            <h4>${props.price}</h4>
            {/* add one for type that comes in as an icon */}
            
            {/* <p> {props.description}</p> */}
        </article>
    )
}

export default Product;