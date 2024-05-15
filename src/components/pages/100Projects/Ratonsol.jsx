import React from "react";
import "../../../assets/css/project.css";
import Header from "../../layouts/project/Header";
import bg from "../../../assets/images/ratonsol.jpeg";
import bg1 from "../../../assets/images/ratonsol/bg1.png";
import bg2 from "../../../assets/images/ratonsol/bg2.png";
import bg3 from "../../../assets/images/ratonsol/bg3.png";
import bg4 from "../../../assets/images/ratonsol/bg4.png";
import { useNavigate } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

function Ratonsol() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  return (
    <div className="project">
      <header>
        <div className="txt">
          <div className="headtext">
            <h1>RATONSOL TOKEN</h1>
            <h2>RATONSOL ($ROL)</h2>
          </div>
          <FaBackspace className="back" onClick={getBack} />
        </div>
        <p>
          RATONSOL envisions a future where meme tokens play a significant role
          in shaping the decentralized finance landscape. Through innovation,
          community-driven development, and cross-chain compatibility, the
          project strives to establish itself as a leading platform for meme
          token creation and interaction.
        </p>
        <h2>🛠️ Technology</h2>
        <ul>
          <li>HTML & CSS</li>
          <li>Solidity</li>
        </ul>
      </header>
      <main>
        <img src={bg} alt="" />
        <div className="text">
          <h1>🛠️ Project Highlights:</h1>
          <h1>🔧 Frontend developement:</h1>
          {/* <p>
            Leveraging my expertise in Solidity programming, I designed and
            implemented a robust DAO smart contract on the Ethereum blockchain.
            This contract autonomously governs decision-making processes within
            the organization, fostering transparency and decentralization.
          </p> */}
          <ul>
            <h2>Navbar:</h2>
            <li>Logo: Memetoken logo</li>
            <li>Links: Home, About, Tokenomics, Contact</li>
            <li>
              Socials: Links to social media profiles (e.g., Twitter, Facebook,
              Instagram)
            </li>
            <h2>Header:</h2>
            <li>Name: RATONSOL</li>
            <li>Ticker: [$ROL]</li>
            <li>
              About: Brief description of Memetoken, its purpose, and what sets
              it apart.
            </li>
            <h2>Contract:</h2>
            <li>
              Address: Display the contract address of Memetoken for users to
              interact with or reference.
            </li>
            <h2> Tokenomics:</h2>
            <li>
              Explanation of the tokenomics of Memetoken, including details
              about distribution, token supply, and any unique features or
              mechanics.
            </li>
            <h2>Disclaimer:</h2>
            <li>
              A brief note or disclaimer regarding the information provided on
              the landing page, any risks associated with investing or
              participating in Memetoken, and any regulatory compliance
              statements.
            </li>
          </ul>
          {/* erer */}
          <h1>🔧 Smart contract developement:</h1>
          <ul>
            <h3>SPDX-License-Identifier & Solidity Version: </h3>
            <img src={bg1} className="sub" alt="" />
            <li>
              Identifies the license under which the contract is released. In
              this case, it's set to MIT, which is a permissive open-source
              license.
            </li>
            <li>
              The pragma directive specifies the compiler version compatibility.
              This contract is compatible with Solidity version 0.8.18 or
              higher.
            </li>
            <h2>ERC20 Standard:</h2>
            <img src={bg2} className="sub" alt="" />
            <li>
              Choose ERC20 as the token standard because it is widely supported
              and understood, making it easier for exchanges and wallets to
              integrate the token.
            </li>
            <li>
              ERC20: Inherits from the OpenZeppelin ERC20 implementation,
              providing standard ERC20 token functionalities.
            </li>
            <li>
              Ownable: Inherits from the OpenZeppelin Ownable contract,
              providing ownership functionalities.
            </li>
            <h2>Main Contract:</h2>
            <img src={bg3} className="sub" alt="" />
            <li>
              RatOnSol: The main contract declaration, which inherits from ERC20
              and Ownable.
            </li>
            <li>
              TOTAL_SUPPLY: Defines the total token supply, set to 1 billion
              tokens (1,000,000,000) with 18 decimal places.
            </li>
            <li>
              constructor: Initializes the contract upon deployment.
              </li>
              <li>
                ERC20("RatOnSol", "ROL"): Calls the constructor of the ERC20
                contract with the token name "RatOnSol" and the ticker symbol
                "ROL".
              </li>
              <li>
                Ownable(_initialOwner): Calls the constructor of the Ownable
                contract with the initial owner address passed as an argument.
              </li>
              <li>
                _mint(_initialOwner, TOTAL_SUPPLY): Mints the total token supply
                and assigns it to the initial owner address.
              </li>
            <img src={bg4} className="sub" alt="" />
          </ul>
          <p>This contract creates the RatOnSol token with the ticker symbol "ROL" and a total supply of 1 billion tokens. The initial supply is assigned to the deploying address, which is passed as an argument during deployment. The contract inherits standard ERC20 functionalities and includes ownership functionalities provided by Ownable.</p>
          {/* <h1>🎯Advanced Features Implementation:</h1> */}
          <h1>🌐 Project Link:</h1>
          <p>
            Curious to learn more? Explore the live project and delve into its
            intricacies by visiting{" "}
            <a href="https://ratonsol.netlify.app/" target="_blank">
              Live link
            </a>
            or check out the source code <a href="https://github.com/nuex001/ratonsol" target="_blank">source code</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Ratonsol;
