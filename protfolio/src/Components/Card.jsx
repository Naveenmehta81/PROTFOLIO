import React, { useState } from "react";
import "./Cards.css"; 

const Card = ({ icon, title, description }) => {
    const[color , setColor] = useState("white");

   function changehandler(){
        setColor((prev) => (prev === "white" ? "orange" : "white")); 
   }

  return (
    <div className="card-box" onClick={changehandler}
    style={{backgroundColor: color , color : color == "orange" ? ("white") : ("orange")}}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
