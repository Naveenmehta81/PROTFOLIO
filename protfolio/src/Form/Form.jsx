import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  function handlechange(event) {
    setData((prevdata) => ({
      ...prevdata,
      [event.target.name]: event.target.value,
    }));
  }

  function handlerclick(event) {
    event.preventDefault(); // Prevent page reload
    if (data.name === "") {
      alert("Please enter info");
    } else {
      console.log(data);
    }
  }

  return (
    <div className="form-wrapper">
      <h2 className="form-heading">Say Something</h2>
      
      <form className="contact-form">
        <div className="input-row">
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handlechange}
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email address"
            name="email"
            value={data.email}
            onChange={handlechange}
          />
        </div>

        <input
          className="input-field full-width"
          type="text"
          placeholder="Subject"
          name="subject"
          value={data.subject}
          onChange={handlechange}
        />

        <textarea
          className="input-field full-width textarea-field"
          placeholder="Type comment"
          name="comment"
          value={data.comment}
          onChange={handlechange}
        />
        
        <button className="send-btn" onClick={handlerclick}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;