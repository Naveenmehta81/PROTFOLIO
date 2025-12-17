import React, { useState } from 'react';
import Card from './Card';
import './Cards.css'



 const Cards = (props) => {
    let course = props.course;

    console.log("cards ke under" , course);
    let category = props.category;

    
   if (!course) return <p>Loading...</p>;


    function getCourses(){
      if(category === "All"){
          let allcourses =[];
        // getCouses hai ye sara data ek array me la kr de rha hai 
        Object.values(course).forEach(array => {
             array.forEach(coursedata =>{
                allcourses.push(coursedata);
             });
        }); 
        return allcourses;
    }
    else{
      return course[category];
    }
      }


// function show() {
//   return Object.values(course).flat();
// }
       
  return (
    <div className="cards-container">
        {
         getCourses().map((course , index ) =>(
         <Card key={course.id || index} course={course}  />
        ))
    }
    </div>
  )
}


export default Cards;