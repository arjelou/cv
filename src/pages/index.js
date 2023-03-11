import React from 'react';
import '../index.css';
import avatar from '../assets/avatar.png';
import { motion } from "framer-motion";
import bce from '../assets/bc.png';
import fre from '../assets/fr.png';

const index = () => {
return (
<>
    <div className='contaciner-fluid cv_upper'>
        <div className='cv_fullName'>
            <span className='mt-1'>Arjelou Carampatana</span>
        </div>
        <div className='container cv_hero'>
            <motion.h2
            drag
            dragConstraints={{
            top: -150,
            left: -250,
            right: 1180,
            bottom: 550,
            }}>
            HELLO' I'm Arjelou</motion.h2>
            <motion.p
            drag
            dragConstraints={{
            top: -150,
            left: -250,
            right: 1180,
            bottom: 550,
            }}>
            Juior Full-stack Web Developer
            </motion.p>
        </div>
    </div>
    <motion.div className='container cv_content'
    initial={{ opacity: 0.50 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    >
        <img src={avatar} alt="avatar" />
        <ul>
            <li>HTMLS</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ORM</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
            <li>Bootstrap</li>
        </ul>
        <p> 
            As a career shifter from IT Support to web development, I am determined to develop my skills
            further and use my technical knowledge to create innovative web applications. My goal is to be
            a valuable development team member and continuously learn and
            grow as a web developer.
        </p>  
    </motion.div>
    <div className='container skills_header'>
        <h5>Projects</h5>
    </div>
    <div className='container cv_projectList'>
        <img src={fre} alt="avatar" />
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Vercel</li>
            <li>Formik</li>
        </ul>
        <h3>B2B eCommerce</h3>
        <p>
        Web app built with React,
        Node, Express, and MySQL for
        the manufacturing of
        garments that serve other
        companies' needs.
        </p>
        <div className='btn_link'>
        <a href='https://ecommerce-arjelou.vercel.app/'>Demo</a>
        <a href='https://github.com/arjelou/ecommerce'>Github</a>
        </div>
    </div>
    <div className='container cv_projectList'>
        <img src={bce} alt="avatar" />
        <ul>
            <li>ORM</li>
            <li>MySQL</li>
            <li>Node</li>
            <li>Express</li>
        </ul>
        <h3>B2B eCommerce Back End</h3>
        <p>
        Web API built with
        Node, Express, and ORM/MySQL for
        the manufacturing of
        garments that serve other
        companies' needs.
        </p>
        <div className='btn_link'>
        <a href='https://ecommerce-arjelou.vercel.app/'>Demo</a>
        <a href='https://github.com/arjelou/ecommercebackend'>Github</a>
        </div>
    </div>
    <div className='container cv_contactus'>
        <h4>GET IN<span>TOUCH</span></h4>
        <div className='links'>
            <a href="mailto:arjelou.jelou@gmail.com?subject=Mail from Portfolio website">arjelou.jelou@gmail.com</a>
            <a href="tel:+639763959021">(+63) 976-395-9021</a>
            <a href='https://www.google.com/maps/place/Davao+City,+Davao+del+Sur/@7.2532789,125.1708762,10z/data=!3m1!4b1!4m6!3m5!1s0x32f96d9f519e327f:0xb53a24589f79c573!8m2!3d7.190708!4d125.455341!16zL20vMDJnbjF4'>
            Davao City, 8000
            </a>           
        </div>
    </div>
</>
)
}

export default index;

