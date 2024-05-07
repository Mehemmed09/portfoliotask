import React from "react";
import './SectionDesign.css'
const SectionDesign = () => {
  return (
    <>
      <section className="Design">
        <div className="container">
          <div className="row">
            <div className="DesignTextDiv col-xl-6 col-lg-6">
              <h2>
                <span>Design</span> and Innovation
              </h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                auting fugit sed thisnquia consequuntur magni dolores eos
                designer heresm qui ratione voluptatem sequi nesciuNeque porro
                quisquam est, oursqui dolorem ipsum quia dolor sit amet
                consectetur, adipisci velit, sed quia non numquam
              </p>
              <div className="row2">
                <div className="icons col-xl-6 col-md-6">
                  <i class="fa-regular fa-hourglass"></i>
                  <div className="number"></div>
                  <p>Complete project</p>
                </div>{" "}
                <div className="icons col-xl-6 col-md-6">
                  <i class="fa-regular fa-hourglass"></i>
                  <div className="number"></div>
                  <p>Complete project</p>
                </div>
              </div>
            </div>
            <div className="DesignFormDiv col-xl-6 col-lg-6">
              <div className="offcanvas_contact_form">
                <h5>GET TOUCH ME?</h5>
                <p>
                  For your car we will do everything advice design in us repairs
                  and maintenance We are the some preferred.
                </p>
                <form>
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email" />
                  <textarea
                    name="Message"
                    id="textarea"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                  <button type="button" className="common-btn">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionDesign;
