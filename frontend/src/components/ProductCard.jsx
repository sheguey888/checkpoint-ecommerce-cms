import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const { _id, title, price, image, category, rating } = product;

  return (
    <div className="card overflow-hidden group">
      <Link to={`/product/${_id}`}>
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
            ${price}
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {category}
          </span>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>

        <Link to={`/product/${_id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
