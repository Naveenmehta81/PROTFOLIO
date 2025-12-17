import React from 'react'
import './About.css'
import Cards from './Cards'



const About = () => {
  return (
    <>
    <div className="about-container">


    
      <div className="about-left">
        <img src="imagegirls.png" alt="Profile"/>
        <h5>UX / UI Designer</h5>
        <h2>Nairobi Gadot</h2>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="about-right">

        <h1>Biography</h1>

        <p>
        I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.
        </p>
        <p>
          I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.
        </p>

    
        <div className="details-box">
          
          
          <ul>
            <li><strong>Name:</strong> Nairobi Gadot</li>
            <li><strong>Birthday:</strong> 4 April 1994</li>
            <li><strong>Age:</strong> 26 years</li>
            <li><strong>Address:</strong> San Francisco</li>
          </ul>

          
          <ul>
            <li><strong>Phone:</strong> (+38) 469 2344 2364</li>
            <li><strong>Email:</strong> info@domainname.com</li>
            <li><strong>Skype:</strong> nairob.40</li>
            <li><strong>Freelance:</strong> Available</li>
          </ul>

        </div>
      </div>
      

    </div>
     <div className="about-cards-section">
               <Cards/>
       </div>

      </>
  )
}

export default About;
