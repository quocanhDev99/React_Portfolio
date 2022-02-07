import React from "react";
import "./about.css";
import Profile from "../../img/profile.jpg";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card_bg"></div>
        <div className="a-card">
          <img src={Profile} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Đôi chút về tôi</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          quisquam vitae tenetur tempora magni modi reprehenderit culpa soluta
          laudantium.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          quisquam vitae tenetur tempora magni modi reprehenderit culpa soluta
          laudantium impedit rem natus doloribus necessitatibus voluptatem
          dolores at, minus nostrum vel.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="awd-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Những thành tựu đạt được</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus praesentium reprehenderit magnam est nostrum
              consequatur, ratione in. Repudiandae fugit eligendi, quibusdam ut
              cum voluptatibus eaque pariatur, impedit hic inventore adipisci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
