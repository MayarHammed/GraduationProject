import React from "react";
import "../Components/CSS/Footer.css";
import "./Content.css";
import pro from "../images/case.png";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
// import Header from '../Components/Header'

function Home() {
  return (
    <Bounce>
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
              <strong>ChatApp</strong>
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
    </Bounce>
  );
}

export default Home;
