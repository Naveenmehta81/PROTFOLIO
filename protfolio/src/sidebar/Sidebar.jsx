import React from 'react'
import { FaHome } from "react-icons/fa";
import { BsPersonRolodex } from "react-icons/bs";

export const sidebar = () => {
    const menuItem=[
        {
            Path : "/",
            name : "Home",
            icon : <FaHome />
         },
            {
            Path : "/About",
            name : "about",
            icon :<BsPersonRolodex />
         }

]
  return (
    <div>

    </div>
  )
}
