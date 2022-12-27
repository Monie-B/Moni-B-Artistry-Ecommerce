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
        <form action="mailto:monibartistry@gmail.com" method="post" enctype="text/plain" className='formText'>
          Name:<br/>
          <input type="text" name="name" className='nameInput'/><br/>
          E-mail:<br/>
          <input type="text" name="mail" className='emailInput'/><br/>
          Message:<br/>
          <textarea type="text" name="comment" size="50" className='messageInput'></textarea><br/>
          <input type="submit" value="Send"/>
          <input type="reset" value="Reset"/>
        </form>
        </section>
    </>
  )
}

export default Contact