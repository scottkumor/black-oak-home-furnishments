import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal } from 'react-responsive-modal';
import addItemToCart from "./../../CartHelpers.js"
import 'react-responsive-modal/styles.css';
import "./styles.css"



function Product(props) {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const myRef = React.useRef(null);

    console.log()
    return (
        <>
            <div ref={myRef} className="reference"/>
            <article className="product" key={props.id} data-type={props.type}>
                <div className="img-container">
                    <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="product-img" />
                    {/* <button className="bag-btn" data-id="1">
                        <FontAwesomeIcon icon={faCartPlus} />
                        <div> Add to Cart </div>
                    </button> */}
                    <button onClick={() => addItemToCart(props.id)} className="bag-btn" data-id={props.id}>
                    <FontAwesomeIcon icon={faCartPlus} />
                        Add to Cart
                    </button>
                    <button onClick={onOpenModal} className="modalBtn">View Details</button>
                </div>
                
                <h3>{props.title}</h3>
                <h3>{props.category}</h3>
                <h4>{props.collection}</h4>
                <h4>{props.price}</h4>
                {/* add one for type that comes in as an icon */}

                {/* <p> {props.description}</p> */}

            </article>
        
            <Modal open={open} onClose={onCloseModal} center container={myRef.current} focusTrapped={false}>
                <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="product-img" />
                <div className="modalContainer">
                    <h1 className="modalTitle">{props.title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                        
                        {/* <p> {props.description}</p> */}
                    </p>


                    <div className="modalDetails">
                        <h1>{props.price}</h1>

                        <button className="modalCartBtn" data-id="1">
                            <FontAwesomeIcon icon={faCartPlus} />
                            <div> Add to Cart </div>
                        </button>
                        
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Product;