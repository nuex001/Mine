import React from "react";
import Header from "../layouts/home/Header";
import Portfolio from "../layouts/Portfolio";
import Hireme from "../layouts/home/Hireme";

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <Portfolio />
        <Hireme />
      </main>
    </div>
  );
}

export default Home;
