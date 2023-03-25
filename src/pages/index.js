import React, { useState, useEffect } from 'react';
import Data from '../data/data.json';
import '../index.css';
import avatar from '../assets/avatar.png';
import { motion } from "framer-motion";
import bce from '../assets/bc.png';
import fre from '../assets/fr.png';
import sch from '../assets/acmadescheduler.png';
import { ContactUs } from '../component/Contact';

export default function Index() {

    //Modla timer
    const [closenModal, setOpenModal] = useState(false);

    useEffect(() =>{
        setTimeout(() =>{
            setOpenModal(true)
        }, 5000)
    },[])

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
    <div>
        {
        closenModal && (
        <>
        <motion.div className='openToWork container-fluid' initial={{y: -250}} animate={{y: 0}}
            transition={{delay: 0.5, duration: .5, type: 'spring'}}
            >
            <p>Open to work</p>
            <button onClick={() => setOpenModal(false)}>x</button>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 1.2}}><a href="mailto:arjelou.jelou@gmail.com">HIRE ME</a></motion.button>
        </motion.div>
        </>
        )
        }
    </div>
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
            <div>
              
            </div>
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
    {
        Data.map(data => {
            return(
                <motion.div className='container cv_projectList'
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                >
                    <motion.img src={data.link_url} alt="avatar"
                    whileHover={{scale:1.1}}
                    variants={cardVariants}
                    />
                    <motion.ul>
                        <li>{data.tools[0]}</li>
                        <li>{data.tools[1]}</li>
                        <li>{data.tools[2]}</li>
                        <li>{data.tools[3]}</li>
                        <li>{data.tools[4]}</li>
                        <li>{data.tools[5]}</li>
                    </motion.ul>
                    <h3>{data.title}</h3>
                    <p>
                    {data.description}
                    </p>
                    <div className='btn_link'>
                        <a href={data.link_demo_url}>{data.link_demo_url === '' ? 'Coming soon...' : 'Demo'}</a>
                        <a href={data.link_frontend_url}>{data.link_frontend_url === '' ? 'Coming soon...' : 'Github'}</a>
                        <a href={data.link_backend_url}>{data.link_backend_url === '' ? 'Coming soon...' : 'Github'}</a>
                    </div>
                </motion.div>
            )
        }
        )
    }
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



