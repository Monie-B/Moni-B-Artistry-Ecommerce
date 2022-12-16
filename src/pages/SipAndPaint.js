import React from 'react';
import '../css/sipandpaint.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';


const SipAndPaint = () => {
  return (
    <>
      <Header />
      <NavBar />
      <section>
        <h1 className='s-title'>
          Host a Sip & Paint With Me
        </h1>
      </section>
      <div className='sectionOne'>
        <h3>
          Plan in Advance or Last Minute
        </h3>
        <div>
          <p>
            Paint & Sip parties are great for a relaxed and yet entertaining party. You'll soon learn the calming effects of painting, while still having a great time with your family and friends. 
          </p>
        </div>
      </div>
      <div className='art1'>
        <img src='IMG_4391.JPG' alt='art' className='art'/>
      </div>
    </>
  )
}

export default SipAndPaint