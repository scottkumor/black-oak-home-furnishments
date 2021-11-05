import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Header from "./../Section-Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './styles.css'

const CheckoutModal = (props) => {

    const [open, setOpen] = useState(true);
    const [progress, setProgress] = useState(-1);
    const [info, setInfo] = useState({
        checkoutCart: [],
        checkoutTotal: 0,
        checkoutAddress: {},
        checkoutPayment: {}
    })


    const onOpenModal = () => {
        setOpen(true)
    };

    const onCloseModal = () => {
        setOpen(false);
        setProgress(0);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(parseInt(e.target.id))

        let btnProgressTracker = parseInt(e.target.id) + 1;

        if (parseInt(e.target.id) === 0) {
            setInfo(prevState => ({ ...prevState, checkoutCart: props.cart }));
            setInfo(prevState => ({ ...prevState, checkoutTotal: props.myTotal }));
            setProgress(btnProgressTracker);
        }


        if (parseInt(e.target.id) === 1) {
            let thisForm = document.getElementById("formOne")
            let addressFormColl = document.getElementsByClassName("addControl");

            let check = thisForm.checkValidity();

            if (check === true) {

                let addMap = new Map();

                for (let i = 0; i < addressFormColl.length; i++) {
                    // console.log(addressFormColl[i].name + " " + addressFormColl[i].value)
                    addMap.set(`${addressFormColl[i].name}`, addressFormColl[i].value)
                }

                setInfo(prevState => ({ ...prevState, checkoutAddress: Object.fromEntries(addMap) }));

                setProgress(btnProgressTracker);

            }

            else {
                thisForm.reportValidity();
            }

        }

        if (parseInt(e.target.id) === 2) {
            let thisForm = document.getElementById("formTwo")
            let paymentFormColl = document.getElementsByClassName("payControl");

            let check = thisForm.checkValidity();

            if (check === true) {

                let payMap = new Map();

                for (let i = 0; i < paymentFormColl.length; i++) {
                    payMap.set(`${paymentFormColl[i].name}`, paymentFormColl[i].value)
                }

                setInfo(prevState => ({ ...prevState, checkoutPayment: Object.fromEntries(payMap) }));

                setProgress(btnProgressTracker);

            }

            else {
                thisForm.reportValidity();
            }

        }

        else if (parseInt(e.target.id) >= 3 || parseInt(e.target.id) <= -1) {
            setInfo(
                prevState => ({
                    ...prevState,
                    checkoutCart: [],
                    checkoutTotal: 0,
                    checkoutAddress: {},
                    checkoutPayment: {}
                })
            )
        }

    }




    return (
        <div onClick={e => e.stopPropagation()} id="checkoutModal">
            <div className="banner-btn" onClick={onOpenModal}><p onClick={props.handleCart}>Proceed to Checkout</p></div>
            <Modal open={open} focusTrapped={false} closeOnEsc={true} showCloseIcon={false} blockScroll={true}>
                <FontAwesomeIcon className="closeCheckout" onClick={onCloseModal} size="4x" icon={faWindowClose} />

                <Header
                    header="checkout"
                    description="Review your cart items, quantites, and totals here."
                />

                <div className="checkoutContainer" id="formZero">

                    <div id="cart" className="cart-content" >

                        {/* -------------------------------------------------------------------------------------------------------- */}

                        {props.cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img src={process.env.PUBLIC_URL + `${item.image}`} alt={item.title} className="" />
                                <div className="wrap-one">
                                    <h4> {item.title} </h4>
                                    <h5 id="price"> ${item.price} </h5>
                                    <div className="btnsWrap">
                                        <span className="remove-item" onClick={() => props.removeItem(item.id)}>Remove</span>
                                    </div>
                                </div>
                                <div className="wrap-two" onChange={item.onChange}>
                                    <FontAwesomeIcon
                                        onClick={() => props.chevronHandler(item.id, "+", item.counter)}
                                        icon={faChevronUp}
                                    />
                                    <p id="count" >{item.counter} </p>
                                    <FontAwesomeIcon
                                        onClick={() => props.chevronHandler(item.id, "-", item.counter)}
                                        icon={faChevronDown}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* -------------------------------------------------------------------------------------------------------- */}


                    </div>
                    <div className="total totalWrap">
                        <h2> your total: </h2>
                        <h1 id="chkTotal"> ${props.myTotal} </h1>
                        <button onClick={handleSubmit} className="banner-btn zero" id="0">Confirm</button>
                    </div>

                </div>

                <div className={progress > 0 ? "" : "disabledDiv"}>
                    <Header
                        header="address"
                        description="Enter in your street address, unit number (if applicable), City, State, and Zip Code."
                    />
                    <form id="formOne"
                        className="addressWrap">
                        <fieldset className="addFieldset">
                            <legend className="legend"> Mailing address </legend>

                            <div className="addGroup">
                                <label htmlFor="addressOne">Street address</label>
                                <input className="addControl" id="addressOne" name="addressOne" type="text" tabIndex="-1" required />
                            </div>
                            <div className="addGroup radios">

                                <input type="radio" name="addRadio" id="addRadioSingle" defaultChecked />
                                <label htmlFor="addRadioSingle" id="addRadioSingleLabel" >Single Family Home</label>

                                <input type="radio" name="addRadio" id="addRadioOther" />
                                <label htmlFor="addRadioOther" id="addRadioOtherLabel" >Other Unit Type</label>

                                <div className="addReveal">
                                    <label htmlFor="addressTwo" id="adressTwoLabel">Unit type</label>
                                    <select defaultValue={""} className="addControl" name="addressTwo" tabIndex="-1">
                                        <option value="" disabled hidden required>Select</option>
                                        <option value="APT">APT - Apartment</option>
                                        <option value="BSMT">BSMT - Basement</option>
                                        <option value="BLDG">BLDG - Building</option>
                                        <option value="DEPT">DEPT - Department</option>
                                        <option value="FL">FL - Floor</option>
                                        <option value="FRNT">FRNT - Front</option>
                                        <option value="HNGR">HNGR - Hanger</option>
                                        <option value="KEY">KEY - Key</option>
                                        <option value="LBBY">LBBY - Lobby</option>
                                        <option value="LOT">LOT - Lot</option>
                                        <option value="LOWR">LOWR - Lower</option>
                                        <option value="OFC">OFC - Office</option>
                                        <option value="OTHER">Other</option>
                                        <option value="PH">PH - Penthouse</option>
                                        <option value="PIER">PIER - Pier</option>
                                        <option value="REAR">REAR - Rear</option>
                                        <option value="RM">RM - Room</option>
                                        <option value="SIDE">SIDE - Side</option>
                                        <option value="SLIP">SLIP - Slip</option>
                                        <option value="SPC">SPC - Space</option>
                                        <option value="STOP">STOP - Stop</option>
                                        <option value="STE">STE - Suite</option>
                                        <option value="TRLR">TRLR - Trailer</option>
                                        <option value="UNAVAILABLE">Unable to determine</option>
                                        <option value="UNIT">UNIT - Unit</option>
                                        <option value="UPPR">UPPR - Upper</option>
                                    </select>
                                </div>

                                <div className="addReveal">
                                    <label htmlFor="addressUnit" id="addressUnitLabel">Unit Number</label>
                                    <input className="addControl" id="addressUnit" name="addressUnit" type="text" tabIndex="-1" />
                                </div>

                            </div>
                            <div className="addGroup">
                                <label htmlFor="city">City</label>
                                <input className="addControl" id="addressCity" name="addressCity" type="text" tabIndex="-1" required />
                            </div>

                            <div className="addGroup">
                                <label htmlFor="state">State </label >
                                <select defaultValue={""} className="addControl" id="addressState" name="addressState" tabIndex="-1" required>
                                    <option value="" disabled hidden required>Select</option>
                                    <option value="AL">AL - Alabama</option>
                                    <option value="AK">AK - Alaska</option>
                                    <option value="AS">AS - American Samoa</option>
                                    <option value="AZ">AZ - Arizona</option>
                                    <option value="AR">AR - Arkansas</option>
                                    <option value="CA">CA - California</option>
                                    <option value="CO">CO - Colorado</option>
                                    <option value="CT">CT - Connecticut</option>
                                    <option value="DE">DE - Delaware</option>
                                    <option value="DC">DC - District of Columbia</option>
                                    <option value="FL">FL - Florida</option>
                                    <option value="GA">GA - Georgia</option>
                                    <option value="GU">GU - Guam</option>
                                    <option value="HI">HI - Hawaii</option>
                                    <option value="ID">ID - Idaho</option>
                                    <option value="IL">IL - Illinois</option>
                                    <option value="IN">IN - Indiana</option>
                                    <option value="IA">IA - Iowa</option>
                                    <option value="KS">KS - Kansas</option>
                                    <option value="KY">KY - Kentucky</option>
                                    <option value="LA">LA - Louisiana</option>
                                    <option value="ME">ME - Maine</option>
                                    <option value="MD">MD - Maryland</option>
                                    <option value="MA">MA - Massachusetts</option>
                                    <option value="MI">MI - Michigan</option>
                                    <option value="MN">MN - Minnesota</option>
                                    <option value="MS">MS - Mississippi</option>
                                    <option value="MO">MO - Missouri</option>
                                    <option value="MT">MT - Montana</option>
                                    <option value="NE">NE - Nebraska</option>
                                    <option value="NV">NV - Nevada</option>
                                    <option value="NH">NH - New Hampshire</option>
                                    <option value="NJ">NJ - New Jersey</option>
                                    <option value="NM">NM - New Mexico</option>
                                    <option value="NY">NY - New York</option>
                                    <option value="NC">NC - North Carolina</option>
                                    <option value="ND">ND - North Dakota</option>
                                    <option value="MP">MP - Northern Mariana Islands</option>
                                    <option value="OH">OH - Ohio</option>
                                    <option value="OK">OK - Oklahoma</option>
                                    <option value="OR">OR - Oregon</option>
                                    <option value="PA">PA - Pennsylvania</option>
                                    <option value="PR">PR - Puerto Rico</option>
                                    <option value="RI">RI - Rhode Island</option>
                                    <option value="SC">SC - South Carolina</option>
                                    <option value="SD">SD - South Dakota</option>
                                    <option value="TN">TN - Tennessee</option>
                                    <option value="TX">TX - Texas</option>
                                    <option value="UM">UM - United States Minor Outlying Islands</option>
                                    <option value="UT">UT - Utah</option>
                                    <option value="VT">VT - Vermont</option>
                                    <option value="VI">VI - Virgin Islands</option>
                                    <option value="VA">VA - Virginia</option>
                                    <option value="WA">WA - Washington</option>
                                    <option value="WV">WV - West Virginia</option>
                                    <option value="WI">WI - Wisconsin</option>
                                    <option value="WY">WY - Wyoming</option>
                                    <option value="AA">AA - Armed Forces Americas</option>
                                    <option value="AE">AE - Armed Forces Africa</option>
                                    <option value="AE">AE - Armed Forces Canada</option>
                                    <option value="AE">AE - Armed Forces Europe</option>
                                    <option value="AE">AE - Armed Forces Middle East</option>
                                    <option value="AP">AP - Armed Forces Pacific</option>
                                </select>
                            </div>

                            <div className="addGroup">
                                <label htmlFor="addressZip">ZIP code</label>
                                <input className="addControl" id="addressZip" name="addressZip" type="text" pattern="[\d]{5}(-[\d]{4})?" tabIndex="-1" required />
                            </div>

                            <button onClick={handleSubmit} type="submit" className="banner-btn one" id="1">Confirm</button>

                        </fieldset>
                    </form>
                </div>

                <div className={progress > 1 ? "" : "disabledDiv"}>
                    <Header
                        header="payment"
                        description="Enter in your card number, address, and billing information."
                    />

                    <form id="formTwo" onSubmit={e => e.preventDefault()} className="paymentWrap">
                        <fieldset className="payFieldset">
                            <legend className="legend">Payment Information</legend>
                            <div className="payGroup">
                                <label htmlFor="payOwner">Owner</label>
                                <input type="text" value="Black Oaks User" className="payControl" id="payOwner" name="payOwner" tabIndex="-1" readOnly="readonly" />
                            </div>
                            <div className="payGroup" id="card-number-field">
                                <label htmlFor="payCardNum">Card Number</label>
                                <input type="text" value="1234-5678-8765-4321" className="payControl" id="payCardNum" name="payCardNum" tabIndex="-1" readOnly="readonly" />
                            </div>
                            <div className="payGroup">
                                <label htmlFor="payCVV">CVV</label>
                                <input type="text" value="007" className="payControl" id="payCVV" name="payCVV" tabIndex="-1" readOnly="readonly" />
                            </div>

                            <div className="payGroup">
                                <label htmlFor="payCardMonth">Expiration Date</label>
                                <div className="payControlWrap">
                                    <select className="payControl" id="payCardMonth" name="payCardMonth" defaultValue={""} tabIndex="-1" required>
                                        <option value="" disabled hidden>Month</option>
                                        <option value="01">January</option>
                                        <option value="02">February </option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                    <select className="payControl" id="payCardYear" name="payCardYear" defaultValue={""} tabIndex="-1" required>
                                        <option value="" disabled hidden>Year</option>
                                        <option value="2020"> 2020</option>
                                        <option value="2021"> 2021</option>
                                        <option value="2022"> 2022</option>
                                        <option value="2023"> 2023</option>
                                        <option value="2024"> 2024</option>
                                        <option value="2025"> 2025</option>
                                    </select>
                                </div>
                            </div>

                            <button onClick={handleSubmit} type="submit" className="banner-btn two" id="2">Confirm</button>

                        </fieldset>
                    </form>
                </div>
                <div id="completeCheckout" className={progress > 2 ? "" : "disabledDiv"}>
                    <Link
                        onClick={onCloseModal}
                        id="3"
                        className="banner-btn three"
                        to={{
                            pathname: "/checkout",
                            myProps: info
                        }}
                    >
                        Complete Purchase
                    </Link>
                </div>


            </Modal>
        </div>
    );
}

export default CheckoutModal;