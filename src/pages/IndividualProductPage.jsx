import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "../components/CartContext";
import StarRating from "../components/StarRating";

export default function IndividualProductPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        const result = await response.json();
        setProduct(result.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
      <Header />
      <main className="individual-product-page">
        <div className="product-card individual-product-card">
          <div className="individual-product-image-container">
            <img
              className="product-image"
              src={product.image.url}
              alt={product.title}
            />
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>

            <div className="price-container">
              {typeof product.discountedPrice === "number" &&
              product.discountedPrice < product.price ? (
                <>
                  <p className="original-price">
                    <s>Price: ${product.price}</s>
                  </p>
                  <p className="discounted-price">
                    Discounted Price: ${product.discountedPrice}
                  </p>
                </>
              ) : (
                <p className="regular-price">Price: ${product.price}</p>
              )}
            </div>

            {product.reviews.length > 0 && (
              <div className="reviews-container">
                <h3>Reviews:</h3>
                <ul className="reviews-list">
                  {product.reviews.map((review) => (
                    <li key={review.id} className="review-item">
                      <p>
                        {review.username}: {review.description}
                      </p>
                      <p>
                        <StarRating rating={review.rating} />
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="product-bottom">
              <button
                className="add-to-cart-button"
                onClick={() => addToCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
