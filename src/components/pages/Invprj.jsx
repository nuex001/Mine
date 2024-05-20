import React from "react";
import "../../assets/css/project.css";
import Header from "../layouts/project/Header";
import invi from "../../assets/images/invi.jpg";
import { useParams } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Invprj() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  const { id } = useParams();
  return (
    <div className="project">
      <header>
        <div className="txt">
          <div className="headtext">
            <h1>InvigorateDAO</h1>
            <h2>InvigorateDAO | Web3 Marketing Agency</h2>
          </div>
          <FaBackspace className="back" onClick={getBack} />
        </div>
        <p>
          InvigorateDAO helps projects to connect with the best investors,
          software developers, strategic partners & influncers to grow your
          project
        </p>
        <h2>🛠️ Technology</h2>
        <ul>
          <li>Rainbow Kit</li>
          <li>Ether.js</li>
          <li>ReactJs</li>
          <li>Hardhat(solidity)</li>
          <li>Smart Contract Integration</li>
        </ul>
      </header>
      <main>
        <img src={invi} alt="" />
        <div className="text">
          <h1>🛠️ Empowering Growth in the Crypto Space:</h1>
          <h1>👨‍💻 Developer Profile:</h1>
          <p>
            As the lead developer at InvigarateDAO, I played a pivotal role in
            spearheading the frontend development using React.js, Rainbow Kit,
            and Hardhat. My expertise in blockchain technology and decentralized
            applications (dApps) enabled me to contribute significantly to the
            success of the project.
          </p>
          <h1>NFT Pass and Minting Integration:</h1>
          <p>
            I led the implementation of NFT pass and minting functionalities
            within the InvigarateDAO platform. Leveraging my skills in frontend
            development and blockchain integration, I ensured seamless user
            experiences for alpha users while facilitating learning
            opportunities within the ecosystem.
          </p>
          <h1>Web Development & Design:</h1>
          <p>
            From conceptualization to deployment, I drove the development and
            design of key platform features. Utilizing technologies such as
            React.js and Rainbow Kit, I delivered responsive and scalable web
            solutions tailored to meet the needs of our diverse user base.
          </p>
          <h1>Smart Contract Integration: </h1>
          <p>
            Working in tandem with our backend team, I integrated smart
            contracts using Hardhat to enable secure and efficient blockchain
            interactions. By ensuring seamless communication between frontend
            and blockchain components, I contributed to the platform's
            robustness and reliability.
          </p>
          <h1>🚀 Smart Contract Development: </h1>
          <p>
            Smart Contract Development: Leveraging my proficiency in Solidity
            and smart contract development, I authored the core smart contracts
            that power the InvigarateDAO platform. Through meticulous attention
            to detail and adherence to best practices, I ensured the security,
            efficiency, and functionality of the contract code. Prior to
            deployment, I rigorously tested the smart contracts using the
            Hardhat framework. By writing comprehensive test suites and
            executing various test scenarios, I validated the correctness and
            reliability of the contract logic, mitigating potential risks and
            vulnerabilities.
          </p>
          <h1>🎯 Impact & Contribution:</h1>
          <p>
            Through my contributions to InvigarateDAO, I played a vital role in
            advancing the platform's capabilities and enhancing its value
            proposition. By leveraging cutting-edge technologies and
            implementing innovative solutions, I helped drive user engagement,
            foster community growth, and solidify InvigarateDAO's position as a
            leader in the blockchain space.
          </p>
          <h1>🌐 Project Link:</h1>
          <p>
            Explore the InvigarateDAO platform and experience firsthand the
            results of my dedicated efforts in frontend development and
            blockchain integration.{" "}
            <a href="https://invigoratedao.com" target="_blank">
              Live link
            </a>
            . Join the decentralized revolution and unleash the power of
            decentralized autonomous organizations with InvigarateDAO today!,
            you can check the{" "}
            <a href="#" target="_blank">
              source code
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Invprj;
