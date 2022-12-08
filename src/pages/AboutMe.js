import React from 'react';
import '../css/aboutme.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';


const AboutMe = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className='first-block'>
        <img src='Moni.jpg' alt='Monica selfie' className='moni' />
      </div>
        <div className='text-div'>
          <h2>
            Meet the Artist!
          </h2>
            <p>
              Hello and welcome to my website! I first started painting in 2018. I attended a Paint & Sip event and was hooked ever since! After that, I went out and bought all of the supplies I would need to start painting on my own.
            </p>
        </div>
        <div>
          <img src='Sipandpaint.jpg' alt='Monica attending a sip and paint and holding her first painting' className='sip-pic' />
        </div>
    </>
  )
}

export default AboutMe