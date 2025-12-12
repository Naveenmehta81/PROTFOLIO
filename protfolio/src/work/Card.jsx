import React from 'react'
import './card.css';



const Card = (props) => {
let course = props.course;
return (
    <div className="card">
        <div className="card-image-container">
             <img src={course.image.url}></img>
            
            </div>
             <div className="card-info-container">
          <p>{course.title}</p>

          <p>{course.description}</p>

           </div> </div>
  )
}

export default Card;
