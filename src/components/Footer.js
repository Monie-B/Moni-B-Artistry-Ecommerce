import React from 'react';
import '../css/footer.css'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='blockOne'>
                <p className='blkOneTxt'>
                    SITE<hr/>
                    About Monica<br/>
                    Sip & Paint<br/>
                    Shop<br/>
                    Contact
                </p>
            </div>
            <div className='blockTwo'>
                <p className='blkTwoTxt'>
                    Website Created by Monica 2022
                </p>
            </div>
            <div className='blockThree'>
                <p>
                    Follow Moni B. Artistry!<hr/>
                    <a href='https://www.instagram.com/moni.b.artistry/' target='_blank' rel='noreferrer'>
                        <img src='instagram.png' alt='instagram logo' className='IG' />
                    </a>
                    <a href='https://www.facebook.com/monibartistry' target='_blank' rel='noreferrer'>
                        <img src='facebook.png' alt='facebook logo' className='FB' />
                    </a>
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer