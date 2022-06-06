import React from "react";
import "./TravelArticalSection.scss";
import Heading from "../Ultility/Heading.jsx";
import Category from "../Ultility/Category.jsx";
import Blog from "../Ultility/Blog.jsx";
import CarArticalImage from "./Images/Invertedartical.png";
import DineArticalImage from "./Images/Invertedartical 1.png";
import SeaArticalImage from "./Images/Invertedartical 2.png";

const TravelArticalSection = () => (
  <div>
    <Heading name="1 row: 2 x 1 inverted" color="--goldenColor" />
    <div className="travel-artical-section">
      <section className="car-artical-seciton">
        <div>
          <img src={CarArticalImage} alt="car"/>
          <Category name="Open House" width="70px" />
          <Blog />
        </div>
      </section>
      <section className="dine-artical-section">
        <div className="blog">
          <Category name="Open House" width="70px" />
          <Blog />
          <img src={DineArticalImage} alt="dine"/>
        </div>
      </section>
      <section className="sea-artical-section">
        <div>
          <img src={SeaArticalImage} alt="sea" />
          <Category name="Open House" width="70px" />
          <Blog />
        </div>
      </section>
    </div>
  </div>
);

export default TravelArticalSection;
