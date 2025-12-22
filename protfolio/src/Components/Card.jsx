import React from "react";


const Card = ({ icon, title, description }) => {
  return (
    <div className="card-box-about">
      
     
      <div className="card-icon-bg-about">
        
        <div className="card-icon-symbol-about">{icon}</div>
      </div>
      
      <div className="card-content-about">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;