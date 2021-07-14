import React, { useState, useEffect } from "react";
import { Card } from "./Card.js";
import './Product.css'
import apple from './images/apple.jpeg'
import banana from './images/banana.jpg'
import brocolli from './images/brocolli.jpeg'
import bread from './images/bread.jpeg'
import cheese from './images/cheese.jpeg'
import chips from './images/chips.jpeg'
import granola from './images/granola.jpeg'
import icecream from './images/icecream.jpeg'
import milk from './images/milk.jpeg'
import nutella from './images/nutella.jpeg'
import salmon from './images/salmon.jpeg'
import yogurt from './images/yogurt.jpeg'

export const Product = () => {
  // List of products
  var products = [
    {
      name: "Yogurt",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 5.99,
      image: yogurt,
      alt: 'image of yogurt'
    },
    {
      name: "Almond Granola",
      lactoseFree: true,
      nutFree: false,
      organic: true,
      price: 4.49,
      image: granola,
      alt: 'image of granola'
    },
    {
      name: "Salmon",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 8.99,
      image: salmon,
      alt: 'image of salmon'
    },
    {
      name: "Apple",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 1.15,
      image: apple,
      alt: 'image of apple'
    },
    {
      name: "Banana",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 1.45,
      image: banana,
      alt: 'image of banana'
    },
    {
      name: "Chips",
      lactoseFree: true,
      nutFree: true,
      organic: false,
      price: 3.67,
      image: chips,
      alt: 'image of chips'
    },
    {
      name: "Nutella",
      lactoseFree: true,
      nutFree: false,
      organic: false,
      price: 5.49,
      image: nutella,
      alt: 'image of nutella'
    },
    {
      name: "Brocolli",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 2.49,
      image: brocolli,
      alt: 'image of brocolli'
    },
    {
      name: "Milk",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 4.37,
      image: milk,
      alt: 'image of milk'
    },
    {
      name: "Peanut Butter Ice Cream",
      lactoseFree: false,
      nutFree: false,
      organic: false,
      price: 5.99,
      image: icecream,
      alt: 'image of peanut butter ice cream'
    },
    {
      name: "Bread",
      lactoseFree: true,
      nutFree: true,
      organic: true,
      price: 2.99,
      image: bread,
      alt: 'image of bread'
    },
    {
      name: "Cheese",
      lactoseFree: false,
      nutFree: true,
      organic: false,
      price: 3.99,
      image: cheese,
      alt: 'image of cheese'
    },
  ];

  // State to track products and for filtering
  const [prods, setProds] = useState(products);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Filter products based on user preferences
    let product_names = [];
    let counter = 0 
    if(sessionStorage.getItem("lactoseFree") != null) {
      var lactose = JSON.parse(sessionStorage.getItem("lactoseFree"));
      if (lactose === true) { counter = counter + 1; }
      var nuts = JSON.parse(sessionStorage.getItem("nutFree"));
      if (nuts === true) { counter = counter + 1; }
      var organic = JSON.parse(sessionStorage.getItem("organic"));
      if (organic === true) { counter = counter + 1; }

      for (let i = 0; i < products.length; i += 1) {
        if(counter >= 2) {
          if ( (lactose === true && nuts === true) && (products[i].lactoseFree === true && products[i].nutFree === true) ) {
            product_names.push(products[i]);
          }
          else if (lactose === true && organic === true && products[i].lactoseFree === true && products[i].organic === true) {
            product_names.push(products[i]);
          }
          else if (nuts === true && organic === true && products[i].nutFree === true && products[i].organic === true) {
            product_names.push(products[i]);
          }
        }
        else {
          if (lactose === true && products[i].lactoseFree === true) {
            product_names.push(products[i]);
          }
          else if (nuts === true && products[i].nutFree === true) {
            product_names.push(products[i]);
          }
          else if (organic === true && products[i].organic === true) {
            product_names.push(products[i]);
          }
          else if (lactose === false && nuts === false && organic === false) {
            product_names.push(products[i]);
          }
        }
      }
    }
    else{
      for (let i = 0; i < products.length; i += 1) { 
        product_names.push(products[i]); 
      }
    }
    let sorted = product_names;
    product_names.sort((a, b) => a.price - b.price);
    setProds(sorted);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array for second parameter means only run on mount and unmount. Without empty array useEffect runs in an infinite loop

  return (
    <div className="prod" id="prod">
      <h1>Products</h1>
      <div className="prod_container">
        <div className="prod_wrapper">
          {prods.map((item, i) => (
            <ul key={i} className="prod_ul">
              <Card product={item} />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
