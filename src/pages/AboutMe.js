import React from 'react';
import '../css/aboutme.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';


const AboutMe = () => {
  return (
    <>
      <Header />
      <NavBar />
      {/* <div className='first-block'>
        <img src='Moni.jpg' alt='Monica selfie' className='moni' />
      </div> */}
        <main className='text-div'>
        <img src='Moni.jpg' alt='Monica selfie' className='moni' />
        <div className='first-p'>
          <h1 className='m-t-a'>
            Meet the Artist!
          </h1>
            <p className='p-element'>
              Monica started her painting journey in 2018. She's a self taught artist that started in portrait sketching/drawing and has since progressed to acrylic painting. 
              <img src='Sipandpaint.jpg' alt='Monica attending a sip and paint and holding her first painting' className='sip-pic' /> Her artwork has always been just a hobby, but with various requests, she decided to start selling. While getting requests for her work, she also received requests for sip and paints. Painting came easily to her, but she wanted to see how it would be to teach others. She began painting with her close friends, instructing them while just hanging out. Now, she's hosted multiple private paint parties and offers her instruction to the DMV area.      
            </p>
          </div>
        </main>
        <div>
        <p className='second-p'>
             Monica's long-standing passion of being artistic and creative began as a child. But never really knowing how being an artist could make a suitable living, she pursued her creativity in other ways. As she got older, she conjoined her creativity and love of tasty goods in soap making. Her handmade natural soaps resembled pastries good enough to eat! Check out @bath_crafts on Instagram to see her previous work! Now Monica is back in the business of arts by selling her original artwork, canvas prints, photo prints, and instruction for paint parties.
          </p>
       </div>
    </>
  )
}

export default AboutMe