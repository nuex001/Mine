import React, { useState } from "react";
import bg from "../../assets/images/100days.jpg";
import bg1 from "../../assets/images/bg3.jpg";
import bg3 from "../../assets/images/bg1.jpg";
import bg4 from "../../assets/images/bg4.jpg";
import { Link } from "react-router-dom";
function Portfolio() {
    const [portfolios,setPortfolios] = useState([
        {
            id:1,
            topic:"🚀 Project Goal",
            coverImg:bg,
            text:'My goal is to not only sharpen my existing skills but also to explore new technologies and concepts within the Web3 ecosystem. Through this project, I aim to gain hands-on experience in building decentralized applications, interacting with blockchain networks, and mastering the tools and frameworks essential for Web3 development.',
            subTopic:"100 DAILY PROJECTS",
            link:"/projects",
            external_link:"#",
            date:"2024"
        },
        {
            id:2,
            topic:"👨🏾‍⚖️DAO",
            coverImg:bg3,
            text:"Leveraging my expertise in Solidity programming, I designed and implemented a robust DAO smart contract on the Ethereum blockchain. This contract autonomously governs decision-making processes within the organization, fostering transparency and decentralization.",
            subTopic:"DAO PROJECT",
            link:"Daoprj",
            external_link:"https://invigoratedao.netlify.app/",
            date:"2023"
        },
        {
            id:3,
            topic:"🚀 InvigorateDAO",
            coverImg:bg4,
            text:"InvigorateDAO helps projects to connect with the best investors, software developers, strategic partners & influncers to grow your project.",
            subTopic:"InvigorateDAO PROJECT",
            link:"Invprj",
            external_link:"https://invigoratedao.com",
            date:"2023"
        },
        {
            id:4,
            topic:"👀 Etherscan Clone",
            coverImg:bg1,
            text:"Leveraging React.js and ethers.js, I spearheaded the development of a comprehensive platform akin to Etherscan. This platform provides users with invaluable insights into the Ethereum blockchain, allowing them to explore transactions, smart contracts, addresses, and more.",
            subTopic:"Etherscan Clone PROJECT",
            link:"Etherscanprj",
            external_link:"https://etherscantest.netlify.app/",
            date:"2023"
        }
    ])
  return (
    <section className="portfolio">
      <h1>PORTFOLIO</h1>
      <a href="" className="rows">
        {
            portfolios.map((item)=>(
               <div>
                 <Link to={item.link} className="box" key={item.id}>
                <div className="txt">
                  <h2>{item.topic}:</h2>
                  <p>
                  {item.text}
                  </p>
                  <div className="link">
                  <a href="#" target="_blank">{item.subTopic}</a>
                  <h3>{item.date}</h3>
                </div>
                </div>
                <img src={item.coverImg} alt="" />
              </Link>
               </div>
            ))
        }
      </a>
    </section>
  );
}

export default Portfolio;
