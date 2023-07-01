import React from "react";
import "./mayar.css";
import Fade from "react-reveal/Fade";
// import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

import pro from "./images_Icon/icons8-email-48.png";
import pro1 from "./images_Icon/icons8-phone-94.png";
import pro2 from "./images_Icon/icons8-address-94.png";

function mayar_9() {
  return (
    <>
      <Fade left big>
        <header>
          <nav>
            <ul>
              <Link to={"/R"}>
                <li>
                  <a href="#">الرئيسية</a>
                </li>
              </Link>

              <li>
                <a href="#">من نحن</a>
              </li>
              <li>
                <a href="#">الخدمات</a>
              </li>
              <li>
                <a href="#">اتصل بنا</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="mayarhammed">
          <div className="Information-D">
            <h1>Information Doctor!</h1>
            <p>البحث عن الطبيب المختص في حال الاستشارة من الطبيب</p>
          </div>
          <form className="form_serarch" action="/search" method="get">
            <input type="text" placeholder="Search..." name="query" />
            <button type="submit">البحث</button>
          </form>
          <div className="I_input">
            <button className="I_input1" type="text">
              All
            </button>
            <button className="I_input1" type="text">
              Doctor
            </button>
          </div>
        </div>
      </Fade>
      <Fade bottom big>
        <div className="app-cover">
          <h1>Discover the online appointment</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            repudiandae, commodi praesentium aspernatur modi illum.
          </span>
          <div className="cover">
            <div className="cover_1">
              <img src={pro} alt="Email" />
              <p>
                Email <span>Dr.Kahled@gmail.com</span>{" "}
              </p>
            </div>
            <div className="cover_2">
              <img src={pro1} alt="Phone" />

              <p>
                Phone <span>+9630933842321</span>{" "}
              </p>
            </div>
            <div className="cover_3">
              <img src={pro2} alt="Address" />

              <p>
                Address <span>Al-Qasaa district</span>{" "}
              </p>
            </div>
            <a href="#">
              <button className="cover_button" type="text">
                Find Doctor
              </button>
            </a>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default mayar_9;
