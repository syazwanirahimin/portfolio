import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I'm Syazwani Rahimin</p>
          <br />
        </h1>
        <p>I'm a software engineering students who specialises in building and designing web application. Currently, I'm in 3rd year doing my final year project.</p>
       
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/mo-logo.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;