import React from 'react';
import '../css/contact.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const Contact = () => {
  return (
    <>
      <Header />
      <NavBar />
        <section className='c-title'>
          Got a Question? Contact Me!
        </section>
        <section>
        <form action="mailto:monibartistry@gmail.com" method="post" enctype="text/plain" className='formText'>
          Name:<br/>
          <input type="text" name="name" className='nameInput' placeholder='Full Name' required /><br/>
          E-mail:<br/>
          <input type="text" name="mail" className='emailInput' placeholder='Email Address' required /><br/>
          Message:<br/>
          <textarea type="text" name="comment" size="50" className='messageInput' placeholder='How Can I Help You?' required ></textarea><br/>
          <input type="submit" value="Send" className='sendBtn'/>
          <input type="reset" value="Reset" className='resetBtn'/>
        </form>
        </section>
        <Footer />
    </>
  )
}

export default Contact