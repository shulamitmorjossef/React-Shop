// services.js
export async function getProducts() {
  const cacheKey = "products";

  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    console.log("Loaded from cache ✅");
    return JSON.parse(cached);
  }

  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  localStorage.setItem(cacheKey, JSON.stringify(data));
  console.log("Fetched from server 🌐");

  return data;
}
