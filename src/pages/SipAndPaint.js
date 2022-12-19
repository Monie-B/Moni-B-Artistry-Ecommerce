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
        <img src='firstSP.JPEG' alt='art' className='art'/>
      </div>
      <div className='containerTwo'>
        <div className='art2'>
          <img src='SecondSP.jpeg' alt='Sip and Paint event' className='artpictwo'/>
        </div>
        <div className='textContainer'>
          <h3>
            Gather With Family & Friends
          </h3>
            <p>
              Paint & Sip parties are great for a relaxed and yet entertaining party. You'll soon learn the calming effects of painting, while still having a great time with your family and friends. 
            </p>
        </div>
      </div>
    </>
  )
}

export default SipAndPaint