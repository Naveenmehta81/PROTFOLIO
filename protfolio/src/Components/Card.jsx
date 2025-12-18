import React from "react";
// Removed unused FaFulcrum import

const Card = ({ icon, title, description }) => {
  return (
    <div className="card-box-about">
      
      {/* 1. Renamed to distinct class for Background Circle */}
      <div className="card-icon-bg-about">
        {/* 2. Renamed to distinct class for Icon Symbol */}
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