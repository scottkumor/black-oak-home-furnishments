import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

    // trim the ' collection' part of the stringoff the end of the string so it can be used for unique classes
    let collection = props.collection.split(' ')[0];

    return (
        
        <article id={props.id} key={props.id} className={collection+"-cardWrap"}>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className={collection+"-cardImage"} />
            
            <section className={collection+"-detailsWrap"}>
                <div className={collection+"-title"}>{props.title}</div>
                <div className={collection+"-description"}>{props.description}</div>
                <div className={collection+"-category"}>{props.category}</div>
                <div className={collection+"-price"}>{props.price}</div>
                <p className={collection+"-desc"}></p>
                {/* <button className="bag-btn" data-id="1">
                    <FontAwesomeIcon icon={faCartPlus} />
                    <div> Add to Cart </div>
                </button> */}
            </section>
        </article>
        
    )

}