import React from "react";
import Log from "../images/logo.png";
import img1 from "../images/icons8-search-50.png";
// import Fade from "react-reveal/Fade";
// css
import "./CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="continer">
          <ul>
            <Link to={"/"}>
              <li>HOME</li>
            </Link>
            <Link to={"/R"}>
              <li>CONSULTATION </li>
            </Link>
            <Link to={"/D"}>
              <li>DIAGGNOSED</li>
            </Link>
            <Link to={"/K"}>
              <li>CHAT</li>
            </Link>
            <Link to={"/C"}>
              <li>VIRUS</li>
            </Link>
            <Link to={"/C"}>
              <li>VIRUS</li>
            </Link>
            <Link to={"/C"}>
              <li>VIRUS</li>
            </Link>
          </ul>

          <div className="icon2">
            <img className="img3" src={Log} alt="" />
          </div>
          <div className="icon">
            <img className="img1" src={img1} alt="" />{" "}
          </div>
          <div className="icon1">
            <p>DM </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
