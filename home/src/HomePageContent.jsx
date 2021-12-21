import React, { useEffect, useState } from "react";
import { getProducts } from "./products";

export const HomePageContent = () => {
  const [products, setProducts] = useState([]);

  const getProductsLists = () => {
    getProducts().then((products) => {
      setProducts(products);
    });
  };

  useEffect(() => {
    getProductsLists();
  }, []);

  return (
    <>
      <h1>Product List</h1>

      <div className="d-flex flex-wrap ">
        {products.map((product) => (
          <div style={{ cursor: "pointer" }} className="product-list mr-3">
            <h3>{product.name}</h3>
            <img src={product.image} alt="Not found" />
          </div>
        ))}
      </div>
    </>
  );
};
