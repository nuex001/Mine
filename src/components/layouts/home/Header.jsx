import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
// import { BsFillMoonStarsFill, BsSun, BsSunFill } from "react-icons/bs";
import { Moon, SunDim } from "lucide-react";
import Modal from "../../Modal";
function Header({ setIsModalOpen, isModalOpen }) {
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

  const handleSubmit = async (formData) => {
    // Integrate with your Web3Forms API
    const fullFormData = new FormData();
    fullFormData.append("access_key", "bc895016-3b52-483d-a6f1-62dbcfb41bf6");
    fullFormData.append("email", formData.email);
    fullFormData.append("message", formData.intent);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fullFormData,
    });

    const data = await response.json();
    if (data.success) {
      console.log("Form Submitted Successfully");
    } else {
      throw new Error("Submission failed");
    }
  };
  return (
    <>
      <header>
        {!bulbOn ? (
          <Moon className="bulb" onClick={toggleBulb} />
        ) : (
          <SunDim className="bulb" onClick={toggleBulb} />
        )}
        <div className="txt">
          <h1>WELCOME</h1>
          <h1>TO MY SPACE</h1>
          <p>
            I’m Nuel, a fullStack developer with 5 years of experience building
            scalable Web2 and Web3 products.
          </p>
          <p className="stack">JavaScript, React, Node.js, Solidity...</p>
          <a
            href="mailto:edeemmanuelchizurumoke@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            [ Start a Project ]
          </a>
        </div>
        <div className="plus">
          <FaPlus className="icon" />
          <FaPlus className="icon" />
        </div>
      </header>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Header;
