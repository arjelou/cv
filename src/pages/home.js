import React from 'react';
import '../global.css';
import '../home.css';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { BsGithub, BsBoxArrowUpRight  } from "react-icons/bs";

export default class home extends React.Component {
render() {
  return (
<>
  <div className='container'>
    <section className='cv_main'>
      <article>
        <img src={avatar} alt='im_avatar' />
        <h2>Arjelou Carampatana</h2>
        <p>Web Developer</p>
      </article>
    </section>
    <section className='bio'>
      <article>
          <p>
          As a career shifter from IT Support to web development, I am determined to develop my skills
          further and use my technical knowledge to create innovative web applications. I am excited to
          work with the tech stack of MySQL, Express.js, React.js, and Node.js and use Redux for state
          management. My goal is to be a valuable development team member and continuously learn and
          grow as a web developer.
          </p>
        </article>
    </section>
    <section className='cv_tools'>
      <h3>Skills</h3>
      <article>
        <NavLink className={({isActive}) => isActive ? "cv__active" : "cv_inactive"} to='/language'>Language</NavLink>
        <NavLink className={({isActive}) => isActive ? "cv__active" : "cv_inactive"} to='/framework'>Framework</NavLink>
        <NavLink className={({isActive}) => isActive ? "cv__active" : "cv_inactive"} to='/tools'>Tools</NavLink>
      </article>
    </section>
    <div>
        <Outlet />
    </div>
    <section className='cv__projets'>
      <h3>Projects</h3>
      <article>
        <h4>B2B eCommerce</h4>
        <p>Web app built with React,
          Node, Express, and MySQL for
          the manufacturing of
          garments that serve other
          companies' needs.
          <NavLink to='https://github.com/arjelou/ecommerce'><BsGithub title='Github' className='icon'/> </NavLink>
          <NavLink to='https://ecommerce-arjelou.vercel.app/'><BsBoxArrowUpRight title='Link' className='icon'/> </NavLink>

        </p>
      </article>
      <br />
      <article>
        <h4>B2B eCommerce Back End</h4>
        <p>Web API built with
          Node, Express, and ORM/MySQL for
          the manufacturing of
          garments that serve other
          companies' needs.
          <NavLink to='https://github.com/arjelou/ecommercebackend'><BsGithub title='Github' className='icon'/> </NavLink>
        </p>
      </article>
    </section>
  </div>
</>
  )
}
}
