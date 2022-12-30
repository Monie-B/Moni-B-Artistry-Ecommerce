import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import SipAndPaint from './pages/SipAndPaint';
import Originals from './pages/Originals';
import CanvasPrints from './pages/CanvasPrints';
import PosterPrints from './pages/PosterPrints';
import PhotoPrints from './pages/PhotoPrints';
import Cart from './pages/Cart';


function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sipandpaint" element={<SipAndPaint />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/canvasprints" element={<CanvasPrints />} />
          <Route path="/posterprints" element={<PosterPrints />} />
          <Route path="/photoprints" element={<PhotoPrints />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
