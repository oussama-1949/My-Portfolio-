
import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className="parent-avatar flex">

          <img src='me.jpg' className='avatar ' alt=''></img>
          <div className='icon-verified' ></div>

        </div>


        <h1 className='title'>Software designer, founder, and amateur astronaut.</h1>
        <p className='sub-title'>I’m Oussama,
         a software designer and entrepreneur based in Salé Morocco. I have developed many types of front-end booking and ecommerce platforms , <span className='skinny'> I design and code beautifully simple things and i love what i do .</span></p>

          <div className="all-icons flex">

            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin"></div>
          </div>




      </div>
      <div className='right-section animation border'>
        animation
      </div>
    </section>
  )
}
