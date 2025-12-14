import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsFillMoonStarsFill, BsSun, BsSunFill } from "react-icons/bs";
function Header() {
  const [bulbOn, setBulbOn] = useState(false);
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
    setBulbOn(!bulbOn);
  };
  return (
    <header>
      {
        !bulbOn ?
      <BsFillMoonStarsFill className="bulb" onClick={toggleBulb} />
      :
      <BsSunFill className="bulb" onClick={toggleBulb} />
      }
      <div className="txt">
        <h1>WELCOME</h1>
        <h1>TO MY SPACE</h1>
        <p>
          With four years of Fullstack development experience and a knack for
          web3 technologies like Solidity, React, and Node.js, I thrive on
          creating groundbreaking decentralized apps. From crafting bonding
          curves to building interactive games and NFT platforms, I specialize
          in turning bold ideas into reality.
        </p>
        <p>
          My hands-on experience with tools like IPFS, Hardhat, and
          Ethereum-based frameworks lets me tackle challenges head-on, always
          aiming to push the boundaries of what’s possible in web3.
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
