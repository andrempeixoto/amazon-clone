import React from 'react'
import { useStateValue } from "./StateProvider";
import "./CustomerCard.css"
import { capitalizeFirstLetter } from "./Header"

function CustomerCard() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="customerCard">

    <div className="customerCard__header">
      <img src="https://www.amazon.com/avatar/default?customer_id=amzn1.account.AHL323NH6C3IFHLBWQPJK7HC7T2A&max_width=60&max_height=60&square=true" alt="customer-avatar"/>

      <div className="customerCard__greeting">
        <h2>Hi, {user ? capitalizeFirstLetter(user.email.match(/^([^@]*)@/)[1]) : "Guest"}</h2>
        <p>Customer since 2020</p>
      </div>
      

    </div>

    <div className="customerCard__body">
      <p>Recommendations for you</p>
    </div>

    <div className="customerCard__categories">
      <div className="customerCard__categoryBox">
        <p>Your Orders</p>
      </div>

      <div className="customerCard__categoryBox">
        <p>Shop all gifts</p>
      </div>

      <div className="customerCard__categoryBox">
        <p>Holiday Toy List</p>
      </div>

      <div className="customerCard__categoryBox">
        <p>Home Holiday Guide</p>
      </div>

    </div>

    </div>
  )
}

export default CustomerCard
