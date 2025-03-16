export default function StarRating({ rating }) {
	const totalStars = Math.round(rating); 
	
	return <span className="star-rating">{"⭐".repeat(totalStars)}</span>;
  }
  