import React, { useEffect, useState } from 'react'
import {apiUrl , filterData} from './Data.jsx';
import Cards from './Cards';
import './Workfilter.css'

const Workfilter = () => {
    const[course , setcourses] = useState(null);
    const [category , setcategory] = useState(filterData[0].title);

    console.log(course);

 async function fetchdata(){
    let response = await fetch(apiUrl);
    let data = await response.json();
      setcourses(data.data)
 }


 useEffect(() =>{
    fetchdata();
 },[]);

 


  function filterhandler(title){
    setcategory(title);
  }




  return (
    <div className='filtercontainer'>
        <div className='filter-button'>
            {
               filterData.map((data) =>(
                <button
                    key = {data.id}
        className={`filter-button ${category === data.title ? 'active' : ''}`}
        onClick={() =>filterhandler(data.title)} 
        >
            {data.title}
                </button>
               ))
            }
        </div>
        <div>
           <Cards  course = {course} category={category}/>
        </div>
       
    </div>
  )
}

export default Workfilter;