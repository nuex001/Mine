import React, { useState } from "react";
import tariffsurge from "../../assets/images/tariffsurge.png";
import ironage from "../../assets/images/ironage.png";
import xfi from "../../assets/images/xfi.png";
import buymeatoken from "../../assets/images/buymeatoken.png";
import delink from "../../assets/images/delink.png";
import simpl3 from "../../assets/images/simpl3.png";
import cipherquest from "../../assets/images/cipherquest.png";
import Yt from "../../assets/images/Yt.png";
import alphablock from "../../assets/images/alphablock.png";
import SEI_TOKEN_GENERATOR from "../../assets/images/SEI_TOKEN_GENERATOR.png";
import invi from "../../assets/images/invi.png";
import { Link } from "react-router-dom";
function Portfolio() {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      topic: "BuyMeAToken",
      coverImg: buymeatoken,
      text: "BuyMeAToken is a borderless, fast, and censorship-resistant support platform for creators, built on Solana. It allows fans to support creators instantly with tokens, removing the limitations of traditional platforms like Buy Me a Coffee or Ko-fi, especially across regions.",
      subTopic: "Web App",
      link: "Daoprj",
      external_link: "http://buymeatoken.com",
      date: "2025",
    },
    {
      id: 2,
      topic: "🚀 Delink",
      coverImg: delink,
      text: "Delink empowers Base Name holders to turn their on-chain identity into dynamic, customizable links. Instead of remaining static, Base Names become personal hubs where users can attach professional or personal links and share them through clean, memorable URLs.",
      subTopic: "EthAccra · 2× Award-Winning Project",
      link: "/projects",
      external_link: "https://www.delink.click/",
      date: "2025",
    },
    {
      id: 3,
      topic: "Iron Age ⛏️",
      coverImg: ironage,
      text: "Iron Age is a gamified Telegram mini-app that lets users mine points, complete tasks, and upgrade their abilities. Inspired by the industrious Iron Age era, the app blends productivity with fun to keep users engaged and rewarded.",
      subTopic: "Telegram Mini App",
      link: "memes",
      external_link: "https://t.me/ironageBot?start=669aa275d24e8d24d62f5be9",
      date: "2024",
    },
    {
      id: 4,
      topic: "Tariff Surge",
      coverImg: tariffsurge,
      text: "Tariff Surge is a Telegram trading bot built for the XRPL ecosystem. It provides automated trading-volume generation for tokens and charges users based on the volume created. The bot was fully developed and optimized by me.",
      subTopic: "Telegram Trading Bot",
      link: "trading",
      external_link:
        "https://t.me/TariffSurgeBot?start=67bb7203359d4e019a42247f",
      date: "2025",
    },
    {
      id: 5,
      topic: "SEI Token Generator ⚙️",
      coverImg: SEI_TOKEN_GENERATOR,
      text: "A no-code platform that allows anyone to easily create and deploy meme tokens on the Sei network. Built with React.js and ethers.js, the platform abstracts away complexity while keeping gas fees minimal.",
      subTopic: "No-Code Meme Token Generator",
      link: "SEI_TOKEN_GENERATOR",
      external_link: "https://seimemegenerator.netlify.app/",
      date: "2024",
    },
    {
      id: 6,
      topic: "XFI",
      coverImg: xfi,
      text: "XFI is a Sei-powered protocol for tipping creators on X (Twitter), swapping tokens, and sending messages globally. Built for speed and simplicity, it enables seamless social interactions powered by crypto.",
      subTopic: "Frontend Developer",
      link: "Invprj",
      external_link: "https://xfisei.xyz",
      date: "2025",
    },
    {
      id: 7,
      topic: "🚀 InvigorateDAO",
      coverImg: invi,
      text: "InvigorateDAO helps early-stage and growing projects connect with investors, developers, strategic partners, and influencers. The platform is designed to accelerate growth through meaningful Web3 collaborations.",
      subTopic: "Web3 Growth Platform",
      link: "Invprj",
      external_link: "https://invigoratedao.com",
      date: "2024",
    },
    {
      id: 8,
      topic: "Simpl3",
      coverImg: simpl3,
      text: "Simpl3 is a Web3 learning platform built for creators and builders. It focuses on practical education, real-world use cases, and community-driven learning to help users grow confidently in the Web3 space.",
      subTopic: "Full-Stack Developer",
      link: "Invprj",
      external_link: "https://simpl3.org/",
      date: "2025",
    },
    {
      id: 9,
      topic: "CipherQuest",
      coverImg: cipherquest,
      text: "CipherQuest is a decentralized quest platform where creators design puzzle-based challenges with real on-chain rewards. Participants solve quests using hints and secret keys, and the first correct solution claims the reward. The platform is fully transparent, trustless, and verifiable on-chain.",
      subTopic: "Full-Stack Developer",
      link: "Invprj",
      external_link: "https://cipherquest.xyz",
      date: "2025",
    },

    {
      id: 10,
      topic: "My YouTube Channel 🎥",
      coverImg: Yt,
      text: "My YouTube channel focuses on making web development simple and practical. I share easy-to-follow tutorials, real-world tips, and portfolio-building guidance, with content often shaped by community requests.",
      subTopic: "YouTube Channel",
      link: "Invprj",
      external_link: "https://www.youtube.com/@nuelyoungtech",
      date: "2024",
    },
    // {
    //   id: 7,
    //   topic: "Alphablock",
    //   coverImg: alphablock,
    //   text: "Alphablock is a Web3 learning and community platform focused on onboarding newcomers into blockchain development. It offers free resources and practical guidance to help developers confidently get started in Web3.",
    //   subTopic: "Smart Contract Developer",
    //   link: "Invprj",
    //   external_link: "https://www.alphablocks.tech/",
    //   date: "2024",
    // },
  ]);

  return (
    <section className="portfolio">
      <h1>PORTFOLIO</h1>
      <a href="" className="rows">
        {portfolios.map((item) => (
          <div>
            <Link
              to={item.external_link}
              target="_blank"
              className="box"
              key={item.id}
            >
              <div className="txt">
                <h2>{item.topic}</h2>
                <p>{item.text}</p>
                <div className="link">
                  <a href={item.external_link} target="_blank">
                    {item.subTopic}
                  </a>
                  <h3>{item.date}</h3>
                </div>
              </div>
              <img src={item.coverImg} alt="" />
            </Link>
          </div>
        ))}
      </a>
    </section>
  );
}

export default Portfolio;
