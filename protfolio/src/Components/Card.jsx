import React from "react";
// Remove internal CSS import here if it's imported in parent, 
// but fine to keep if you prefer modularity.

const Card = ({ icon, title, description }) => {
  return (
    <div className="card-box">
      {/* The orange background shape for the icon */}
      <div className="card-icon-bg">
        <div className="card-icon">{icon}</div>
      </div>
      
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;