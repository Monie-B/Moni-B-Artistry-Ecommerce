import React from 'react';
import '../css/home.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <>
        <Header />
        <NavBar />
            <div className='left-div'>
                <img src='Butterflies.jpeg' alt='artwork of woman with butterflies emerging from her head' className='butterflies'></img>
                <img src='BeachBabes.JPEG' alt='artwork of three women sitting topless on a beach with their backs towards viewers' className='beachBabes'></img>
            </div>
            <div className='middle-div'>
                <img src='IMG_4391.JPG' alt='Monica surrounded by her artwork' className='main-img'></img>
            </div>
            <div className='right-div'>
                <img src='PianoDate.jpg' alt='artwork of a man playing the piano and a robed woman sitting on top of the piano' className='pianoDate'></img>
                <img src='GreenIvy.jpg' alt='artwork of a woman sideview with green leaves in her braided hair' className='greenIvy'></img>
            </div>
        <Footer />
    </>
  )
}

export default Home