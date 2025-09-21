import { useEffect, useState } from "react";
import { getProducts } from "../services/productsService.js";

export default function StoreItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        console.log("Products state:", data);
      })
      .catch((err) => console.error(err));
  }, []);

  return null; 
}