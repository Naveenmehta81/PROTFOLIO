import React, { useState } from "react";
import './catagory.css'
 
function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  
  const portfolioItems = [
    { id: 1, src: "m-portfolio-1.webp", category: "Branding", alt: "Portfolio 1" },
    { id: 2, src: "m-portfolio-2.webp", category: "Product"  , alt: "Portfolio 2" },
    { id: 3, src: "m-portfolio-3.jpg", category: "Photography", alt: "Portfolio 3" },
    { id: 4, src: "m-portfolio-4.webp", category: "Fashion", alt: "Portfolio 4" },
    { id: 5, src: "m-portfolio-5.webp", category: "Photography", alt: "Portfolio 5" },
    { id: 6, src: "m-portfolio-6.webp", category: "Product", alt: "Portfolio 6" },
    { id: 7, src: "m-portfolio-7.webp", category: "Branding", alt: "Portfolio 7" },
    { id: 8, src: "m-portfolio-8.webp", category: "Fashion", alt: "Portfolio 8" },
    { id: 9, src: "m-portfolio-9.webp", category: "Photography", alt: "Portfolio 9" },
  ];


  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

 
  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>My Portfolio.</h1>
          <div className="btn">
            <button 
              className={`btn-click ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterClick('All')}
            >
              All
            </button>
            <button 
              className={`btn-click ${activeFilter === 'Branding' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Branding')}
            >
              Branding
            </button>
            <button 
              className={`btn-click ${activeFilter === 'Photography' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Photography')}
            >
              Photography
            </button>
            <button 
              className={`btn-click ${activeFilter === 'Fashion' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Fashion')}
            >
              Fashion
            </button>
            <button 
              className={`btn-click ${activeFilter === 'Product' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Product')}
            >
              Product
            </button>
          </div>
          <div className="images">
            {filteredItems.map((item) => (
              <img 
                key={item.id}
                id={`image${item.id}`}
                src={item.src} 
                alt={item.alt}
              
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;