//para manejo de peticiones http
import axios from "axios";

export const productServices = {};

// function para obtener los productos

productServices.getProducts = async () => {
  return await axios.get("https://fakestoreapi.com/products?limit=4");
};
