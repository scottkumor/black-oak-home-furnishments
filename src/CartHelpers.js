import ProductsDB from "./products.json"


//the master cart to export to DOM
export let cart = [];

// logged in user's working cart init
let lsCart = localStorage.getItem('blackOaksUser') || '[]';

// function that handles cart operations
export function cartHandler() {

    // makes sure we get the cart in its current state
     lsCart = localStorage.getItem('blackOaksUser')

    // checks if the logged in user has a cart in LS, if not make one, set LS as empty array
    if (lsCart === '[]') {
        localStorage.setItem('blackOaksUser', "[]")
    }
        /* 
            after setting up an empty array, push into it all IDs of items in lsCart.
            I need their IDs, but Object.keys creates a seperate array for each object's
            key (located at index 0 for each one) so I need to not only cast it to an int 
            but push it to my new array where it can be looped through and check in the DB. 
            I then needed to pull up the associatedcount for this user's cart items and 
            match them to the object, passing all that data down to the CartItem component 
            so it can render the item correctly in the cart.            
        */

        cart = [];
        let toCheckIDs = [];
        let processor = JSON.parse(lsCart) || [];
        for (let i = 0; i < processor.length; i++) {

            toCheckIDs.push(parseInt(Object.keys(processor[i])[0]))

        }

        for (let j = 0; j < ProductsDB.length; j++) {

            for (let k = 0; k < toCheckIDs.length; k++) {

                if (ProductsDB[j].id === toCheckIDs[k]) {

                    cart.push(ProductsDB[j]);
                    /*
                        the products will be rendered 
                        based on a map function that will 
                        in turn render each product seperately
                    */

                }
            }
        }

    getTotal();
}

// function that adds an item to local storage, sets the title as the key and object itself as the value.
// if the key is not present, add it, but if it is present, iterate the items count in the cart instead.


export default function addItemToCart(itemNum) {

    let countInit =
    {
        [itemNum]: 1
    }

    for (var i = 0; i < ProductsDB.length; i++) {

        if (itemNum === ProductsDB[i].id && !lsCart.length) {

            /* If lsCart comes in as an empty array, push this item into the array and put in LS */

            lsCart.push(countInit)
            localStorage.setItem('blackOaksUser', JSON.stringify(lsCart))
            lsCart = localStorage.getItem('blackOaksUser')

        }

        else if (itemNum === ProductsDB[i].id) {

            lsCart = JSON.parse(lsCart)

            lsCart.push(countInit)

            localStorage.setItem('blackOaksUser', JSON.stringify(lsCart))

            lsCart = localStorage.getItem('blackOaksUser')

        }

    }

    cartHandler();

}


// master total to export to DOM
export let total = 0;

export function getTotal() {

    console.log("totaling")
    //set prices to empty array to ensure accurate totaling
    let prices = [];

    // get the products DB so we can check price on ID pulled from local lsCart
    let currCart = JSON.parse(lsCart) || []

    /* 
        loop through the current cart with the goal of multiplying the product's
        price and its quantity in the cart. Used the same code above in cartHandler
        to check the ID of the product in the lsCart that the j loop condition meets.
        once it finds the ID, it is set as the new prodPrice  and is 
        multiplied buy the current carts quantity pulled from the index of the current lsCart object.
        All o fhtese are pushed as new prices to the exported prices array.
    */
    for (var i = 0; i < currCart.length; i++) {

        let prodPrice = 0;

        for (var j = 0; j < ProductsDB.length; j++) {
            if (parseInt(Object.keys(currCart[i])[0]) === ProductsDB[j].id) {
                prodPrice = ProductsDB[j].price
            }
        }

        let prodMath = (prodPrice) * (parseInt(Object.values(currCart[i])[0]))
        prices.push(prodMath)
    }

    // use array.reduce to summate all prices in the prices array
    let sum = prices.reduce(function (a, b) {
        return a + b;
    }, 0);

    //rounding to two decimal places, then setting the total to be exported to the DOM
    total = sum.toFixed(2);

}
