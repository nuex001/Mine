import { React, useState } from "react";
import Header from "../layouts/home/Header";
import Portfolio from "../layouts/Portfolio";
import Hireme from "../layouts/home/Hireme";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home">
      <Header setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <main>
        <Portfolio />
        <Hireme />
      </main>
    </div>
  );
}

export default Home;
