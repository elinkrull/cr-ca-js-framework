import Searchbar from "../components/Searchbar";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  //API URL
  const urlOnlineShop = "https://v2.api.noroff.dev/online-shop";

  const [products, setProducts] = useState([]); //store the API response
  const [searchQuery, setSearchQuery] = useState(""); // Store search input

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(urlOnlineShop);
        const result = await response.json(); // Convert response to JSON

        if (result && result.data) {
          setProducts(result.data); // Save the products in state
        } else {
          console.error("Unexpected API response format:", result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <Header />
      <Searchbar setSearchQuery={setSearchQuery} />

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          No products found...
        </p>
      )}

      <Footer />
    </main>
  );
}
