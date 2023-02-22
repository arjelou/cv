import React from 'react';
import './global.css';
import Navbar from './component/navbar';
import { BsGithub,BsArrowRight,BsPersonCircle } from "react-icons/bs";
import { NavLink } from 'react-router-dom';


export default class App extends React.Component {
render() {
  return (
  <>
    <div className='container'>
      <div>
        <section className=''>
         <Navbar />
        </section>
      </div>
      <div>
        <section className='content'>
          <BsPersonCircle size={170} color='blue'/>
          <h2>Arjelou Carampatana</h2>
        <p>Web Developer</p>
        <button>Connect <BsArrowRight size={20} /></button><br />
        <BsGithub />
        </section>
      </div>
      <div>
      <div className='gap-3 d-flex justify-content-start'>
     <NavLink></NavLink>
        <p>Contact</p>
         <p>About</p>
         <p>Skills</p>
       </div>
      </div>
    </div>
  </>
  )
}
}
