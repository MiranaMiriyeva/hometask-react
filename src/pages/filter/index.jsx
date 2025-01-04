import React, { useEffect, useState } from "react";
import "./index.scss";

const Filter = () => {
  const [products, setProducts] = useState([]);
  let categories = ["all", "electronics", "clothes", "jewllery"];

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function getProducts(category) {
    console.log(category);
    fetch(`http://localhost:3000/products/?category=${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }
  return (
    <div>
      <div className="filter-container">
        <div className="categories">
          {categories.map((x, i) => (
            <div key={i} onClick={() => getProducts(x)}>
              {x}
            </div>
          ))}
        </div>
        <div className="products">
          {products.map((product, i) => {
            return (
              <div className="product-box" key={i}>
                <img src={product.image} alt="" />
                <h2>{product.name}</h2>
                <h4>{product.category}</h4>
                <p>{product.description}</p>
                <p className="product-price">$ {product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
