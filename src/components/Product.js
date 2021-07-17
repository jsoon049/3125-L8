import React, { useState, useEffect } from "react";
import { Card } from "./Card.js";
import "./Product.css";
import prosthechea from "./images/prosthechea.jpeg";
import disa from "./images/disa.jpeg";
import gumdrop from "./images/gumdrop.jpeg";
import woodstock from "./images/woodstock.jpeg";
import carnegie from "./images/carnegie.jpeg";
import aurora from "./images/aurora.jpeg";
import cattleya from "./images/cattleya.jpeg";
import bluejacket from "./images/bluejacket.jpeg";
import lotusqueen from "./images/lotusqueen.jpeg";
import cabella from "./images/cabella.jpeg";
import vanda from "./images/vanda.jpeg";
import dendrobium from "./images/dendrobium.jpeg";

export const Product = () => {
  // List of products
  var products = [
    {
      name: "Dendrobium Orchid",
      Orchid: true,
      hyacinth: false,
      lilly: false,
      price: 5.99,
      image: dendrobium,
      alt: "image of dendrobium orchid",
      extraInfo: "The stunning flowers of dendrobiums can last for about six weeks. Keep plants in warm conditions (min 13°C) and water when the growing medium is becoming dry. Dendrobiums can reproduce by forming baby plantlets called keikis."
    },
    {
      name: "Cattleya Orchid",
      Orchid: true,
      hyacinth: false,
      lilly: false,
      price: 4.49,
      image: cattleya,
      alt: "image of cattleya orchid",
      extraInfo: 'Cattleyas are epiphytes and enjoy warm, humid conditions, with some air movement. Water them when the growing medium is dry. A new flower spike grows from a dormant bud each year. Cut this back to the stem after flowering.'
    },
    {
      name: "Vanda Orchid",
      Orchid: true,
      hyacinth: false,
      lilly: false,
      price: 8.99,
      image: vanda,
      alt: "image of vanda orchid",
      extraInfo: 'Vandas have very long roots and are often grown in baskets so the roots can hang down. They need warm and bright, but not sunny, conditions. If the plant gets too tall, you can cut off the top plus a few roots and replant it.'
    },
    {
      name: "Prosthechea Orchid",
      Orchid: true,
      hyacinth: false,
      lilly: false,
      price: 1.15,
      image: prosthechea,
      alt: "image of prosthechea orchid",
      extraInfo: "With plentiful, long-lasting, scented flowers, epiphyte Prosthechea grows on trees in the mountains of Central America. It likes bright light, but not direct sun. Let the growing medium dry slightly between waterings and water less in winter.",
    },
    {
      name: "Disa Orchid",
      Orchid: true,
      hyacinth: false,
      lilly: false,
      price: 1.45,
      image: disa,
      alt: "image of disa orchid",
      extraInfo: "This red disa, Disa uniflora, is the emblem of South Africa’s Western Cape. Like the golden disa, it needs permanently wet conditions and benefits from watering with a weak fertiliser solution. Occasionally, pink or yellow flowers develop."
    },
    {
      name: "Aurora Borealis Lily",
      Orchid: false,
      hyacinth: false,
      lilly: true,
      price: 3.67,
      image: aurora,
      alt: "image of aurora lily",
      extraInfo: 'Aurora Borealis sports clean, rich color in pure white, raspberry, and canary yellow. They simply seem to simmer in the garden, their beauty is a rare treat to behold. Relatively color fast even in a hot location south east of Salem, Oregon, its best color is obtained when planted in light afternoon shade, especially in areas exceeding 90 during the month of July. '
    },
    {
      name: "Cabella Lily",
      Orchid: false,
      hyacinth: false,
      lilly: true,
      price: 5.49,
      image: cabella,
      alt: "image of cabella lily",
      extraInfo: 'Cabella lillies have always been exceptional for fade resistance but still, as will all pink Orientals, we recommend some light afternoon shade to enhance color in areas where mid / late July and on temperatures range 85 and above during its period of bloom. Flowering in Mid to Late July here in the Pacific Northwest, Cabella reaches a height of 3 to 4 feet.'
    },
    {
      name: "Gumdrop Lily",
      Orchid: false,
      hyacinth: false,
      lilly: true,
      price: 2.49,
      image: gumdrop,
      alt: "image of gumdrop lily",
      extraInfo: "For a pastel pink, this flower's color is excellent despite the hot, direct sun summer conditions. That being said, we have always suggested some light afternoon shade in areas where July temps are high to promote stronger colors and longer lasting flowers."
    },
    {
      name: "Lotus Queen Lily",
      Orchid: false,
      hyacinth: false,
      lilly: true,
      price: 4.37,
      image: lotusqueen,
      alt: "image of lotus queen lily",
      extraInfo: "These soft, baby pink flowers are a sight to behold. Lotus Queen has proven herself to be very color fast for a pastel pink here in our maritime climate. In hotter areas, she should be planted in light afternoon shade for best color. Wonderfully sweet scent. 3 to 4 Feet. Late July / Early August Flowering."
    },
    {
      name: "Blue Jacket Hyacinth",
      Orchid: false,
      hyacinth: true,
      lilly: false,
      price: 5.99,
      image: bluejacket,
      alt: "image of blue jacket hyacinth",
      extraInfo: "With dense spikes of deep blue flowers and a dark purple stripe on every petal, Blue Jacket grows up to ten inches tall and will naturalize in the right spot. It is resistant to deer and rabbits and is very easy to grow."
    },
    {
      name: "Woodstock Hyacinth",
      Orchid: false,
      hyacinth: true,
      lilly: false,
      price: 2.99,
      image: woodstock,
      alt: "image of woodstock hyacinth",
      extraInfo: "Blooming for several weeks in mid-spring, this flower has reddish-purple petals and bright green leaves. Their dark plum color makes them truly unique, and because they also are very fragrant, they do well when planted along pathways and near patios and decks."
    },
    {
      name: "Carnegie Hyacinth",
      Orchid: false,
      hyacinth: true,
      lilly: false,
      price: 3.99,
      image: carnegie,
      alt: "image of carnegie hyacinth",
      extraInfo: "This plant is likely the whitest of all the Hyacinth flowers, with bright white petals and deep green leaves. It fits perfectly in rock gardens, in containers, and as a border, and it blooms for several weeks in the spring."
    },
  ];

  // State to track products and for filtering
  const [prods, setProds] = useState(products);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Filter products based on user preferences
    let product_names = [];
    let counter = 0;
    if (sessionStorage.getItem("Orchid") != null) {
      var Orchid = JSON.parse(sessionStorage.getItem("Orchid"));
      if (Orchid === true) {
        counter = counter + 1;
      }
      var hyacinth = JSON.parse(sessionStorage.getItem("hyacinth"));
      if (hyacinth === true) {
        counter = counter + 1;
      }
      var lilly = JSON.parse(sessionStorage.getItem("lilly"));
      if (lilly === true) {
        counter = counter + 1;
      }

      for (let i = 0; i < products.length; i += 1) {
        if (counter >= 2) {
          if (
            Orchid === true &&
            hyacinth === true &&
            products[i].Orchid === true &&
            products[i].hyacinth === true
          ) {
            product_names.push(products[i]);
          } else if (
            Orchid === true &&
            lilly === true &&
            products[i].Orchid === true &&
            products[i].lilly === true
          ) {
            product_names.push(products[i]);
          } else if (
            hyacinth === true &&
            lilly === true &&
            products[i].hyacinth === true &&
            products[i].lilly === true
          ) {
            product_names.push(products[i]);
          }
        } else {
          if (Orchid === true && products[i].Orchid === true) {
            product_names.push(products[i]);
          } else if (hyacinth === true && products[i].hyacinth === true) {
            product_names.push(products[i]);
          } else if (lilly === true && products[i].lilly === true) {
            product_names.push(products[i]);
          } else if (
            Orchid === false &&
            hyacinth === false &&
            lilly === false
          ) {
            product_names.push(products[i]);
          }
        }
      }
    } else {
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
      <h1>Flowers</h1>
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
