import React from "react";
import { FaPlus } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
function Header() {
  const toggleBulb = (e) => {
    const root = document.documentElement; // Get the root element of the document
    // Get the computed styles of the document's root element
    const rootStyles = getComputedStyle(root);
    // Retrieve the values of the CSS custom properties
    const bgColor = rootStyles.getPropertyValue("--bg");
    const textColor = rootStyles.getPropertyValue("--text");
    // Swap the values of --bg and --text
    root.style.setProperty("--bg", textColor);
    root.style.setProperty("--text", bgColor);
  };
  return (
    <header>
      <BsFillMoonStarsFill className="bulb" onClick={toggleBulb}/>
      <div className="txt">
        <h1>WELCOME</h1>
        <h1>TO MY SPACE</h1>
        <p>
          With over Three years of expertise in Fullstack development and a
          profound grasp of Ethereum and web3 technologies, encompassing React,
          Node.js, and Solidity, I have cultivated a keen awareness of the
          distinctive challenges and opportunities inherent in decentralized web
          applications.
        </p>
        <p>
          My hands-on involvement in Ethereum-based projects, coupled with
          proficiency in web3 technologies such as IPFS, Solidity, and Hardhat,
          positions me to craft pioneering and decentralized applications that
          empower users.
        </p>
      </div>
      <div className="plus">
        <FaPlus className="icon" />
        <FaPlus className="icon" />
      </div>
    </header>
  );
}

export default Header;
