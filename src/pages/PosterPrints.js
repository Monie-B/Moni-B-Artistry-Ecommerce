import React from 'react';
import '../css/posterprints.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


function PosterPrints (props) {
  return (
    <>
      <Header />
      <NavBar />
        <div>
            This will be the Poster Prints Page!
        </div>
      <Footer />
    </>
  )
}

export default PosterPrints