import React from 'react';
import '../css/aboutme.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';


const AboutMe = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <img src='Moni.jpg' alt='Monica selfie' className='moni' />
        <div className='text-div'>
            <h2>
            Meet the Artist!
          </h2>
          <p>
            Hello and welcome to my website! I first started painting in 2018. I attended a Paint & Sip event and was hooked ever since!
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe