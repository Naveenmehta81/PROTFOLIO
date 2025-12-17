import React from 'react'
import './Card.css'



const Card = (props) => {
let course = props.course;

console.log("card ke uner " , course);
return (
    <div className="card">
        <div className="card-image-container">
            <img src={course?.image?.url} alt="" /> 

               
            </div>
             <div className="card-info-container">
          <p>{course?.title}</p>

          <p>{course?.description}</p>

          </div> 
    </div>
  )
}

export default Card;
