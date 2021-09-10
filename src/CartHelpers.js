import ProductsDB from "./products.json"
//import getTotal from './Components/Cart'

//the master cart to export to DOM
export let cart = [];

// logged in user's working cart 
export let lsCart = localStorage.getItem('blackOaksUser') || '[]';

// function that handles cart operations
export function cartHandler() {

    // makes sure we get the cart in its current state
    lsCart = localStorage.getItem('blackOaksUser')

    // checks if the logged in user has a cart in LS, if not make one, set LS as empty array
    if (lsCart === '[]'
        //|| !lsCart
    ) {
        localStorage.setItem('blackOaksUser', "[]")
    }

    /*  after setting up an empty array, push into it all IDs of items in lsCart.
        I need their IDs, but Object.keys creates a seperate array for each object's
        key (located at index 0 for each one) so I need to not only cast it to an int 
        but push it to my new array where it can be looped through and check in the DB. 
        I then needed to pull up the associatedcount for this user's cart items and 
        match them to the object, passing all that data down to the CartItem component 
        so it can render the item correctly in the cart.*/


    else if (lsCart !== '[]') {

        cart = [];
        let toCheckIDs = [];
        let processor = JSON.parse(lsCart) || [];

        for (let i = 0; i < processor.length; i++) {

            toCheckIDs.push(parseInt(Object.keys(processor[i])[0]))

        }

        for (let j = 0; j < ProductsDB.length; j++) {

            for (let k = 0; k < toCheckIDs.length; k++) {

                if (ProductsDB[j].id === toCheckIDs[k]) {


                    /*
                        the products will be rendered 
                        based on a map function that will 
                        in turn render each product seperately
                    */
                    cart.push(ProductsDB[j]);
                }
            }
        }
        // begin assigning the values of the item counts to the objects in the cart, essentially combining the two
        for (let i = 0; i < cart.length; i++) {



            for (let j = 0; j < processor.length; j++) {


                if (cart[i].id === parseInt(Object.keys(processor[j]))) {



                    Object.assign(cart[i], {
                        counter: parseInt(Object.values(processor[j]))
                    });
                }
            }
        }
    }
}

/* function that adds or subtracts an item to local storage, sets the ID as the key and countof the objects in the cart
    as the value. if the key is not present, add it as a new item, but if it is present, iterate the 
    items count in the cart instead. this will also look to see if the item will beremoved via button press or via
    the count hitting zero by running a seperate removing function.*/

export default function itemHandler(itemNum, operation) {


    let toCheckIDs = [];
    let processor = JSON.parse(lsCart) || [];

    /* if there is nothing in the cart at all, create a new Object.*/
    if (!processor[0]) {

        let count = 1;
        const countInit = { [itemNum]: count }

        for (var i = 0; i < ProductsDB.length; i++) {

            if (itemNum === ProductsDB[i].id) {
                lsCart = JSON.parse(lsCart)

                lsCart.push(countInit)

                localStorage.setItem('blackOaksUser', JSON.stringify(lsCart))

                lsCart = localStorage.getItem('blackOaksUser')
            }
        }
    }

    //if there is at least one item in the cart
    if (processor[0]) {

        // setting a boolean to check for if a piece of logic has been executed inside the non-matching loop
        let ran = false;

        //push all IDs of cart into array for checking
        for (let i = 0; i < processor.length; i++) {

            toCheckIDs.push(parseInt(Object.keys(processor[i])[0]));

        }

        // loop through IDs and find a match if there is one
        for (let j = 0; j < toCheckIDs.length; j++) {

            if (toCheckIDs[j] === itemNum) {

                /*  if the itemNum is matched with the current iteration of the ID Checker, 
                    loop through the cart to determine what item to manipulate */
                for (let k = 0; k < processor.length; k++) {

                    // upon finding the item the cart aready has, find its current count by its ID
                    let currCount = parseInt(Object.values(processor[k])[0])

                    /*runs this code as long as the current iteration of the ID Checker 
                    still matches the ID of the item from the lsCart we are about to manipulate */
                    if (toCheckIDs[j] === parseInt(Object.keys(processor[k]))) {

                        // increment the count of the item we are about to manipulate

                        if (operation === '+') {
                            currCount++
                        }
                        if (operation === '-') {
                            currCount--
                        }
                        if (currCount < 1 && operation === "-") {
                            //if there is only one item, skip to the remover function and break the fn
                            itemRemover(parseInt(Object.keys(processor[k])));
                            break;
                        }

                        // sets the new 'count' variable overtop the matched item's current count at this iteration
                        processor[k][itemNum] = currCount;

                        /* find where this item's position is in the lsCart array AKA processor.
                            this is needed so that this code does not re-order the cart, therefore
                            re-ordering the map of items in the cart. for the user this would be confusing
                            as they would not know which item they put in the cart first. */
                        let currIndex = processor.indexOf(processor[k]);
                        if (currIndex !== -1) {
                            processor.splice(currIndex, 1, processor[k])
                        }

                        // re-stringify the parsed lsCart
                        lsCart = JSON.stringify(processor)

                    }
                }
            }

            /*  if the itemNum is not matched with the current iteration of the ID Checker 
                and this piece of code has not ran yet, it is safe to assume we can add a new item to the cart.
                create a new object with the itemNum AKA the ID as the key and a count of 1 as the value.
                this will allow it to be manipulated later on just like the others before it.  as long
                as the the itemNum still matches an ID in the database, we push to processor AKA the 
                parsed lsCart, which is then stringified.*/

            if (toCheckIDs[j] !== itemNum && ran === false) {
                ran = true;

                if (toCheckIDs.indexOf(itemNum) === -1) {
                    const objInit = { [itemNum]: 1 }

                    for (var l = 0; l < ProductsDB.length; l++) {

                        if (itemNum === ProductsDB[l].id) {

                            processor.push(objInit)

                            lsCart = JSON.stringify(processor)

                        }
                    }
                }
            }
        }
    }


    localStorage.setItem('blackOaksUser', lsCart)
    toCheckIDs = [];
    processor = JSON.parse(lsCart) || [];

    cartHandler();
}

export function cartClear() {

    localStorage.clear();
    localStorage.setItem('blackOaksUser', "[]")
    cart = [];
    cartHandler();

}

export function itemRemover(id) {

    let toCheckIDs = [];

    let processor = JSON.parse(lsCart);

    for (let i = 0; i < processor.length; i++) {
        toCheckIDs.push(parseInt(Object.keys(processor[i])[0]));
    }

    for (let j = 0; j < toCheckIDs.length; j++) {

        if (id === toCheckIDs[j]) {

            for (let k = 0; k < processor.length; k++) {

                    /* once we determine the correct item to remove, we need to
                    next figure out where to splice the array so that when
                    the item is removed, the array does not reorder. we reset
                    lsCart to the new array.*/

                if (toCheckIDs[j] === parseInt(Object.keys(processor[k]))) {

                    let currIndex = processor.indexOf(processor[k]);

                    processor.splice(currIndex, 1)

                    localStorage.setItem('blackOaksUser', JSON.stringify(processor))
                }
            }
        }
    }

    // if there is only one item in the cart, triggers clearing fn
    if (processor.length < 1) {
        cartClear();
    }

    cartHandler();

}