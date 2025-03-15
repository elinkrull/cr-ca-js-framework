import { Link } from "react-router-dom";

export default function Product({ id, image, title, description, discountedPrice}) {

	return (
			<div className="product-card">
				<img 
					className="product-image"
					src={image} 
					alt={title}
				/>
				<Link to={`/product/${id}`} className="product-title">
				<h1 >{title}</h1>
				</Link>
				<div className="info-container">
					<p>{description}</p>
				</div>
				<div className="info-container">
					<p>Price: ${discountedPrice}</p>
				</div>
				<div className="info-container">
				<Link to={`/product/${id}`}>
				<button className="view-product-button">
				View product
				</button>
				</Link>
				</div>
			</div>
	)
}

// const product = {
//     title: "#",
//     description: "Mr. Whiskerson",
//     image: "(800) 555-1234",
//     reviews: "mr.whiskaz@catnap.meow"
// }

// const {image, title} = product
// console.log(title)