import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <a href="#top" className="footer__a">
        <div className="footer__backToTop">Back to Top</div>
      </a>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__column">
            <h3>Get to Know Us</h3>
            <ul>
              <li className="footer__link">
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Amazon</a>
              </li>
              <li>
                <a href="#">Press Center</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Amazon Devices</a>
              </li>
              <li className="nav_last">
                <a href="#">Amazon Tours</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li>
                <a href="#">Become an Affiliate</a>
              </li>
              <li>
                <a href="#">Advertise Your Products</a>
              </li>
              <li>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li>
                <a href="#">Host an Amazon Hub</a>
              </li>
              <li>
                <a href="#">See More Make Money with Us</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <a href="#">Amazon Rewards Visa Signature Cards</a>
              </li>
              <li>
                <a href="#">Amazon.com Store Card</a>
              </li>
              <li>
                <a href="#">Amazon Business Card</a>
              </li>
              <li>
                <a href="#">Amazon Business Line of Credit</a>
              </li>
              <li>
                <a href="#">Shop with Points</a>
              </li>
              <li>
                <a href="#">Credit Card Marketplace</a>
              </li>
              <li>
                <a href="#">Reload Your Balance</a>
              </li>
              <li className="nav_last">
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li>
                <a href="#">Your Account</a>
              </li>
              <li>
                <a href="#">Your Orders</a>
              </li>
              <li>
                <a href="#">Shipping Rates &amp; Policies</a>
              </li>
              <li>
                <a href="#">Amazon Prime</a>
              </li>
              <li>
                <a href="#">Returns &amp; Replacements</a>
              </li>
              <li>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li>
                <a href="#">Amazon Assistant</a>
              </li>
              <li className="nav_last">
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__line"></div>

      <div className="footer__author">
        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo-img"
        />

        <p>
          Amazon Fake Clone made by{' '}
          <a href="https://andre-portfolio.vercel.app" target="_blank">
            Andre Peixoto
          </a>
        </p>
      </div>

      <div className="footer__bottom">
        <div className="footer__column">
          <ul>
            <li>
              <a href="#">Conditions of Use</a>
            </li>

            <li>
              <a href="#">Privacy Notice</a>
            </li>

            <li>
              <a href="#">Interest-Based Ads</a>
            </li>

            <li className="footer__copyright">
              © 1996-2020, Amazon-Fake-Clone, Inc. or its affiliates
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
