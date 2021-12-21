import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "home/products";

const PDPContent = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = (id) => {
    getProductById(id).then((product) => {
      setProduct(product);
    });
  };

  useEffect(() => {
    if (params) {
      const { id } = params;
      getProduct(id);
    }
  }, []);


  return (
    <>
      <h3>Product Detail By Id:</h3>
      {product && (
        <div>
          <h4>{product.name}</h4>
          <img src={product.image} alt="Not found" />
        </div>
      )}
    </>
  );
};

export default PDPContent;
