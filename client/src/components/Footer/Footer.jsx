import React from "react";
import "./Footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
            <h1>Categories</h1>
            <span>Men</span>
            <span>Women</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>
        <div className="item">
            <h1>Links</h1>
            <span>FAQs</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>
        <div className="item">
            <h1>About</h1>
            <span>At Fashionstore, we believe there is a better way to do shopping. A more valuable way where customers are satisfied. We're obsessively passionate about it, and our mission is to help people achieve it. Our products are original and the quality speaks for itself. We are excited to provide our services.</span>
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>You can contact us on our provided accounts as well as from this number provided
              <p><b>+1 (555) 555-1234</b></p>
              Thankyou for reaching us out. Our team is always looking forward to make things better
            </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
            <span className="logo">
             FASHIONSTORE
            </span>
            <span className="copyright">
            © Copyright 2023. All Rights Reserved
            </span>
        </div>
        <div className="right">
            <img src="/img/payment.png" alt="" className="footer_img" />
        </div>
      </div>
    </div>
  );
};
