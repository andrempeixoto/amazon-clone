import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the client secret for stripe which allows to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currency's subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("THE SECRET IS --> ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__header">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/checkout/checkout-spc-address-banner._CB485941369_.gif"
          alt=""
        />
      </div>

      <div className="payment__container">
        <div className="payment__container__left">
          <h1>
            Review your order{" "}
            <small>
              (<Link to="/checkout">{cart?.length} items</Link>)
            </small>
          </h1>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Shipping address</h3>
            </div>

            <div className="payment__address">
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Developers City, WB</p>
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Your cart</h3>
            </div>
            <div className="payment__items">
              {cart.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  vendor={item.vendor}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="payment__container__right">
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment method</h3>
            </div>

            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order total: {value}</h3>}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />

                  <button disabled={processing || disabled || succeeded}>
                    <span>
                      {processing ? (
                        <p>Processing</p>
                      ) : (
                        "Place your order in USD"
                      )}
                    </span>
                  </button>
                </div>

                {/* Errors */}
                {error && <div className="payment__error">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
