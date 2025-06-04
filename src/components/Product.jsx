import { Link } from "react-router-dom";

export default function Product({
  id,
  image,
  title,
  description,
  discountedPrice,
}) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={image} alt={title} />
      </div>

      <div className="product-info">
        <Link to={`/product/${id}`} className="product-link">
          <h1 className="product-title">{title}</h1>
        </Link>

        <p className="product-description">{description}</p>
        <div className="product-bottom">
          <p className="product-price">Price: ${discountedPrice}</p>

          <Link to={`/product/${id}`} className="product-button-wrapper">
            <button className="view-product-button">View product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
