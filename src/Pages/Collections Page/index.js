import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./styles.css"
import Product from "./../../Components/Product/index"
import Hero from "./../../Components/Hero-Image/index"
import Header from "./../../Components/Section-Header/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ProductsDB from "./../../products.json"


export default function Collections() {


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    
    //-------- final master global list of collections with filled in products
    let sortedCollections = [];

    //-------- pull the DB and map to a new array
    let productsArray = [];
    ProductsDB.map(item => productsArray.push(item));

    /*-------- loop through products array and look for collections, add them to an array if they dont exist yet */
    let rawCollections = [];
    let newCollection = [];

    for (var i = 0; i < productsArray.length; i++) {

        //simplify the object by creating new variable
        newCollection = productsArray[i].collection

        //push the new collection into an array
        rawCollections.push([newCollection, []]);

        //reset the the new collection to an empty string for the next iterable
        newCollection = "";

    }

    /*-------- loop through products array and push product object into collection sub-array based on category */
    for (var ii = 0; ii < productsArray.length; ii++) {

        for (var a = 0; a < rawCollections.length; a++) {

            if (productsArray[ii].collection === rawCollections[a][0]) {

                // if the set of the product equals the string category it pushes the product into its sub array
                rawCollections[a][1].push(productsArray[ii]);
            }
        }
    }

    /*-------- convert the arrays to JSON strings, 
    then use a Set to get unique values from rawCollections, 
    and convert back again to get the completed set of collections*/
    let setMap = new Set(rawCollections.map(JSON.stringify));
    sortedCollections = Array.from(setMap).map(JSON.parse);

    return (

        <>
            <Hero
                tag="collections"
                id="headWrap"
                heading="Collections"
                subHeading="Shop Pieces"
                link="/all"
            />

            <Header
                header="Browse by Collection"
                description="
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum."
            />
            <div className="collWrap" >

                {/* map the sections out*/}
                {sortedCollections.map((collection) => (

                    <div key={collection[0]} className="collContainer">

                        <h3 className="sectionTitle">{collection[0]}</h3>

                        {/* map each product into its respective section from the nested array*/}
                        <div className="prodWrap">
                            {collection[1].map(item => (
                                <Product
                                    id={item.id}
                                    key={item.id}
                                    title={item.title}
                                    price={"$" + item.price}
                                    image={item.image}
                                    category={item.category}
                                    type={item.type}
                                // description={item.description} short desc
                                // link={item.link} link to its own modal? page?
                                // icon={item.icon} icon based on category
                                />
                            ))}

                        </div>

                        <Link to={"/" + collection[0]} className="moreBtn">
                           <p>See the&nbsp;</p><div>{collection[0]}</div><p>&nbsp;Page</p>
                            <FontAwesomeIcon icon={faArrowRight} size="2x"></FontAwesomeIcon>
                        </Link>

                    </div>
                ))}
            </div>
        </>
    )
}    
