import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, image, title, vendor, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  // console.log("this is the cart -> ", cart);

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        vendor: vendor,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="product-image" />
      <div className="product__info">
        <p className="product__name">{title}</p>
        <small>{vendor}</small>
        
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product__price">
          <sup>$</sup>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="button">
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
