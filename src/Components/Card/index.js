import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

    // trim the 'collection' off the end of the string so it can be used for unique classes
    let set = props.collection.split(' ')[0];

    return (
        
        <article id={props.id} key={props.id} className={set+"-cardWrap"}>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className={set+"-cardImage"} />
            
            <section className={set+"-detailsWrap"}>
                <div className={set+"-title"}>{props.title}</div>
                <div className={set+"-description"}>{props.description}</div>
                <div className={set+"-category"}>{props.category}</div>
                <div className={set+"-price"}>{props.price}</div>
                <p className={set+"-desc"}></p>
                {/* <button className="bag-btn" data-id="1">
                    <FontAwesomeIcon icon={faCartPlus} />
                    <div> Add to Cart </div>
                </button> */}
            </section>
        </article>
        
    )

}