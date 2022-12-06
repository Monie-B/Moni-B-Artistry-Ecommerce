// import { Link } from "react-router-dom";
import '../css/navbar.css';


export default function NavBar (props) {
    return (
        <div class="navbar">
        <a href="#home">Home</a>
        <div class="subnav">
            <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
            <a href="/AboutMe">Monica</a>
            <a href="#team">Sip and Paint</a>
            </div>
        </div> 
        <div class="subnav">
            <button class="subnavbtn">Shop <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
            <a href="#bring">Originals</a>
            <a href="#deliver">Canvas Prints</a>
            <a href="#package">Poster Prints</a>
            <a href="#express">Photo Prints</a>
            </div>
        </div> 
        <a href="#contact">Contact</a>
        </div>
    )
}