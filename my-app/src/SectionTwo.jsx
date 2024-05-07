import React from "react";
import './SectionTwo.css'
const SectionTwo = () => {
  return (
    <>
      <section className="SectionAbout"> 
        <div className="container">
          <div className="row">
            <div className="AboutSection ">
              <div className="AboutTextDiv col-xxl-7 col-lg-6 col-xl-6">
                <div className="AboutText">
                  <h5>ABOUT ME</h5>
                  <h2>
                    Transforming visions into <br />
                    exceptional portfolios
                  </h2>
                </div>
                <div className="ButtonTextDiv">
                  <p>
                    Nemo design enim ipsam voluptatem quim voluptas sit
                    aspernatur aut odit auting fugit sed thisnquia consequuntur
                    magni dolores eos designer heresm qui ratione
                  </p>
                  <button className="common-btn">Download Cv</button>
                </div>
              </div>
              <div className="AboutImageDiv col-xxl-4 col-lg-6 col-xl-6">
                <img
                  src="https://codeefly.net/wp/zyan/wp-content/uploads/2023/10/about_img.jpg"
                  alt=""
                />
             
              <div className="daily">
                  <div className="DailyIcon">
                    <i class="fa-solid fa-chart-pie"></i>
                  </div>
                  <div className="Dailytext">
                    <h4>Daily Activity</h4>
                    <p>Loream is ispam</p>
                  </div>
                </div>
                <div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default SectionTwo;
