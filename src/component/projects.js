import React from 'react';
import '../global.css';
import { BsGithub, BsLink45Deg  } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

export default function projects() {
  return (
    <>
    <div className='container'>
      <section className='cv_projects'>
        <h4>B2B eCommerce</h4>
        <article>
          <p>Web app built with React,
            Node, Express, and MySQL for
            the manufacturing of
            garments that serve other
            companies' needs.
          </p>
          <NavLink to='https://github.com/arjelou/ecommerce'><BsGithub title='Github' className='icon'/> </NavLink>
          <NavLink to='https://ecommerce-arjelou.vercel.app/'><BsLink45Deg title='Link' className='icon'/> </NavLink>
        </article>
      </section>
      <section className='cv_projects'>
        <h4>B2B eCommerce Back End</h4>
        <article>
          <p>Web API built with
            Node, Express, and ORM/MySQL for
            the manufacturing of
            garments that serve other
            companies' needs.
          </p>
          <NavLink to='https://github.com/arjelou/ecommercebackend'><BsGithub title='Github' className='icon'/> </NavLink>
        </article>
      </section>
    </div>
   </>
  )
}
