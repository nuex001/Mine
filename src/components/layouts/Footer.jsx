import React from 'react'
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
 <footer>
    <h1>Nuelyoungtech&copy; 2024</h1>
    <ul>
        <li><a href="https://twitter.com/nuelyoungtech" target='_blank'><FaXTwitter/></a></li>
        <li><a href="https://www.linkedin.com/in/emmanuel-ede-a26a862b4" target='_blank'><FaLinkedinIn/></a></li>
        <li><a href="https://github.com/nuex001" target='_blank'><FaGithub/></a></li>
    </ul>
 </footer>
  )
}

export default Footer