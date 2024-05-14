import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/projects.css";
import Header from "../layouts/projects/Header";
import bg from "../../assets/images/bg.jpg";
import bg1 from "../../assets/images/bg3.jpg";
import bg3 from "../../assets/images/bg1.jpg";
import bg4 from "../../assets/images/bg4.jpg";
import { Link } from "react-router-dom";
function Projects() {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      topic: "🚀 Project Goal",
      coverImg: bg,
      text: "My goal is to not only sharpen my existing skills but also to explore new technologies and concepts within the Web3 ecosystem. Through this project, I aim to gain hands-on experience in building decentralized applications, interacting with blockchain networks, and mastering the tools and frameworks essential for Web3 development.",
      subTopic: "100 DAILY PROJECTS",
      external_link: "#",
      date: "2024",
    },
    {
      id: 2,
      topic: "👨🏾‍⚖️DAO",
      coverImg: bg3,
      text: "Leveraging my expertise in Solidity programming, I designed and implemented a robust DAO smart contract on the Ethereum blockchain. This contract autonomously governs decision-making processes within the organization, fostering transparency and decentralization.",
      subTopic: "DAO PROJECT",
      external_link: "https://invigoratedao.netlify.app/",
      date: "2023",
    },
    {
      id: 3,
      topic: "👀 Etherscan Clone",
      coverImg: bg1,
      text: "Leveraging React.js and ethers.js, I spearheaded the development of a comprehensive platform akin to Etherscan. This platform provides users with invaluable insights into the Ethereum blockchain, allowing them to explore transactions, smart contracts, addresses, and more.",
      subTopic: "Etherscan Clone PROJECT",
      external_link: "https://etherscantest.netlify.app/",
      date: "2023",
    },
    {
      id: 4,
      topic: "🚀 InvigorateDAO",
      coverImg: bg4,
      text: "InvigorateDAO helps projects to connect with the best investors, software developers, strategic partners & influncers to grow your project.",
      subTopic: "InvigorateDAO PROJECT",
      external_link: "https://invigoratedao.com",
      date: "2023",
    },
    {
        id: 5,
        topic: "👀 Etherscan Clone",
        coverImg: bg1,
        text: "Leveraging React.js and ethers.js, I spearheaded the development of a comprehensive platform akin to Etherscan. This platform provides users with invaluable insights into the Ethereum blockchain, allowing them to explore transactions, smart contracts, addresses, and more.",
        subTopic: "Etherscan Clone PROJECT",
        external_link: "https://etherscantest.netlify.app/",
        date: "2023",
      }
  ]);
  const boxRefs = useRef([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // When 50% of the box is in view
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = boxRefs.current.indexOf(entry.target);
          if (index !== -1) {
            boxRefs.current[index].classList.add('in-view');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    
    boxRefs.current.forEach(boxRef => observer.observe(boxRef));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects">
      <Header />
      <main>
        <div className="rows">
          {portfolios.map((item, idx) => {
            if (item.id % 2 > 0) {
              return (
                <div>
                  <Link to={`/projects/${item.id}`} className="box odd" key={item.id} ref={el => boxRefs.current[idx] = el}>
                    <img src={item.coverImg} alt="" />
                    <div className="txt">
                      <h2>{item.topic}:</h2>
                      <p>{item.text}</p>
                      <div className="link">
                        <a href="#" target="_blank">
                          {item.subTopic}
                        </a>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            } else {
              return (
                <div>
                  <a href="/projects" className="box" key={item.id} ref={el => boxRefs.current[idx] = el}>
                    <div className="txt">
                      <h2>{item.topic}:</h2>
                      <p>{item.text}</p>
                      <div className="link">
                        <a href="#" target="_blank">
                          {item.subTopic}
                        </a>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    <img src={item.coverImg} alt="" />
                  </a>
                </div>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
}

export default Projects;
