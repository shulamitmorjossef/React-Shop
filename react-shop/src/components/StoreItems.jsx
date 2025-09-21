// src/components/StoreItems.jsx
import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productsService.js";

function StoreItems() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProducts();

    setProducts(data);

    console.log("products (returned from service):", data);
  }, []);

  useEffect(() => {
    console.log("products state updated:", products);
  }, [products]);

  return null;
}

export default StoreItems;
