import ProductsDB from "./products.json"


// function that adds an item to local storage, sets the title as the key and object itself as the value.
// if the key is not present, add it, but if it is present, iterate the items count in the cart instead.
export default function addItemToCart(itemNum) {

    for (var i = 0; i < ProductsDB.length; i++) {

        if (itemNum === ProductsDB[i].id) {
            if (!localStorage.getItem(`${ProductsDB[i].title}`))
                localStorage.setItem(`${ProductsDB[i].title}`, JSON.stringify(ProductsDB[i]));
            else {
                console.log("add addition logic, item already in storage")
            }
        }


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