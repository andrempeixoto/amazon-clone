import React from "react";
import { useStateValue } from "./StateProvider";
import "./CustomerCard.css";
import { capitalizeFirstLetter } from "./Header";

function CustomerCard() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="customerCard">
      <div className="customerCard__header">
        <img
          src="https://www.amazon.com/avatar/default?customer_id=amzn1.account.AHL323NH6C3IFHLBWQPJK7HC7T2A&max_width=60&max_height=60&square=true"
          alt="customer-avatar"
        />

        <div className="customerCard__greeting">
          <h2>
            Hi,{" "}
            {user
              ? capitalizeFirstLetter(user.email.match(/^([^@]*)@/)[1])
              : "Guest"}
          </h2>
          <p>Customer since 2020</p>
        </div>
      </div>

      <div className="customerCard__body">
        <p>Recommendations for you</p>
      </div>

      <div className="customerCard__categories">
        
        <div className="customerCard__category-box-row">
          
          <div className="customerCard__category-box">
            <div className="customerCard__category-image">
              <img
                src="https://m.media-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_ORIGIN_1240003_1273427_US_us_rfs_profile_card_graphics_us_en_3244776_240x160_en_US._AC_SR120,80_.png"
                alt=""
              />
            </div>

            <a
              href="/orders"
              className="customerCard__category-box-overlay"
            ></a>

            <p className="customerCard__category-label">Your Orders</p>
          </div>

          <div className="customerCard__category-box">
            <div className="customerCard__category-image">
              <img
                src="https://m.media-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/trafficdrivers/hol20_gifthub_profilecard_shopallgifts._AC_SR120,80_.png"
                alt=""
              />
            </div>

            <a
              href="#"
              className="customerCard__category-box-overlay"
            ></a>

            <p className="customerCard__category-label">Shop all gifts</p>
          </div>

          <div className="customerCard__category-box-row">
            <div className="customerCard__category-box">
              <div className="customerCard__category-image">
                <img
                  src="https://m.media-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/trafficdrivers/hol20_gifthub_profilecard_HTL._AC_SR120,80_.png"
                  alt=""
                />
              </div>

              <a
                href="#"
                className="customerCard__category-box-overlay"
              ></a>

              <p className="customerCard__category-label">Holiday Toy List</p>
            </div>

            <div className="customerCard__category-box">
              <div className="customerCard__category-image">
                <img
                  src="https://m.media-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/trafficdrivers/hol20_gifthub_profilecard_homeholidayguide._AC_SR120,80_.png"
                  alt=""
                />
              </div>

              <a
                href="#"
                className="customerCard__category-box-overlay"
              ></a>

              <p className="customerCard__category-label">Home Holiday Guide</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
