import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
    <div id="top"></div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <div className="home__row">
        <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            vendor="Amazon"
            price={19.99}
            rating={5}
          />

          <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            vendor="Amazon"
            price={19.99}
            rating={5}
          />
          <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://images-na.ssl-images-amazon.com/images/I/41CRnvYqmqL._AC_SX184_.jpg"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa"
            vendor="Amazon"
            price={49.99}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://images-na.ssl-images-amazon.com/images/I/31dYBKysp6L._AC_SX184_.jpg"
            title="Ring Indoor Cam, Works with Alexa - White"
            vendor="Ring"
            price={59.99}
            rating={4}
          />
          <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://images-na.ssl-images-amazon.com/images/I/31l2mq9kTHL._AC_SX184_.jpg"
            title="Echo Frames - Eyeglasses with Alexa - Black"
            vendor="Amazon"
            price={179.99}
            rating={0}
          />
          <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://m.media-amazon.com/images/I/61moEqqnwzL._AC_UY218_.jpg"
            title="Kindle Oasis – Now with adjustable warm light"
            vendor="Amazon"
            price={269.99}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={Math.floor(
              Math.random() * (89999999 - 80000000 + 1) + 80000000
            )}
            image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg"
            title='Samsung CJ89 43" Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor'
            vendor="Samsung Store"
            price={1096.59}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
