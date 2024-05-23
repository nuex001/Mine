import React from "react";
import "../../../assets/css/project.css";
import Header from "../../layouts/project/Header";
import bg from "../../../assets/images/quiz.png";
import { useNavigate } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";

function Quizapp() {
  const navigate = useNavigate();

  const getBack = () => {
    navigate(-1);
  };
  return (
    <div className="project">
      <header>
        <div className="txt">
          <div className="headtext">
            <h1>Crypto Quiz App</h1>
            <h2>Daily Crypto Quiz</h2>
          </div>
          <FaBackspace className="back" onClick={getBack} />
        </div>
        <p>
          This project involves creating a daily quiz app that provides new
          cryptocurrency-related questions every day. The goal is to engage
          users with interesting and educational content while rewarding correct
          answers with points.
        </p>
        <h2>🛠️ Technology</h2>
        <ul>
          <li>ReactJs</li>
          <li>Node.js (for backend and cron jobs)</li>
          <li>OpenAI (for generating quiz questions)</li>
        </ul>
      </header>
      <main>
        <img src={bg} alt="Background" />
        <div className="text">
          <h1>🛠️ Project Highlights:</h1>
          <h1>🔧 Frontend development:</h1>
          <h4>Let's go through the whole process:</h4>
          <ul>
            <h2>Backend Setup</h2>
            <li>
              Server Configuration: Configured the Node.js server to handle API
              requests and run cron jobs.
            </li>
            <li>
              Cron Jobs: Set up cron jobs to request new quiz questions from
              OpenAI every day at midnight.
            </li>
            <h2>Frontend Integration</h2>
            <li>
              Objective: To display daily quiz questions to users and update
              their scores based on correct answers.
            </li>
            <li>
              Technology Stack: We're using React.js for the frontend, ensuring
              a responsive and interactive user experience.
            </li>
            <li>
              Question Display: Integrated the frontend with the backend to
              fetch and display new quiz questions daily.
            </li>
            <li>
              Score Management: Implemented a system to increase user scores by
              100 points for each correct answer.
            </li>
            <h2>How the Quiz Works:</h2>
            <li>
              New Questions: Get fresh questions every day to keep things
              exciting.
            </li>
            <li>
              Answering: Just pick your answer, and if it's right, you'll earn
              points!
            </li>
            <li>Score Tracking: See your points grow as you keep playing!</li>
            <h1>🎁 Wrapping Up:</h1>
            <p>
              The Crypto Quiz App is all about fun learning! Keep playing every
              day to boost your crypto knowledge and score more points!
            </p>
          </ul>
          <h1>🌐 Conclusion:</h1>
          <p>
            The Crypto Quiz App is designed to educate users about
            cryptocurrencies while rewarding their knowledge. This daily quiz
            setup encourages consistent engagement and learning.
          </p>
          <h1>🌐 Project Link:</h1>
          <p>
            Curious to learn more? Explore the live project and delve into its
            intricacies by visiting{" "}
            <a href="https://cryptoquizapp.netlify.app" target="_blank">
              Live link
            </a>{" "}
            or check out the source code on{" "}
            <a
              href="https://github.com/nuex001/QuizAppFE"
              target="_blank"
            >
              Frontend Source code
            </a>
            <a
              href="https://github.com/nuex001/QuizAppBE"
              target="_blank"
            >
              Backend Source code
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Quizapp;
