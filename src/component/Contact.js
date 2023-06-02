import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
    const notify = () => toast.success("Your message successfuly send!",{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const form = useRef();

    const sendEmail = (e) => {
      if (e.target.user_name === "" || e.target.user_email === "" || e.target.message === "") {
        alert("Please enter all");
      }else{
        e.preventDefault();
        emailjs.sendForm('service_c0gety8', 'template_v34jpe4', form.current, 'Ki_-V7Bo-7_1TT7LF')
          .then((result) => {
              console.log(result.text); 
              notify()
          }, (error) => {
              console.log(error.text);
          });
      };
    }

  return (
    <div className='contactUS'>
    <p>arjelou.jelou@gmail.com</p>
    <ToastContainer />
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={(e) => sendEmail()}/>
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='btn_submit' type="submit" value="Send" />
    </form>
    </div>
  );
};