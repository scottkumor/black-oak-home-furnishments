import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import ProductsDB from "./products.json"

//the master cart
export let cart = [];
let prices = [];
export let total = 0;

export function cartHandler() {
    cart = [];
    // loop through localStorage, effectively the pre-processed cart, push all items as objects into the cart array. 
    // the products will be rendered based on a map function that will in turn render each product seperately

    if (localStorage.length) {
        for (var i = 0; i < localStorage.length; i++) {

            cart.push(JSON.parse(localStorage.getItem(localStorage.key(i))))

        }
    }
    getTotal();

}


// function that adds an item to local storage, sets the title as the key and object itself as the value.
// if the key is not present, add it, but if it is present, iterate the items count in the cart instead.
export default function addItemToCart(itemNum) {

    for (var i = 0; i < ProductsDB.length; i++) {

        if (itemNum === ProductsDB[i].id) {

            if (!localStorage.getItem(`${ProductsDB[i].title}`)) {
                localStorage.setItem(`${ProductsDB[i].title}`, JSON.stringify(ProductsDB[i]));
                cartHandler();
            }
            else {
                console.log("add addition logic, item already in storage")
            }
        }

    }
}


function getTotal() {

    
    total = 0;
    prices = [];

    if (cart.length) {
        for (var j = 0; j < cart.length; j++) {
            prices.push(cart[j].price)

            // Getting sum of prices
            let sum = prices.reduce(function (a, b) {
                return a + b;
            }, 0);

            //rounding to two decimal places
            total = sum.toFixed(2);
        }
    }
    else{total=0}
}



export function chevronHandler(direction, originalPrice){
   
    let currCount = document.querySelector("#count").innerHTML;
    let newPrice = 0


    if(direction ==="up"){
        
        currCount++
        document.querySelector("#count").innerHTML = currCount;
        
        newPrice = currCount * originalPrice;
        document.querySelector("#price").innerHTML = "$"+ newPrice.toFixed(2);

        getTotal();
    }
    if(direction ==="down" && currCount > 0){
        
        currCount--
        document.querySelector("#count").innerHTML = currCount;

        newPrice = currCount * originalPrice;
        document.querySelector("#price").innerHTML = "$"+ newPrice.toFixed(2);

        getTotal();
    }

    if (currCount <=0){
        //logic to remove from local storage
        console.log("remove");
    }

    else if (currCount === 1){
        document.querySelector("#price").innerHTML = "$"+ originalPrice;
    }

}















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