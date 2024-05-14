import React from "react";
import "../../assets/css/project.css";
import Header from "../layouts/project/Header";
import bg4 from "../../assets/images/bg4.jpg";
import { useParams } from "react-router-dom";

function Daoprj() {
  const {id} = useParams();
  return (
    <div className="project">
      <Header />
      <main>
        <img src={bg4} alt="" />
        <div className="text">
          <h1>🛠️ Project Highlights:</h1>
          <h1>🔧 DAO Smart Contract Development:</h1>
          <p>
          Leveraging my expertise in Solidity programming, I designed and implemented a robust DAO smart contract on the Ethereum blockchain. This contract autonomously governs decision-making processes within the organization, fostering transparency and decentralization.
          </p>
          <h1>＄Wallet Integration:</h1>
          <p>
          I meticulously crafted a user-friendly frontend interface that enables users to seamlessly create, search, vote on, and execute proposals within the DAO. The intuitive design and smooth user experience enhance engagement and accessibility for all participants.
          </p>
          <h1>🎯Advanced Features Implementation:</h1>
          <p>
          Going beyond the basics, I incorporated advanced features into the DAO platform. These include proposal creation with IPFS storage for detailed information, IPFS hash storage on the smart contract for data integrity, and robust validation mechanisms to ensure the DAO's security and reliability.
          </p>
          <h1>🚀 Project Impact:</h1>
          <p>My work on this project has contributed to advancing the capabilities of decentralized governance systems. By creating a functional and user-centric DAO platform, I aim to empower communities to collaboratively make decisions in a transparent and trustless manner, driving the adoption of decentralized technologies.</p>
          <h1>🌐 Project Link:</h1>
          <p>Curious to learn more? Explore the live project and delve into its intricacies by visiting <a href="#" target="_blank">Live link</a>. Witness firsthand how decentralized governance is reshaping the future of organizational struct</p>
        </div>
      </main>
    </div>
  );
}

export default Daoprj;
