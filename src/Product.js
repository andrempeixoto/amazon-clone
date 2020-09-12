import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, image, title, vendor, price, cents, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket -> ", basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
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
        <p>{title}</p>
        <small>{vendor}</small>
        <p className="product__price">
          <sup>$</sup>
          <strong>{price}</strong>
          <sup>{cents}</sup>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
