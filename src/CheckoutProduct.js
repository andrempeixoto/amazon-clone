import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  id,
  image,
  title,
  vendor,
  price,
  rating,
  hideRating,
  hideButton,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove item from the cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <small>{vendor}</small>
        <p className="checkoutProduct__price">
          <sup>$</sup>
          <strong>{price}</strong>
        </p>
        {!hideRating && (
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        )}

        {!hideButton && <a onClick={removeFromCart}>Delete</a>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
