import React from "react";
import "./Diaggnqsed.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Avatar, AvatarGroup } from "@mui/material";
import Fade from "react-reveal/Fade";

// ------------------------------------------
// images
import pro from "../images/cases3.png";
import pro1 from "../images/cases2.png";
import pro2 from "../images/cases3.png";
import pro3 from "../images/cases1.png";
import { Bounce } from "react-reveal";
import Zoom from "react-reveal/Zoom";

function Diaggnqsed() {
  return (
    <>
      <div className="Diaggnqsed">
        <Bounce left>
          <Header />
        </Bounce>
        <Zoom>
          <div className="MMH">
            <p className="pp"> family doctor</p>
            <button className="aa">Read More </button>
          </div>
        </Zoom>
        <div className="ALL">
          <div className="avatar">
            <AvatarGroup max={8}>
              <Avatar
                alt="Remy Sharp"
                src={pro1}
                style={{ width: "85px", height: "85px" }}
              />
              <Avatar
                alt="Travis Howard"
                src={pro}
                style={{ width: "85px", height: "85px" }}
              />
              <Avatar
                alt="Cindy Baker"
                src={pro1}
                style={{ width: "85px", height: "85px" }}
              />
              <Avatar
                alt="Agnes Walker"
                src={pro2}
                style={{ width: "85px", height: "85px" }}
              />
              <Avatar
                alt="Trevor Henderson"
                src={pro3}
                style={{ width: "85px", height: "85px" }}
              />
            </AvatarGroup>
          </div>

          <form>
            <div class="Group">
              <label class="label" for="email">
                Information Users
              </label>
              <br />
              <input
                class="Form.Control"
                type="email"
                id="email"
                placeholder="Enter Name"
              />
            </div>
            <div class="Group">
              <input
                class="Form.Control"
                type="email"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div class="Group">
              <input
                class="Form.Control"
                type="email"
                id="email"
                placeholder="Enter password"
              />
            </div>
            <div class="Group">
              <input
                class="Form.Control"
                type="email"
                id="email"
                placeholder="confirm Enter password"
              />
            </div>
            <button className="Diaggnqsed-p" type="text">
              Send
            </button>
            <button className="Diaggnqsed-p" type="text">
              Search
            </button>
          </form>
          <Fade left big>
            <div className="Cards">
              <div class="card_par">
                <img src={pro} />
                <div class="card-body">
                  <h5 class="card-title">Dr.khaled</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>

                  
                </div>
              </div>
              <div class="card_par">
                <img src={pro1} />
                <div class="card-body">
                  <h5 class="card-title">Dr.Omar</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>

                </div>
              </div>
              <div class="card_par">
                <img src={pro2} />
                <div class="card-body">
                  <h5 class="card-title">Dr.Jawad</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>

                </div>
              </div>
              <div class="card_par">
                <img src={pro3} />
                <div class="card-body">
                  <h5 class="card-title">Dr.Mayar</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>

                </div>
              </div>
            </div>
          </Fade>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade right big>
            <div className="Cards">
              <div class="card_par">
                <img src={pro} />
                <div class="card-body">
                  <h5 class="card-title">Dr.khaled</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>
                </div>
              </div>
              <div class="card_par">
                <img src={pro1} />
                <div class="card-body">
                  <h5 class="card-title">Dr.Omar</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>
                </div>
              </div>
              <div class="card_par">
                <img src={pro2} />
                <div class="card-body">
                  <h5 class="card-title">Dr.Jawad</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>
                </div>
              </div>
              <div class="card_par">
                <img src={pro3} />
                <div class="card-body">
                  <h5 class="card-title">Dr.Mayar</h5>
                  <p class="card-text">
                    lorem about any thing this is in how any think about any
                    thing
                  </p>
                  <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                    <i class="fa fa-star "></i>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Diaggnqsed;
