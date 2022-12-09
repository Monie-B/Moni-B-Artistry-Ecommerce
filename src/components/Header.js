import React from 'react';
import '../css/header.css'

const Header = () => {
  return (
    <>
      <div>
        <header className='header'>
            <a href='/'>
              <img src='IMG_4260.jpeg' alt='Moni B Artistry logo' className='logo'></img>
            </a>
            <h1 className='home-title'>
                <a href='/' className='mbalink'>
                  Moni B Artistry
                </a>
            </h1>
        </header>
      </div>
    </>
  )
}

export default Header