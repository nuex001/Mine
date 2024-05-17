import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/projects.css";
import Header from "../layouts/projects/Header";
import bg from "../../assets/images/bg.jpg";
import bg1 from "../../assets/images/bg3.jpg";
import bg3 from "../../assets/images/bg1.jpg";
import bg4 from "../../assets/images/bg4.jpg";
import ratonsol from "../../assets/images/ratonsol.jpeg";
import faucet from "../../assets/images/faucet.png";
import { Link } from "react-router-dom";
function Projects() {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      topic: "🚀 RATONSOL",
      coverImg: ratonsol,
      text: "Ratonsol is a decentralized cryptocurrency built on the SEPOLIA network, designed to bring humor and community engagement to the world of blockchain finance. This project offers a unique approach to meme token creation by ensuring deployment across various EEC (Ethereum Ecosystem Compatible) chains, including Base, Arbitrum, Ethereum, Binance Smart Chain, and Polygon.",
      subTopic: "001 PROJECT",
      external_link: "https://ratonsol.netlify.app/",
      link:"ratonsol",
      date: "2024",
    },
    {
      id: 2,
      topic: "🚀 RATONSOL Faucet",
      coverImg: faucet,
      text: "This project involves the creation and distribution of the Ratonsol token. The goal is to build a robust infrastructure that supports community engagement through a seamless token distribution system.",
      subTopic: "002 PROJECT",
      external_link: "https://ratonsolfauctnet.netlify.app/",
      link:"faucet",
      date: "2024",
    },
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
                  <Link to={`/${item.link}`} className="box odd" key={item.id} ref={el => boxRefs.current[idx] = el}>
                    <img src={item.coverImg} alt="" />
                    <div className="txt">
                      <h2>{item.topic}:</h2>
                      <p>{item.text}</p>
                      <div className="link">
                        <a href={`/${item.external_link}`} target="_blank">
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
                 <Link to={`/${item.link}`} className="box" key={item.id} ref={el => boxRefs.current[idx] = el}>
                    <div className="txt">
                      <h2>{item.topic}:</h2>
                      <p>{item.text}</p>
                      <div className="link">
                        <a href={`/${item.external_link}`} target="_blank">
                          {item.subTopic}
                        </a>
                        <h3>{item.date}</h3>
                      </div>
                    </div>
                    <img src={item.coverImg} alt="" />
                  </Link>
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
