import React from "react";
import "../Components/CSS/Footer.css";
import Header from "../Components/Header";
import Flip from "react-reveal/Flip";
// css
import './doctor.css' 

// ---------------------------------------------
// images
import about from "../images/about.png";
import Km from "../images/corona.png";
import pro from "../images/pro1.png";
import pro3 from "../images/pro3.png";
import pro2 from "../images/pro2.png";
import pro4 from "../images/doctor2.png";
import pro5 from "../images/cases3.png";
import pro6 from "../images/cases1.png";
import pro7 from "../images/cases2.png";
import pro8 from "../images/coronavirus-png.png";
import pro9 from "../images/doctor1.png";
import pro10 from "../images/doctor2.png";
import pro11 from "../images/coronavirus-png.png";
import pro12 from "../images/coronavirus-png.png";
import pro13 from "../images/case.png";
import Footer from "../Components/Footer";

function doctor() {
  return (
    <div>
      <Flip>
        <Header />
      </Flip>
      <div className="MH">
        <p className="pp">Diagnosed by a </p>
        <p className="pp"> family doctor!</p>
        <button className="aa">Read More </button>
        <button className="aa">About As</button>
      </div>

      <div className="DM">
        <div className="DM1">
          <div className="left">
            <p className="left-p">ABOUT disease diagnosis</p>
            <span className="left-pp">
              English. Many desktop publishing and web page editors now use
            </span>
            <span className="left-ppp">
              default model text, and a search for
            </span>
            <div className="span1"></div>
            <button className="open">ABOUT MORE</button>
          </div>
        </div>
        <div className="DM-img">
          <img className="DM-img-btn" src={about} alt="DM" />
        </div>
      </div>

      <div className="KM-img">
        <img className="K-img" src={Km} alt="" />
      </div>
      <div className="LM">
        <p>DISEASESVIRUS</p>
        <p className="SP">WHAT IT IS?</p>
        <span>
          when looking at its layout h The point of that its has a more or-less
          distribution of letters, as opposed normal opposed to using Lorem
          Ipsum is Ipsum is distribution of letters, as opposed to using Lorem
        </span>
        <button className="k-p">ABOUT MORE</button>
      </div>

      <div className="slider">
        <h1>HOW TO PROTECT YOURSELF</h1>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as opposed to using
        </p>
        <div className="s-slider">
          <div className="card-slider">
            <img src={pro} alt="pro" />
            <p>staty at home!</p>
            <span>
              {" "}
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal ,that it has a more-or-less normal
              more-or-less
            </span>
            <button> READ MORE</button>
          </div>
          <div className="card-slider">
            <img src={pro2} alt="pro" />
            <p className="pro2">staty at home!</p>
            <span className="pro2">
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal,that it has a more-or-less normal
            </span>
            <button className="READ"> READ MORE</button>
          </div>
          <div className="card-slider">
            <img src={pro3} alt="pro" />
            <p>staty at home!</p>
            <span>
              {" "}
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal ,that it has a more-or-less normal
              more-or-less
            </span>
            <button> READ MORE</button>
          </div>
          <div className="card-slider">
            <img className="pro4" src={pro4} alt="pro" />
            <p>staty at home!</p>
            <span>
              {" "}
              when looking at its layout. The point of using Lorem Ipsum is that
              it has a more-or-less normal , that it has a more-or-less normal
              more-or-less
            </span>
            <button> READ MORE</button>
          </div>
        </div>
        <div className="p-pro"></div>
        <h1>DISEASES CASES</h1>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as opposed to using
        </p>
        <div className="a-card">
          <div className="card-App">
            <div className="card-c">
              <img src={pro5} alt="" />
              <button>READ MORE</button>
              <h1>Cases 01</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look
              </p>
              <img className="img-card" src={pro8} alt="" />
            </div>
          </div>
          <div className="card-App">
            <div className="card-c">
              <img src={pro6} alt="" />
              <button>READ MORE</button>
              <h1>Cases 02</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look
              </p>
              <img className="img-card" src={pro8} alt="" />
            </div>
          </div>
          <div className="card-App">
            <div className="card-c">
              <img src={pro7} alt="" />
              <button>READ MORE</button>
              <h1>Cases 03</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look
              </p>
              <img className="img-card" src={pro8} alt="" />
            </div>
          </div>
        </div>
        <h1 className="h1">DISEASES CASES..</h1>

        <div className="LLM">
          <div className="LM-M">
            <div className="LM-MM">
              <img src={pro9} alt="" />
            </div>
            <h1>DR.GOLAP DEN</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look The point of using Lorem Ipsum is
              that using Lorem Ipsum is that
            </p>
            <img className="t7" src={pro11} alt="" />
          </div>
          <div className="LM-M">
            <div className="LM-MM">
              <img src={pro10} alt="" />
            </div>
            <h1>DR.GOLAP DEN</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look The point of using Lorem Ipsum is
              that here', making it look
            </p>
            <img className="t7" src={pro12} alt="" />
          </div>
        </div>

        <img className="T1" src={pro13} alt="" />
        <img className="T2" src={pro13} alt="" />
        <h1 className="h11">GET EVERY UPDATE....</h1>
        <p>
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distribution of letters, as opposed to using
        </p>
        <br />
        <br />
        <br />
        <br />
        <div className="finish">
          <input type="text" value="ENTER NAME " />
          <button className="content-readmore"> READ MORE</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default doctor;
