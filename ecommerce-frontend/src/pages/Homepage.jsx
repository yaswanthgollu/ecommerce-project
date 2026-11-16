import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { formatMoney } from "../utils/money";
import "./Homepage.css";

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]);
  
  // fetch("http://localhost:3000/api/products")
  //   .then((response) => {
  //     return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });

  // axios makes the same backend request cleaner and easier to read. It also has some additional features like automatically parsing JSON responses and handling errors more gracefully.

  // useEffect -> helps to control when some code runs in a React component. It allows you to perform side effects, such as fetching data from an API, after the component has rendered. In this case, we can use useEffect to fetch the products from the backend when the HomePage component mounts.
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  // [] = Dependency Array
  // The empty array as the second argument to useEffect means that the effect will only run once, when the component mounts. If we had passed in a variable or state value, the effect would run again whenever that value changes.

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="product-image-container">
                  <img className="product-image" src={product.image} />
                </div>

                <div className="product-name limit-text-to-2-lines">
                  {product.name}
                </div>

                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                    alt={`${product.rating.stars} stars`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.rating.count}
                  </div>
                </div>

                <div className="product-price">
                  {formatMoney(product.priceCents)}
                </div>

                <div className="product-quantity-container">
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

                <div className="product-spacer"></div>

                <div className="added-to-cart">
                  <img src="images/icons/checkmark.png" />
                  Added
                </div>

                <button className="add-to-cart-button button-primary">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
