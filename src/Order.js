import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__header">
        <div className="order__title">
          <small>ORDER PLACED</small>
          <p>{moment.unix(order.data.created).format("MMMM DD, YYYY")}</p>
        </div>

        <div className="order__title">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <small className="order__total">TOTAL</small>
                <p>{value}</p>
              </>
            )}
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>

        <div className="order__title">
          <p className="order__id">
            <small>ORDER ID</small>
            <p>{order.id}</p>
          </p>
        </div>
      </div>

      {order.data.cart?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideRating
          hideButton
        />
      ))}
    </div>
  );
}

export default Order;
