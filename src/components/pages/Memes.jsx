import React from "react";
import "../../assets/css/project.css";
import Header from "../layouts/project/Header";
import memes from "../../assets/images/memes.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

function Memes() {
  const {id} = useParams();
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  return (
    <div className="project">
    <header>
      <div className="txt">
        <div className="headtext">
          <h1>MEMESLAND</h1>
          <h2>Latest Memes Platform</h2>
        </div>
        <FaBackspace className="back" onClick={getBack} />
      </div>
      <p>
        Using React and Node.js, I developed MEMESLAND, a platform that offers the latest trending memes. Users can view the top 100 holders, download this data as a CSV file, search for specific memes, and interact with EVM-compatible tokens by selecting a blockchain and pasting the address.
      </p>
      <h2>🛠️ Technology</h2>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
      </ul>
    </header>
    <main>
      <img src={memes} alt="MEMESLAND Screenshot" />
      <div className="text">
        <h1>🛠️ Project Highlights:</h1>
        <h1>🔧 Latest Memes Platform:</h1>
        <p>
          Developed with React and Node.js, MEMESLAND provides users with the latest memes and insights into meme popularity, including the top 100 holders.
        </p>
        <h1>Seamless Search Functionality:</h1>
        <p>
          Users can search for specific memes easily, enhancing their browsing experience.
        </p>
        <h1>Interactive User Interface:</h1>
        <p>
          Designed a responsive and user-friendly interface to ensure smooth navigation and interaction.
        </p>
        <h1>Token Interaction:</h1>
        <p>
          Integrated the ability to interact with EVM-compatible tokens by selecting a blockchain and entering an address.
        </p>
        <h1>Downloadable Data:</h1>
        <p>
          Enabled users to download the top 100 holders as a CSV file for further analysis and record-keeping.
        </p>
        <h1>🚀 Project Impact:</h1>
        <p>
          MEMESLAND enhances meme culture by providing a dynamic platform for meme enthusiasts to explore and engage with trending content.
        </p>
        <h1>🌐 Project Link:</h1>
        <p>
          Explore the live project <a href="https://topmememe.netlify.app" target="_blank">here</a> or check out the github repo  <a href="https://github.com/nuex001/topmemeFE" target="_blank">here</a> .
        </p>
      </div>
    </main>
  </div>
  
  );
}

export default Memes;
