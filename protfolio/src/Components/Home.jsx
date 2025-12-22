import React, { useEffect, useState } from "react";
import "./home.css";

const Home = () => {
  let tech = ["UI/UX", "MERN-Stack", "APP-DEVELOPER", "FULL-STACK DEVELOPER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tech.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      
      
      
      <div className="hero-content">
    
        <div className="text-section">
          
          
          <div className="contact-header">
            <span className="phone">+04 6543-9535-6515</span>
            <span className="email">nairobi-designer@domain.com</span>
         </div>
              

          <div className="intro-text">
            <h4 className="greeting">Hello, My name is</h4>
            <h1 className="name">Nairobi Gadot</h1>
            <div className="role-container">
              <span className="role">{tech[index]}</span>
            </div>
            <p className="description">  
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services and
              online stores.
            </p>
            <button className="download-btn">Download CV</button>
          </div>
        </div>

       
        <div className="image-section">
        
          <img src="/home-banner.png" alt="Nairobi Godot" className="model-img" />
           <div className="background-circle"></div> 
        </div>
      </div>
    </div>
  );
};

export default Home;