import React from 'react'
import { FaBackspace } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const getBack = () => {
      navigate(-1);
    };
  return (
    <header>
      <div className="txt">
      <div className="headtext">
       <h1>DigiGovernance</h1>
       <h2>DECENTRALIZED AUTONOMOUS ORGANISATION</h2>
       </div>
        <FaBackspace className="back" onClick={getBack}/>
      </div>
        <p>Leveraging my expertise in Solidity programming, I designed and implemented a robust DAO smart contract on the Ethereum blockchain. This contract autonomously governs decision-making processes within the organization, fostering transparency and decentralization.</p>
        <h2>🛠️ Technology</h2>
        <ul>
            <li>Rainbow Kit</li>
            <li>Ether.js</li>
            <li>ReactJs</li>
            <li>Hardhat(solidity)</li>
        </ul>
    </header>
  )
}

export default Header