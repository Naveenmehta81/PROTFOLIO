import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [data, setData] = useState({
    fisrname: "",
    lastname: "",
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
    if (event.target.value === "") {
      alert("enter info");
    } else {
      console.log(data);
    }
  }

  return (
    <div>
      <h1>Say Something</h1>
      <div className='"name-row"'>
        <form>
          <div className="name-row">
            <input
              type="text"
              placeholder="First name"
              name="fisrname"
              value={data.fisrname}
              onChange={handlechange}
            />
            <input
              type="text"
              placeholder="last name"
              name="lastname"
              value={data.lastname}
              onChange={handlechange}
            />
          </div>

          <input
            type="text"
            placeholder="subject"
            name="subject"
            value={data.subject}
            onChange={handlechange}
          />

          <textarea
            typeof="text"
            placeholder="type comment"
            name="comment"
            value={data.comment}
            onChange={handlechange}
          />
        </form>
        <button className="btn1" onClick={handlerclick}>
          send message
        </button>
      </div>
    </div>
  );
};

export default Form;
