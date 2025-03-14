import Searchbar from "../components/Searchbar"
import Product from "../components/Product"
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {

//API URL
const urlOnlineShop = "https://v2.api.noroff.dev/online-shop"

const [products, setProducts] = useState([]); //store the API response
const [searchQuery, setSearchQuery] = useState(""); // Store search input

useEffect(() => {
	const fetchData = async () => {
		try {
		  const response = await fetch(urlOnlineShop);
		  const result = await response.json(); // Convert response to JSON
		  console.log(result); // Log the data
		     // Check if result contains a 'data' key
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
        <main className="homepage">
			<Header />
			<Searchbar
				setSearchQuery={setSearchQuery}
			/> 
			<div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Product 
				key={product.id}
				id={product.id}
				image={product.image.url}
				title={product.title}
				description={product.description}
				reviews="Reviews here"
				price={product.price}
				discountedPrice={product.discountedPrice}
				/>
			))
		  ) : (
			<p>No products found...</p>
		  )}
			</div>
			<Footer />
        </main>
    );
}