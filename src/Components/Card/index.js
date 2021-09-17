import React from 'react'

export default function Card(props) {

    // trim the ' collection' part of the string off the end so it can be used for unique classes.
    // triggers when split method sees a space and cuts off everything else startting at the 0 position
    let collection = props.collection.split(' ')[0];

    return (
        
        <article id={props.id} key={props.id} className={collection+"-cardWrap"}>
            <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className={collection+"-cardImage"} />
            
            <section className={collection+"-detailsWrap"}>
                <div className={collection+"-cardTitle"}>{props.title}</div>
                <div className={collection+"-blurb"}>{props.blurb}</div>
                {/* <div className={collection+"-category"}>{props.category}</div> */}
                <div className={collection+"-price"}>{props.price}</div>
                {/* <button onClick={() => itemHandler(props.id, "+")} className="bag-btn">
                    <FontAwesomeIcon icon={faCartPlus} />
                    <div> Add to Cart </div>
                </button> */}
            </section>
        </article>
        
    )

}