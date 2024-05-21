import React from 'react'
import { FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
 <footer>
    <Link to={"/"}>Nuelyoungtech&copy; 2024</Link>
    <ul>
        <li><a href="https://twitter.com/nuelyoungtech" target='_blank'><FaXTwitter/></a></li>
        <li><a href="https://www.linkedin.com/in/emmanuel-ede-a26a862b4" target='_blank'><FaLinkedinIn/></a></li>
        <li><a href="https://github.com/nuex001" target='_blank'><FaGithub/></a></li>
        <li><a href="https://medium.com/@edeemmanuelchizurumoke" target='_blank'><FaMedium /></a></li>
    </ul>
 </footer>
  )
}

export default Footer