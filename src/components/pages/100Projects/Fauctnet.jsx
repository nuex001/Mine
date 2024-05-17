import React from "react";
import "../../../assets/css/project.css";
import Header from "../../layouts/project/Header";
import bg from "../../../assets/images/faucet/bg2.jpeg";
import { useNavigate } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

function Fauctnet() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  return (
    <div className="project">
      <header>
        <div className="txt">
          <div className="headtext">
            <h1>RATONSOL FAUCET</h1>
            <h2>RATONSOL($ROL) FAUCET</h2>
          </div>
          <FaBackspace className="back" onClick={getBack} />
        </div>
        <p>
        This project involves creating and distributing the Ratonsol token. The goal is to build a robust infrastructure that supports community engagement through a seamless token distribution system.
        </p>
        <h2>🛠️ Technology</h2>
        <ul>
          <li>ReactJs</li>
          <li>Etherjs</li>
        </ul>
      </header>
      <main>
        <img src={bg} alt="" />
        <div className="text">
          <h1>🛠️ Project Highlights:</h1>
          <h1>🔧 Frontend development:</h1>
          <h4>let's go through the whole process1.</h4>
          <ul>
            <h2>Yesterday: Ratonsol Token Development:</h2>
            <li>Token Creation: We successfully developed and configured the Ratonsol token, which is a type of cryptocurrency.</li>
            <li>
            Compliance: Ensured the token is fully operational and meets all our project specifications.
            </li>
            <h2>Today: Ratonsol Faucet Network Implementation</h2>
            <li>
            Objective: To enable community members to request and receive an allocation of 10,000 Ratonsol tokens. A faucet network is a system where users can get small amounts of tokens for free.
            </li>
            <li>
            Technology Stack: We're using Ether.js, a JavaScript library that helps us interact with the Ethereum blockchain.
            </li>
            <li>
            Wallet Management: We created a wallet instance using a private key. A wallet in blockchain is like a bank account where tokens are stored. The private key is a secure code that allows us to manage the wallet.
            </li>
            <li>
            Token Transfer: Tokens are transferred from the airdrop wallet, which is a wallet we set up specifically to distribute these tokens.
            </li>
            <h2>Token Distribution Mechanism:</h2>
            <li>Request Process: Community members can request token allocations through the faucet network.</li>
            <li>
            Automatic Sending: The system automatically sends the requested tokens to the user's wallet.
            </li>
            <li>
            Preventing Multiple Claims: When someone claims an allocation, we save this information to localStorage (a storage mechanism in the browser) to ensure they cannot claim tokens more than once.
            </li>
          </ul>
          <h1>🌐 Conclusion:</h1>
          <p>The Ratonsol faucet network is a pivotal component of our project. It enhances community participation by simplifying token distribution. This setup automates the allocation process and ensures users cannot claim tokens multiple times, maintaining fairness and integrity in the distribution process.</p>
          <h1>🌐 Project Link:</h1>
          <p>
          Curious to learn more? Explore the live project and delve into its intricacies by visiting{" "}
            <a href="https://ratonsolfauctnet.netlify.app" target="_blank">
              Live link
            </a>
            {" "} or check out the source code on {" "}
            <a href="https://github.com/nuex001/ratonsolFauctnet" target="_blank">
             Github
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Fauctnet;
