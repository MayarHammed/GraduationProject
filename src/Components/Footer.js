import React from "react";
import "./CSS/Footer.css";
// -------------------------------------
// images
// import pro14 from "../images/map.png";

function Footer() {
  return (
    <>
      <div class="d-flex flex-column h-100">
        <section class="QMQ">
          <div class="container py-4">
            <div class="row">
              <div class="Q-text">
                <h1 className="Q-h1">Diagnosed by a family doctor!</h1>
                <p className="q-p">
                  Using Bootstrap 5 flexbox utilities, create a footer that
                  always sticks to the bottom of your viewport. Snippet by{" "}
                  <a href="https://bootstrapious.com/" target="_blank">
                    The Bootstrapious
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer class="w-100 py-4 flex-shrink-0">
          <div class="container py-4">
            <div class="row gy-2 gx-5">
              <div class="Q-DM">
                <h5 class="h1 text-white">DM.</h5>
                <p className="p-q">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <p className="p-q">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a class="text-primary" href="#">
                    Bootstrapious.com
                  </a>
                </p>
              </div>

              <div className="Q">
                <div className="Quick ">
                  <h5 className="Quick-T">Quick links</h5>
                  <ul className="list-unstyled text-muted">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">started</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Name</a>
                    </li>
                    <li>
                      <a href="#">User</a>
                    </li>
                    <li>
                      <a href="#">started</a>
                    </li>
                    <li>
                      <a href="#">Phone</a>
                    </li>
                    <li>
                      <a href="#">Google</a>
                    </li>
                  </ul>
                </div>

                <div className="Quick   T">
                  <h5 className="Quick-T">Quick links</h5>
                  <ul className="list-unstyled text-muted">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">started</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>

                <div className="Quick">
                  <h5 className="Quick-T">Content</h5>
                  <ul className="list-unstyled text-muted">
                    <li>
                      <a href="#">Phone</a>
                    </li>
                    <li>
                      <a href="#">Email</a>
                    </li>
                    <li>
                      <a href="#">Get started</a>
                    </li>
                    <li>
                      <a href="#">Name</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="p2">
          <p className="Bootstrapious">
            © 2023. Bootstrapious is a project by Ondrej Svestka. Hosted on
            DigitalOcean.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
