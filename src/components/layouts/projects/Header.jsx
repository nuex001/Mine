import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaBackspace } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  return (
    <header>
        <FaBackspace className="back" onClick={getBack}/>
      <div className="txt">
        <h1>100 DAILY PROJECTS</h1>
        <p>
        I will document my progress, insights, and learnings from each project through blog posts, code repositories, and social media updates. By sharing my journey with the community, I hope to inspire others to join the Web3 revolution and contribute to the advancement of decentralized technologies.
        </p>
      </div>
    </header>
  );
}

export default Header;
