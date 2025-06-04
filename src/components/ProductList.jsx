import Product from "./Product";

export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image.url}
          title={product.title}
          description={product.description}
          discountedPrice={product.discountedPrice}
        />
      ))}
    </div>
  );
}
