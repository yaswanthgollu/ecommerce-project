import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
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
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);
  // [] = Dependency Array
  // The empty array as the second argument to useEffect means that the effect will only run once, when the component mounts. If we had passed in a variable or state value, the effect would run again whenever that value changes.

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
