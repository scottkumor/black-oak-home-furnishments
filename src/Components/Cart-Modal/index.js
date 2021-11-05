import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './styles.css'

const CartModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    
        return (
            <div>
                <button className="modalView" onClick={onOpenModal}>View</button>
                <Modal open={open} onClose={onCloseModal} focusTrapped={true} center blockScroll={true}>
                <div className="modalContainer">
                    <h1 className="modalTitle">{props.title}</h1>
                    <div className="modalWrap">
                        <img src={process.env.PUBLIC_URL + `${props.image}`} alt={props.title} className="modal-img" />
                        <div className="modalDetails">
                            <p className="modalDesc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.

                                {/* <p> {props.description}</p> */}
                            </p>
                            <div className="modalPurchase">
                                <h1 className="modalPrice">{props.price}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            </div>
        );
    }

    export default CartModal;