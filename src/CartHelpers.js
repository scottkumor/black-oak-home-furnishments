import ProductsDB from "./products.json"

//the master cart
export let cart = [{ '1': 1 }, { '18': 4 }];


let getter = localStorage.getItem('blackOaksUser');

export function cartHandler() {

    // checks if the logged in user has a cart in LS, if not make one
    if (!getter) { localStorage.setItem('blackOaksUser', JSON.stringify(cart)); }

    else if (getter.length) {

        // have to parse to get workable data, turns the string into an array of objects
        let userCart = JSON.parse(getter)
        //get the values stored in each object in the array
        let pulledObjects = Object.values(userCart)
        // id numbers corresponding to items in the DB
        let toCheckIDs = [];
        // pre-processed cart full of objects


        /* 
            loop through an array of my pulled Objects.
            I need their IDs, but Object.keys creates a seperate array for each object's
            key (located at index 0 for each one) so I need to not only cast it to an int 
            but push it to a new array where it can be looped through and check in the DB. 
            I then needed to pull up the associatedcount for this user's cart items and 
            match them to the object, passing all that data down to the CartItem component 
            so it can render the item correctly in the cart.            
        */

        for (let i = 0; i < pulledObjects.length; i++) {

            toCheckIDs.push(parseInt(Object.keys(pulledObjects[i])[0]));

        }
    

        /* 
            loop through an array of my pulled Objects.
            I need their IDs, but Object.keys creates a seperate array for each object's
            key (located at index 0 for each one) so I need to not only cast it to an int 
            but push it to a new array where it can be looped through and check in the DB. 
            I then needed to pull up the associatedcount for this user's cart items and 
            match them to the object, passing all that data down to the CartItem component 
            so it can render the item correctly in the cart.            
        */

        for(let j=0; j <  ProductsDB.length; j++){
            
            for (let k=0; k < toCheckIDs.length; k++){

                if (ProductsDB[j].id === toCheckIDs[k]){
                    
                    console.log(ProductsDB[j]);

                    /*
                        the products will be rendered 
                        based on a map function that will 
                        in turn render each product seperately
                    */

                }
            }
        }
    }


// TODO refactor add item to only append the values int eh LS entry with just an ID and count
/*

May need to use this
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 
 */

// -------------------REFACTOR ALL CODE BELOW THIS LINE---------------------------------------







    //     if (localStorage.length && localStorage.getItem('USER')) {
    //         for (var i = 0; i < localStorage.length; i++) {
    //             // let itemToPush = JSON.parse(localStorage.getItem(localStorage.key(i)))
    //             // cart.push(itemToPush)

    //         }

    //         /*
    //         storeInLocalStorage(item, keyAndvalue) {
    //     var data = localStorage.getItem('item');

    //     data = data ? JSON.parse(data) : [];

    //     data.push(keyAndValue);

    //     localStorage.setItem(item, JSON.stringify(data));
    // }
    //         */


    //         getTotal();



}


// function that adds an item to local storage, sets the title as the key and object itself as the value.
// if the key is not present, add it, but if it is present, iterate the items count in the cart instead.
export default function addItemToCart(itemNum) {

    for (var i = 0; i < ProductsDB.length; i++) {

        if (itemNum === ProductsDB[i].id) {

            let itemID = (ProductsDB[i].id).toString();

            let countInit =
            {
                'id': itemID,
                'count': 1
            }


            if (!localStorage.getItem(`${ProductsDB[i].id}`)) {
                localStorage.setItem(`Username`, JSON.stringify(countInit));
                cartHandler();
            }
            else {
                console.log("add addition logic, item already in storage")
            }
        }

    }
}




let prices = [];
export let total = 0;

export function getTotal() {

    /*
        TO DO assign counts to items coming in from cart, use math to first
        multiply own item count by base price then push them to prices where
        it will do its own summation
    */
    total = 0;
    prices = [];

    if (cart.length) {
        for (var j = 0; j < cart.length; j++) {

            console.log(cart[j])

            // let basePrice = cart[j].price;
            // console.log(basePrice);

            // let calculatedPrice = basePrice * itemCount
            // console.log(calculatedPrice);

            // prices.push(calculatedPrice);


        }

        //console.log(prices);

        // Getting sum of prices
        let sum = prices.reduce(function (a, b) {
            return a + b;
        }, 0);

        //rounding to two decimal places
        total = sum
        console.log(total);

    }
    else {
        total = 0
    }
    console.log('totaled')
}
// function getTotal(){
//     console.log('total test logger')
// }







// yotube tutorial test code

// const cartBtn  = document.querySelector('.cart-btn');
// const clearcartBtn  = document.querySelector('.clear-cart');
// const cartOverlay  = document.querySelector('.cart-overlay');
// const cartItems  = document.querySelector('.cart-items');
// const cartTotal  = document.querySelector('.cart-total');
// const cartContent  = document.querySelector('.cart-content');
// const cartDOM  = document.querySelector('.cart');

// const productsDOM  = document.querySelector('.products-center');

// console.log('typeof testObject: ' + typeof testObject);
// console.log('testObject properties:');

// for (var prop in testObject) {
//   console.log('  ' + prop + ': ' + testObject[prop]);
// }



// cart.push(JSON.parse(retrievedObject1))
// cart.push(JSON.parse(retrievedObject2))

// console.log('typeof retrievedObject: ' + typeof retrievedObject);
// console.log('Value of retrievedObject: ' + retrievedObject);


//getting products pure JS not local DB
// class Products {
//   async getProducts(){
//     try {
//       let result = await fetch(ProductsDB);
//       let data = await result.text();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

//display products
// class UI {

// }

//local storage
// class Storage {

// }

// listener
// document.addEventListener("DOMContentLoaded", ()=>{

//   //const ui = new UI ()
//   // const products = new Products ()

//   //get all products
//   // products.getProducts().then(data => console.log(data))
// })