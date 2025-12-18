import React from "react";
import Card from "./Card";
import "./Cards.css"; 
import { FaLaptopCode, FaTv } from "react-icons/fa";
import { GiCrossbow } from "react-icons/gi";

const Cards = () => {
  const data = [
    {
      icon: <FaLaptopCode />,
      title: "Web Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <FaTv />,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      icon: <GiCrossbow />,
      title: "SEO Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];

  return (
    <div className="cards-wrapper-about">
      <h1 className="section-title">What I do?</h1>
      
      <div className="cards-container-about">
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