import React from 'react'
import './Awardcard.css'

const Awardscard = ({ icon, title, description }) => {
  return (
    <div className="award-card">
      
      {/* Left Side: Icon */}
      <div className="award-icon-wrapper">
        {icon}
      </div>

      {/* Right Side: Text Content */}
      <div className="award-content">
        <h3 className="award-title">{title}</h3>
        <p className="award-description">{description}</p>
      </div>

    </div>
  )
}

export default Awardscard