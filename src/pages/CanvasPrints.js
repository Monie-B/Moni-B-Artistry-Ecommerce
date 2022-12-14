import React from 'react';
import '../css/canvasprints.css';
import Header from '../components/Header';
import NavBar from '../components/Navbar';


const CanvasPrints = () => {
  return (
    <>
      <Header />
      <NavBar />
        <div>
          {/* <div className='ranges'>
            First Div
          </div> */}
          <div className='canvas-products'>
            {/* Second Div */}
            <div>
              {/* 1st Product div */}
              <a href='/canvasprints'>
                <img src='HumanNature.jpg' className='humanNature' alt='artwork of woman with her arms wrapped around herself'/>
              </a>
                <h4>
                  Human Nature
                </h4>
                  <p>
                    $51.75 - $206.10
                  </p>
            </div>
            <div>
              {/* 2nd Product div */}
              <a href='/canvasprints'>
                <img src='GimmeButterflies.jpg' className='gimmeButterflies' alt='artwork of woman with butterflies emerging from her head'/>
              </a>
                <h4>
                  You Give Me Butterflies
                </h4>
                  <p>
                    $51.75 - $92.91
                  </p>
            </div>
            <div>
              {/* 3rd Product div */}
              <a href='/canvasprints'>
                <img src='MelaninUniverse.jpg' className='melaninUniverse' alt='artwork of man and woman with a galaxy background'/>
              </a>
                <h4>
                  Melanin Universe
                </h4>
                  <p>
                    $51.75 - $92.91
                  </p>
            </div>
            <div>
              {/* 4th Product div */}
              <a href='/canvasprints'>
                <img src='Daisy.jpg' className='daisy' alt='artwork of woman with daisies in her hair'/>
              </a>
                <h4>
                  Daisy
                </h4>
                  <p>
                    $51.75 - $92.91
                  </p>
            </div>
            <div>
              {/* 5th Product div */}
              <a href='/canvasprints'>
                <img src='FreeSpirit.jpg' className='freeSpirit' alt='artwork of woman with wings posing in tall grass field'/>
              </a>
                <h4>
                  Free Spirit
                </h4>
                  <p>
                    $51.75 - $92.91
                  </p>
            </div>
            <div>
              {/* 6th Product div */}
              <a href='/canvasprints'>
                <img src='PureBeauty.jpg' className='pureBeauty' alt='artwork of woman with red flowers on her head and red butterflies surrounding her'/>
              </a>
                <h4>
                  Pure Beauty
                </h4>
                  <p>
                    $51.75 - $92.91
                  </p>
            </div>
            <div>
              {/* 7th Product div */}
              <a href='/canvasprints'>
                <img src='YouWooMe.jpg' className='youWooMe' alt='artwork of a man playing the piano and a robed woman sitting on top of the piano'/>
              </a>
                <h4>
                  You Woo Me
                </h4>
                  <p>
                    $51.75 - $206.10
                  </p>
            </div>
            <div>
              {/* 8th Product div */}
              <a href='/canvasprints'>
                <img src='Motherland.jpg' className='motherland' alt='artwork of woman centered and wild cats in each corner'/>
              </a>
                <h4>
                  Motherland
                </h4>
                  <p>
                    $51.75 - $92.91
                  </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default CanvasPrints