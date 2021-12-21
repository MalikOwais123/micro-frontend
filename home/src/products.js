const API_SERVER = "http://localhost:8080";

export const getProducts = () => {
  return fetch(`${API_SERVER}/products`)
    .then((response) => response.json())
    .then((data) => data);
};

//get product by id
export const getProductById = (id) => {
  return fetch(`${API_SERVER}/products/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};

//get product by name
export const getProductByName = (name) => {
  return fetch(`${API_SERVER}/products?name=${name}`)
    .then((response) => response.json())
    .then((data) => data);
};

//get currency 
