import React from "react";
import "../src/SectionOne.css";
const SectionOne = () => {
  return (
    <>
      <section>
        <img
          className="backgorundImage"
          src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/banner-scaled.jpg)"
          alt=""
        />
        <div className="SectionMaga">
          <div className="maqaText">
            <h1>
              HI, I'M MAGA! CREATIVE
              <div class="main">
                <div class="roller">
                  <span id="rolltext">
                    CODER
                    <br />
                    DESIGNER
                    <br />
                    DOMINO
                    <br />
                  </span>
                </div>
              </div>
            </h1>
            <p>
              I'm a passionate UI/UX designer with a mission to create
              delightful and intuitive digital experiences. With a strong
              foundation in design principles and a keen eye for detail, I
              specialize in translating complex ideas into user-friendly
              interfaces that captivate and engage.
            </p>
            <ul>
              <li>
                <button className="common_btn">
                  DOWNLOAD CV{" "}
                  <i className=".fa-solid, .fa-arrow-down-to-line"></i>
                </button>
              </li>
              <li>
                <i class="fa-solid fa-circle-play"></i>Watch The Video
              </li>
            </ul>
          </div>
          <div className="imageMaga">
            <img
              className="vert-move"
              src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/banner_img_1.png"
              alt=""
            />
            <img
              className="vert-move"
              src="https://codeefly.net/wp/zyan/wp-content/themes/zyan/assets/img/shapes/banner_shape.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="SectionTwo">
        <div className="TextDivService">
          <h5>MY SERIVCE</h5>
          <h2>
            Crafting stories through <br />
            design and innovation
          </h2>
        </div>
        <div className="CardsService">
          <div className="card col-lg-4 col-md-5">
            <div className="card-image">
            <i class="fa-regular fa-hourglass"></i>            
            </div>
            <div className="card-title">
              <h3>WEBSITE DESIGN</h3>
            </div>
            <div className="card-body">
              <p>
                Nemo design enim ipsam voluptatem quim voluptas sit
                aspernaturaut odit auting fugit sed thisnquia consequuntur magni
                doloreseos designer heresm qui
              </p>
            </div>
          </div>
          <div className="card col-lg-4 col-md-6">
            <div className="card-image">
            <i class="fa-regular fa-hourglass"></i>            
            </div>
            <div className="card-title">
              <h3>LOGO DESIGN</h3>
            </div>
            <div className="card-body">
              <p>
                Nemo design enim ipsam voluptatem quim voluptas sit
                aspernaturaut odit auting fugit sed thisnquia consequuntur magni
                doloreseos designer heresm qui
              </p>
            </div>
          </div>
          <div className="card col-lg-4 col-md-6">
            <div className="card-image">
            <i class="fa-regular fa-hourglass"></i>            
            </div>
            <div className="card-title">
              <h3>APPS DEVELOPMENT</h3>
            </div>
            <div className="card-body">
              <p>
                Nemo design enim ipsam voluptatem quim voluptas sit
                aspernaturaut odit auting fugit sed thisnquia consequuntur magni
                doloreseos designer heresm qui
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionOne;
