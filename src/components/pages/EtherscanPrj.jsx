import React from "react";
import "../../assets/css/project.css";
import Header from "../layouts/project/Header";
import bg3 from "../../assets/images/bg3.jpg";
import { useParams } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function EtherscanPrj() {
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
            <h1>ETHERSCAN CLONE</h1>
            <h2>ETHERSCAN</h2>
          </div>
          <FaBackspace className="back" onClick={getBack} />
        </div>
        <p>
          Leveraging React.js and ethers.js, I spearheaded the development of a
          comprehensive platform akin to Etherscan. This platform provides users
          with invaluable insights into the Ethereum blockchain, allowing them
          to explore transactions, smart contracts, addresses, and more.
        </p>
        <h2>🛠️ Technology</h2>
        <ul>
          <li>Ether.js</li>
          <li>ReactJs</li>
        </ul>
      </header>
      <main>
        <img src={bg3} alt="" />
        <div className="text">
          <h1>🛠️ Project Highlights:</h1>
          <h1>🔧 Etherscan-Like Platform Development:</h1>
          <p>
            Leveraging React.js and ethers.js, I spearheaded the development of
            a comprehensive platform akin to Etherscan. This platform provides
            users with invaluable insights into the Ethereum blockchain,
            allowing them to explore transactions, smart contracts, addresses,
            and more.
          </p>
          <h1>Seamless Transaction Search:</h1>
          <p>
            I implemented a robust search functionality that enables users to
            quickly locate specific transactions on the Ethereum blockchain.
            Leveraging the power of ethers.js, users can effortlessly search for
            transactions by hash, address, block number, and other relevant
            parameters.
          </p>
          <h1>Interactive User Interface:</h1>
          <p>
            With a keen focus on user experience, I designed and developed an
            intuitive and responsive frontend interface. Through thoughtful
            UI/UX design principles and React.js components, I ensured that
            users can navigate the platform effortlessly and efficiently.
          </p>
          <h1>🎯Real-Time Data Updates:</h1>
          <p>
            Utilizing ethers.js and other real-time data sources, I integrated
            live updates to provide users with the latest information on
            transactions, blocks, and network activity. This real-time
            functionality enhances the platform's utility and keeps users
            informed of the latest blockchain developments.
          </p>
          <h1>🚀 Project Impact:</h1>
          <p>
            My work on this project has contributed to advancing the
            capabilities of decentralized governance systems. By creating a
            functional and user-centric DAO platform, I aim to empower
            communities to collaboratively make decisions in a transparent and
            trustless manner, driving the adoption of decentralized
            technologies.
          </p>
          <h1>🌐 Project Link:</h1>
          <p>
            Curious to learn more? Explore the live project and delve into its
            intricacies by visiting{" "}
            <a href="https://etherscantest.netlify.app" target="_blank">
              Live link
            </a>
            . Witness firsthand how decentralized governance is reshaping the
            future of organizational struct or check the{" "}
            <a href="https://github.com/nuex001/etherscan" target="_blank">
              source code
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default EtherscanPrj;
