import React from 'react';
import { BsEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";


export default function contact() {
  return (
    <>
      <div className=''>
        <section className="contact__section text-center">
          <BsEnvelopeFill size={30} color=''/> arjelou.jelou@gmail.com
        </section> 
        <section className="contact__section text-center">
          <BsFillTelephoneFill size={30} color=''/> (+63) 955 770 2531
        </section>  
      </div>
    </>
  )
}
