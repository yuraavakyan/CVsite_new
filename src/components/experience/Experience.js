import React, { useEffect } from "react";
import "./styles.scss";
import Title from "../section-title";
import feihua from "../../images/icons/feihua.png";
import krka from "../../images/icons/krka.png";
import freelancer from "../../images/icons/freelancer.png";
function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-container">
        <Title title="EXPERIENCE" />
        <div className="experience-content">
          <div className="experienceItem" data-aos="fade-left" once="false">
            <div className="experience-item-container">
              <div className="experience-logo-part">
                <p className="experience-item-title">Freelancer</p>
                <div className="experience-item-logo ">
                  <img src={freelancer}></img>
                </div>
              </div>
              <div className="experience-text-part">
                <p className="experience-text">
                  2019 - 2020 <br />
                  Working as a freelancer, Building responsive websites Mostly
                  front-end part
                </p>
              </div>
            </div>
          </div>

          <div className="experienceItem-reverse">
            <div
              className="experience-item-container-rev"
              data-aos="fade-left"
              once="false"
            >
              <div className="experience-logo-part">
                <div className="experience-reverse">
                  <p className="experience-item-title">FeiHua Trading LLC</p>
                  <div className="experience-item-logo ">
                    <img src={feihua}></img>
                  </div>
                </div>
              </div>
              <div className="experience-text-part-rev">
                <p className="experience-text">
                  2018 - 2020 <br />
                  Overseas market coordinator, business analyst, market research
                </p>
              </div>
            </div>
          </div>
          <div className="experienceItem" data-aos="fade-left" once="false">
            <div className="experience-item-container">
              <div className="experience-logo-part">
                <p className="experience-item-title">KRKA Pharmaceuticals</p>
                <div className="experience-item-logo ">
                  <img src={krka}></img>
                </div>
              </div>
              <div className="experience-text-part">
                <p className="experience-text">
                  2017 - 2018
                  <br /> IT Associate, Deploying software, maintaining hardware,
                  administrating database and CRM System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
