import React from 'react'
import Awardscard from './Awardscard';
import { FaDAndD } from "react-icons/fa";
import { FaDAndDBeyond } from "react-icons/fa6";
import { BiSolidAngry } from "react-icons/bi";

const AwardsCards = () => {
  
   const data = [
      {
        icon: <FaDAndD />,
        title: "Yearly Best Performer",
        description: "Site of the day",
      },
      {
        icon: <FaDAndDBeyond />,
        title: "Creative Designer",
        description: "Site of the day",
      },
      {
        icon: <BiSolidAngry />,
        title: "Best Learner Award",
        description: "Site of the day",
      },
    ]; 




  return (
    <div>
        {
            data.map((item , index) =>(
                <Awardscard
                
                key = {index}
                icon ={item.icon}
                title = {item.title}
                description = {item.description}
                />
                
            ))
        }

    </div>
  )
}

export default AwardsCards;