import React from "react";
import { Star } from "lucide-react";

function Rating({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          fill={index < rating ? "#FF6060" : "#E3E3E3"}
          stroke={index < rating ? "#FF6060" : "#E3E3E3"}
          size={24}
        />
      ))}
    </div>
  );
}

export default Rating;
