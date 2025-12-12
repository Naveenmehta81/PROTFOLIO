import React from "react";
import Card from "./Card";
import "./Cards.css";

import { FaLaptopFile, FaTv } from "react-icons/fa6";
import { GiCrossbow } from "react-icons/gi";

const Cards = () => {
  const data = [
    {
      icon: <FaLaptopFile />,
      title: "Web Design",
      description: "Design beautiful modern web pages",
    },
    {
      icon: <FaTv />,
      title: "Web Development",
      description: "Create full web applications",
    },
    {
      icon: <GiCrossbow />,
      title: "SEO Marketing",
      description: "Increase sales through SEO + marketing",
    },
  ];

  return (
    <div >
      <h1  className="cards-title">What I Do?</h1>

      <div className="cards-container">
        {data.map((item, index) => (
          <Card 
             key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
