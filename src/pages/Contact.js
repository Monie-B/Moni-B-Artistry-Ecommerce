import React from 'react';
import '../css/contact.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';


const Contact = () => {
  return (
    <>
      <Header />
      <NavBar />
        <section className='c-title'>
          Got a Question? Contact Me!
        </section>
        <section>
           <form action='#email'>
            <textarea type='text' placeholder='How can I help you?' name='email' required></textarea>
            <button>Submit Form</button>
           </form>
        </section>
    </>
  )
}

export default Contact