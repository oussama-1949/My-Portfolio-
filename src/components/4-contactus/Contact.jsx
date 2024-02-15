import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope-o'></span>
        Contact Us
      </h1>
      <p>
        Contact us for more information and Get notified when i publish something new .
      </p>
      <div className='flex'>
        <form className='myform'>
          <div className='flex'  >
          <label  htmlFor="email">Email Address:</label>
          <input  type='email' name='' id='email' ></input>
          </div>
          <div  className='flex' style={{marginTop : "24px"}} >
          <label htmlFor="message">Your Message:</label>
          <textarea required  name='' id='message' ></textarea>
          </div>

          <button className='submit' >Submit</button>

        </form>
        <div className='border animation'>
          sssssssssssssssss
        </div>

      </div>

    </section>
  )
}
