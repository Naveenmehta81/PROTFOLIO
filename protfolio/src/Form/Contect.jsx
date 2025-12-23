import React from "react";
import { SiOpenstreetmap } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import "./contect.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="leftsidboxe">
        <div className="box">
          <h1 className="main-heading">
            What’s your story<span className="dot">?</span>
            <br />
            Get in touch
          </h1>
          <p className="contact-para">
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </p>

          <div className="info-box">
            <div className="info-item">
              <SiOpenstreetmap className="icon" />
              <span>123 Stree New York City , United States Of America 750065.</span>
            </div>
            <div className="info-item">
              <MdMarkEmailRead className="icon" />
              <span>support@domain.com</span>
            </div>
            <div className="info-item">
              <IoPhonePortraitOutline  className="icon" />
              <span>+044 9696 9696 3636</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
