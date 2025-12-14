import React from 'react'
import { FaGithub, FaMedium, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsEnvelope } from 'react-icons/bs';
function Footer() {
  return (
 <footer>
    <Link to={"/"}>Nuelyoungtech&copy; 2025</Link>
  <ul className="flex gap-4">

      <li>
    <a
      href="mailto:edeemmanuelchizurumoke@gmail.com"
      aria-label="Email"
      title="Email"
    >
      <BsEnvelope />
    </a>
  </li>
  <li>
    <a
      href="https://twitter.com/nueltechie"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter"
      title="Twitter"
    >
      <FaXTwitter />
    </a>
  </li>

  <li>
    <a
      href="https://github.com/nuex001"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <FaGithub />
    </a>
  </li>

  <li>
    <a
      href="https://www.linkedin.com/in/emmanuel-ede-a26a862b4"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
  </li>
{/* 
  <li>
    <a
      href="https://medium.com/@edeemmanuelchizurumoke"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Medium"
      title="Medium"
    >
      <FaMedium />
    </a>
  </li> */}


</ul>

 </footer>
  )
}

export default Footer