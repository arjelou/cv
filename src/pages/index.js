import React from 'react';
import '../index.css';
import avatar from '../assets/avatar.png';
import { motion } from "framer-motion";
import bce from '../assets/bc.png';
import fre from '../assets/fr.png';
import sch from '../assets/acmadescheduler.png';
import { ContactUs } from '../component/Contact';



export default function Index() {
    const cardVariants = {
        offscreen: {
          y: '100vw'
        },
        onscreen: {
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.8
          }
        }
    };

    const profileVariants = {
        offScreen: {
          opacity: 0
        },
        onScreen: {
          opacity: 1,
          transition: {
            type: "fade",
            delay: 0.2,
            duration: 0.8
          }
        }
    };
      
return (
<>
    <motion.div className='contaciner-fluid cv_upper'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: .5, duration: .5}}
        >
        <div className='cv_fullName'>
            <span className='mt-1'>Arjelou Carampatana</span>
        </div>
        <div className='container cv_hero'>
            <motion.h2
              drag
            dragConstraints={{
            top: -150,
            left: -250,
            right: 350,
            bottom: 550,
            }}
            initial={{y: '-100vw'}}
            animate={{y: 0}}
            transition={{delay: .10, type: 'spring'}}
            >
            Hai, I'm Arjelou</motion.h2>
            <motion.p
            drag
            dragConstraints={{
            top: -150,
            left: -250,
            right: 1180,
            bottom: 550,
            }}
            initial={{y: '100vw'}}
            animate={{y: 0}}
            transition={{delay: .10, duration: 1, type: 'spring'}}
            >
            Web Developer
            </motion.p>
        </div>
    </motion.div>
    <motion.div className='container cv_content'
        initial='offScreen'
        whileInView='onScreen'
        viewport={{once: true, amount: 0.8}}
        >
        <motion.img src={avatar} alt="avatar" 
        whileHover={{scale:1.1}}
        variants={profileVariants}
        />
        <motion.ul
        variants={profileVariants}
        >
            <li>HTMLS</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ORM</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>React</li>
            <li>Node</li>
            <li>Bootstrap</li>
        </motion.ul>
        <motion.p
        variants={profileVariants}
        > 
            As a career shifter from IT Support to web development, I am determined to develop my skills
            further and use my technical knowledge to create innovative web applications. My goal is to be
            a valuable development team member and continuously learn and
            grow as a web developer.
        </motion.p>  
    </motion.div>
    <div className='container skills_header'>
        <h5>Projects</h5>
    </div>
    <motion.div className='container cv_projectList'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      >
        <motion.img src={fre} alt="avatar"
        whileHover={{scale:1.1}}
        variants={cardVariants}
         />
        <motion.ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Vercel</li>
            <li>Formik</li>
        </motion.ul>
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
    </motion.div>
    <motion.div className='container cv_projectList'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      >
        <motion.img src={bce} alt="avatar" 
        whileHover={{scale:1.1}}
        variants={cardVariants}
        />
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
    </motion.div>
    <motion.div className='container cv_projectList'
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      >
        <motion.img src={sch} alt="avatar" 
        whileHover={{scale:1.1}}
        variants={cardVariants}
        />
        <ul>
            <li>React</li>
            <li>Firestore</li>
            <li>Authentication</li>
            <li>Hosting</li>
        </ul>
        <h3>ACMADE Scheduler</h3>
        <p>
        Build with a serverless web applications and NoSQL document 
        database enable to use google provider authentication.
        </p>
        <div className='btn_link'>
        <a href='.'>Coming soon...</a>
        <a href='.'>Coming soon...</a>
        </div>
    </motion.div>
    <div className='container cv_contactus'>
        <h4>GET IN<span>TOUCH</span></h4>
        <div className='contactUS'>
            <ContactUs />
        </div>
        <div className='links'>
            <a href="tel:+639763959021">(+63) 976-395-9021</a>
            <a href='https://www.google.com/maps/place/Davao+City,+Davao+del+Sur/@7.2532789,125.1708762,10z/data=!3m1!4b1!4m6!3m5!1s0x32f96d9f519e327f:0xb53a24589f79c573!8m2!3d7.190708!4d125.455341!16zL20vMDJnbjF4'>
            Davao City, 8000
            </a>           
        </div>
    </div>
</>
)
}

// export default index;


