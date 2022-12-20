import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1 id="intro">
          Hello! I'm <span id="name">Rob Garcia,</span>
        </h1>
        <h1 id="role">a Full Stack Developer.</h1>
        <p>
          Specializing in React, Express, PostgreSQL, JavaScript, HTML5, and
          CSS3
        </p>
        <p>
          I am an Engineer, Educator, Musician, and Life-long learner. I am
          passionate about finding creative solutions to meet user needs. Have
          an interesting idea or neet help on a project? Let's chat and make
          something aweosme!
        </p>
        <div className="icons">
          <Link to="https://www.linkedin.com/in/robggarcia/">
            <img src="./images/icons/linkedin.svg" className="icon" />
          </Link>
          <Link to="https://github.com/robggarcia">
            <img src="./images/icons/github.svg" className="icon" />
          </Link>
          <Link to="https://www.linkedin.com/in/robggarcia/">
            <img src="./images/icons/file-lines-solid.svg" className="icon" />
          </Link>
          <Link to="mailto:robggarcia.eng@gmail.com">
            <img src="./images/icons/envelope-solid.svg" className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
