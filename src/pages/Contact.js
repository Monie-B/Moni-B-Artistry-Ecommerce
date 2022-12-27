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
        <form action="mailto:someone@example.com" method="post" enctype="text/plain">
          Name:<br/>
          <input type="text" name="name"/><br/>
          E-mail:<br/>
          <input type="text" name="mail"/><br/>
          Comment:<br/>
          <textarea type="text" name="comment" size="50"></textarea><br/><br/>
          <input type="submit" value="Send"/>
          <input type="reset" value="Reset"/>
        </form>
        </section>
    </>
  )
}

export default Contact