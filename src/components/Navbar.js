// import { Link } from "react-router-dom";
import '../css/navbar.css';


export default function NavBar (props) {
    return (
        <div class="navbar">
        <a href="/">Home</a>
        <div class="subnav">
            <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
            <a href="/AboutMe">About Monica</a>
            <a href="/SipAndPaint">Sip and Paint</a>
        </div>
        </div> 
        <div class="subnav">
            <button class="subnavbtn">Shop <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
            <a href="/Originals">Originals</a>
            <a href="/CanvasPrints">Canvas Prints</a>
            <a href="/PosterPrints">Poster Prints</a>
            <a href="/PhotoPrints">Photo Prints</a>
            </div>
        </div> 
        <a href="/Contact">Contact</a>
        <a href="/Cart">Cart</a>
        {/* <div>
            <a href='#cart'>
                <img src='cart.png' className='cart' alt='shopping cart icon'/>
            </a>
        </div> */}
        </div>
    )
}