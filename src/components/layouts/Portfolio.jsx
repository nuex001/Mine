import React, { useState } from "react";
import bg from "../../assets/images/100days.jpg";
import bg1 from "../../assets/images/bg3.jpg";
import etherscan from "../../assets/images/etherscan.jpg";
import memes from "../../assets/images/memes.jpg";
import ironage from "../../assets/images/ironage.png";
import basedtestnet from "../../assets/images/basedtestnet.png";
import delink from "../../assets/images/delink.png";
import Yt from "../../assets/images/Yt.png";
import alphablock from "../../assets/images/alphablock.png";
import SEI_TOKEN_GENERATOR from "../../assets/images/SEI_TOKEN_GENERATOR.png";
import invi from "../../assets/images/invi.jpg";
import mintui from "../../assets/images/mintui.png";
import aidoc from "../../assets/images/aidoc2.png";
import { Link } from "react-router-dom";
function Portfolio() {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      topic: "🚀 Delink",
      coverImg: delink,
      text: "Delink is a cutting-edge platform designed to empower Base Name holders by enabling them to create personalized and custom links, blending innovation with simplicity. The platform ensures every Base Name is not just a static identifier but a dynamic and customizable link that reflects the owner's identity. With Delink, users can connect their Base Name with their personal or professional links, generating custom URLs like: nuelyoungtech.base.eth.delink.click",
      subTopic: "Delink",
      link: "/projects",
      external_link: "https://www.delink.click/",
      date: "2024",
    },
    {
      id: 2,
      topic: "Iron Age ⛏️",
      coverImg: ironage,
      text: "Iron Age is an interactive Telegram mini-app that gamifies the experience of mining points and completing tasks, inspired by the industrious spirit of the Iron Age. The app combines fun and productivity, offering users opportunities to engage in tasks, unlock rewards, and upgrade their mining abilities.",
      subTopic: "Unearthing Digital Treasures!",
      link: "memes",
      external_link: "https://t.me/ironageBot?start=669aa275d24e8d24d62f5be9",
      date: "2024",
    },
    {
      id: 2,
      topic: "Basedtestnet 🚰",
      coverImg: basedtestnet,
      text: "BasedTestnet Foundation is a platform dedicated to empowering developers by providing access to test tokens on the Base Testnet. The foundation ensures that builders have the resources they need to develop, test, and launch their blockchain projects effectively. Additionally, users can donate to the Vault, which helps extend the reach of test tokens to more developers while securing exclusive rewards and goodies for contributors.",
      subTopic: "Base PROJECT",
      link: "Daoprj",
      external_link: "https://basedtestnet.netlify.app/",
      date: "2024",
    },
    {
      id: 3,
      topic: "SEI TOKEN GENERATOR ⚙️",
      coverImg: SEI_TOKEN_GENERATOR,
      text: "Leveraging React.js and ethers.js, I spearheaded the development of a comprehensive No-Code Platform where users can effortlessly generate meme tokens. This platform democratizes token creation, allowing users to deploy their custom tokens with minimal effort and little to no gas fees.",
      subTopic: "No-Code Meme Token Generator",
      link: "SEI_TOKEN_GENERATOR",
      external_link: "https://seimemegenerator.netlify.app/",
      date: "2024",
    },
    {
      id: 4,
      topic: "🚀 InvigorateDAO",
      coverImg: invi,
      text: "InvigorateDAO helps projects to connect with the best investors, software developers, strategic partners & influncers to grow your project.",
      subTopic: "InvigorateDAO PROJECT",
      link: "Invprj",
      external_link: "https://invigoratedao.com",
      date: "2024",
    },
    {
      id: 5,
      topic: "Alphablock",
      coverImg: alphablock,
      text: "Get started with Web3 for Free, Whether you're new to the world of technology or looking to expand your knowledge in web 3, our community offers comprehensive resources to help you succeed.Start your learning adventure today!",
      subTopic: "Alphablock(Smart contract developer)",
      link: "Invprj",
      external_link: "https://www.alphablocks.tech/",
      date: "2024",
    },
    {
      id: 5,
      topic: "Aidoc",
      coverImg: aidoc,
      text: "Turn Your Code into Clear, Structured Docs in Seconds! Generate well-formatted, easy-to-read documentation in XML, HTML, or Markdown—perfect for developers and teams.",
      subTopic: "Fullstack developer",
      link: "Invprj",
      external_link: "https://aidoc-doc.netlify.app/",
      date: "2025",
    },
    {
      id: 5,
      topic: "Minut Ui",
      coverImg: mintui,
      text: "Begin your journey by exploring our collection of meme-inspired landing page templates, ready for you to select and purchase. With our user-friendly interface, you can easily customize these templates to suit your unique style and branding. Whether you're a seasoned developer or just starting out, our platform empowers you to create stunning landing pages that captivate your audience.",
      subTopic: "Fullstack developer",
      link: "Invprj",
      external_link: "https://mintui.org/",
      date: "2025",
    },
    {
      id: 6,
      topic: "My Youtube Channel 🎥",
      coverImg: Yt,
      text: "Learning web development doesn’t have to be complicated. Subscribe for easy-to-follow tips and solutions to build up your portfolio. Got a topic you want covered? Just let me know, and I’ll dive into it. Let’s build and learn together!",
      subTopic: "Youtube Channel",
      link: "Invprj",
      external_link: "https://www.youtube.com/@nuelyoungtech",
      date: "2024",
    },
  ]);
  return (
    <section className="portfolio">
      <h1>PORTFOLIO</h1>
      <a href="" className="rows">
        {portfolios.map((item) => (
          <div>
            <Link to={item.external_link} className="box" key={item.id}>
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
