import React, { useEffect, useState } from 'react'
import './home.css';


 const Home = () => {

    let  tech = ['UI/UX' , 'MERN-Stack' , 'APP-DEVLOPER' , 'FULL-STACk DEVLOPER '] ;

     const[index ,setIndex] = useState(0);
 
  

  useEffect(() =>{
   const interval =  setInterval(() => {
        setIndex((prev) => (prev + 1) % tech.length );
    }, 2000);
    return() => clearInterval(interval);
  },[]);



  return (
    <div className='container'>
        <div className='detail'>
            <span>+04 6543-9535-6515</span>
            <span>nairobi-degien@domian.com</span>
        </div>
        <br/>
        <br/>
        <div className='card'>

                <div className='image-content'>
                       <img  src='/imagegirls.png' alt="Nairobi Godot" />
                </div>     
                 
                <div className='text-content'>
                 <h4>Hello , My Name is </h4>
                 <br/>
                 <h1>Nairobi Godot</h1>


                 <div className='changestack'>{tech[index]}</div>


                 <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>
                 
                 
                 <button className='btn'>Donwload CV </button>



                
        
        </div>
        
            </div>
                

    </div>
  )
}

export default Home ; 