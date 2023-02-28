import React from 'react';
import '../global.css';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import avatar from '../assets/avatar.png';


export default class index extends React.Component {
render() {
  return (
<>
  <div className='container'>
      <section className='cv'>
        <img src={avatar} alt='im_avatar' />
        <h2>Arjelou Carampatana</h2>
        <p>Web Developer</p>
      </section>
      <section className='cv_menu'>
        <NavLink className={({isActive}) => isActive ? "cv_menu_active" : "cv_menu_inactive"} to='/contact'>Contact</NavLink>
        <NavLink className={({isActive}) => isActive ? "cv_menu_active" : "cv_menu_inactive"} to='/about'>About</NavLink>
        <NavLink className={({isActive}) => isActive ? "cv_menu_active" : "cv_menu_inactive"} to='/skills'>Skills</NavLink>
        <NavLink className={({isActive}) => isActive ? "cv_menu_active" : "cv_menu_inactive"} to='/projects'>Projects</NavLink>
      </section>

      <div>
          <Outlet />
      </div>
  
  </div>
</>
  )
}
}
