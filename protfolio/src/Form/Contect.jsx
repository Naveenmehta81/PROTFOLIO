import React from 'react'
import { SiOpenstreetmap } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";
import { FcPhoneAndroid } from "react-icons/fc";
import './Contect.css'
import Form from './Form';

const Contect = () => {
  return (
    <div className='contect-contenir'>
      
      <div className='heading'>  
        <h1>What’s your story? </h1>
        <br/>
        <h1> Get in touch</h1>
        <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
        </div>

        <div className='info'> 
          <p><SiOpenstreetmap />123 Stree New York City , United States Of America 750065.</p>
          <p><MdMarkEmailRead />support@domain.com</p>
           <p><FcPhoneAndroid />+044 9696 9696 3636</p>


        </div>

        <div className='form'>
          <Form/>
        </div>



    </div>
  )
}

export default Contect





