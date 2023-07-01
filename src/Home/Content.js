import React from "react";
import "../Components/CSS/Footer.css";
import "./Content.css";
import pro from "../images/case.png";
import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
// import Header from '../Components/Header'

function Home() {
  return (
    <div className="home">
      <div className="IM_DO">
        <img className="IM_DO0" src={pro} alt="doctor" />
        <img className="IM_DO1" src={pro} alt="doctor" />
        <img className="IM_DO2" src={pro} alt="doctor" />
        <img className="IM_DO3" src={pro} alt="doctor" />
        <img className="IM_DO4" src={pro} alt="doctor" />
        <img className="IM_DO5" src={pro} alt="doctor" />
        <img className="IM_DO6" src={pro} alt="doctor" />
        <img className="IM_DO7" src={pro} alt="doctor" />
        <img className="IM_DO8" src={pro} alt="doctor" />
      </div>
      <div className="buttons_perent">
        <Link to={"/Chat"}>
          <button class="btn" type="button">
            <strong>Chat</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>
        <Link to={"/Department"}>
          <button class="btn" type="button">
            <strong>Department</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </button>
        </Link>
      </div>
      <div className="btnxxxxz">
        <Link to={"/k"}>
          <button className="btnxxz">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
