import React from 'react';
import './About.css';
import Cards from './Cards';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page-container">
      
    
      <div className="bio-section">
        <div className="bio-left">
          <div className="image-wrapper">
            
           
            <img src="/imagegirls.png" alt="Profile" className="profile-img"/>
            
            <div className="social-icons-curve">
               <a href="#"><FaFacebookF /></a>
               <a href="#"><FaTwitter /></a>
               <a href="#"><FaInstagram /></a>
               <a href="#"><FaLinkedinIn /></a>
               <a href="#"><FaPinterestP /></a>
            </div>
          </div>
          
          <div className="profile-name-box">
             <h5>UX / UI Designer</h5>
             <h2>Nairobi Gadot</h2>
          </div>
        </div>

        <div className="bio-right">
          <h1 className="section-title">Biography</h1>

          <div className="bio-text">
            <p>
            I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.
            </p>
            <p>
              I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.
            </p>
          </div>

          <div className="details-grid">
             <div className="detail-col">
               <p><strong>Name:</strong> Nairobi Gadot</p>
               <p><strong>Birthday:</strong> 4th April 1994</p>
               <p><strong>Age:</strong> 26 years</p>
               <p><strong>Address:</strong> San Francisco</p>
             </div>
             <div className="detail-col">
               <p><strong>Phone:</strong> (+38) 469 2344 2364</p>
               <p><strong>Email:</strong> info@domainname.com</p>
               <p><strong>Skype:</strong> nairob.40</p>
               <p><strong>Freelance:</strong> Available</p>
             </div>
          </div>
        </div>
      </div>

    

      
      <div className="services-section">
         <Cards />
      </div>

    </div>
  )
}

export default About;