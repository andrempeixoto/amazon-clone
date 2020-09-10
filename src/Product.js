import React from "react";
import "./Product.css";

function Product({ image, title, vendor, price, rating }) {
  return (
    <div className="product">
      <img src={image} alt="product-image" />
      <div className="product__info">
        <p>{title}</p>
        <small>{vendor}</small>
        <p className="product__price">
          <sup>$</sup>
          <strong>{price}</strong>
          <sup>99</sup>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
