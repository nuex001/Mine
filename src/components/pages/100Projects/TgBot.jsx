import React from "react";
import "../../../assets/css/project.css";
import Header from "../../layouts/project/Header";
import bg from "../../../assets/images/bots.png";
import tg2 from "../../../assets/images/bots/tg2.png";
import tg from "../../../assets/images/bots/tg3.png";
import tg3 from "../../../assets/images/bots/tg.png";
import tg1 from "../../../assets/images/bots/tg1.png";
import { useNavigate } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

function TgBot() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  return (
    <div className="project">
      <header>
        <div className="txt">
          <div className="headtext">
            <h1>MEMESLAND TELEGRAM BOT</h1>
            <h2>memesland</h2>
          </div>
          <FaBackspace className="back" onClick={getBack} />
        </div>
        <p>
          This project showcases a Telegram bot developed using Node.js,
          leveraging the node-telegram-bot-api and axios libraries. The bot is
          designed to interact with users, respond to commands, and fetch data
          from an external API.
        </p>
        <h2>🛠️ Technology</h2>
        <ul>
          <li>Nodejs</li>
        </ul>
      </header>
      <main>
        <img src={bg} alt="" />
        <div className="text">
          <h1>🛠️ Key Featuress:</h1>
          <h4>
            Bot Initialization: Sets up the bot using a token from environment
            variables.
          </h4>
          <h4>
            Start Command: Welcomes users with instructions on how to use the
            bot.
          </h4>
          <h4>
            Get Address Command: Fetches and displays the top holders of a
            specific ERC-20 token.
          </h4>
          <ul>
            <h2>Installation and Setup:</h2>
            <li>Install Dependencies:</li>
            <li>npm install axios dotenv node-telegram-bot-api </li>
            <h2>Environment Variables:</h2>
            <li>
              Create a .env file in the root directory and add your bot token:{" "}
            </li>
            <li>
              To create your own Telegram bot and obtain the token required for
              this project, follow the detailed guide in my writeup <a href="https://medium.com/@edeemmanuelchizurumoke/telegram-bots-made-simple-your-step-by-step-guide-cc0e22639b24">here</a>.
            </li>
            <li>Token=your-telegram-bot-token</li>
            <h2>Initialization:</h2>
            <li>
              Imports and Configuration: The bot is initialized using the token
              from environment variables.
            </li>
            <img src={tg} className="sub" alt="" />
            <h2>Start Command:</h2>
            <li>
              onText Method: Listens for the /start command and sends a welcome
              message.
            </li>
            <img src={tg2} className="sub" alt="" />
            <h2>Get Address Command:</h2>
            <li>
              onText Method: Listens for the /start command and sends a welcome
              message.
            </li>
            <li>
              Command Handling: Listens for the /getaddress command followed by
              chain and address parameters.{" "}
            </li>
            <li>API Call: Uses axios to fetch data from an external API.</li>
            <li>
              Message Batching: Ensures messages do not exceed Telegram's limit
              of 4096 characters by batching the responses.
            </li>
            <img src={tg3} className="sub" alt="" />
            <h2>Running the Bot</h2>
            <li>
              After setting up the environment and starting the bot, you can
              interact with it on Telegram. Use /start to see the welcome
              message and /getaddress Base 0x... to fetch the top ERC-20 token
              holders.
            </li>
            <img src={tg1} className="sub" alt="" />
          </ul>
          <h1>🌐 Conclusion:</h1>
          <p>
            This project demonstrates a basic but functional Telegram bot that
            can be expanded with additional features. The use of environment
            variables, proper error handling, and message batching are key
            highlights of this implementation.
          </p>
          <h1>🌐 Project Link:</h1>
          <p>
            Curious to learn more? Explore the live project and delve into its
            intricacies by visiting{" "}
            <a href="https://github.com/nuex001/telegramBot" target="_blank">
              Live link
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default TgBot;
