import React from "react";
import Travel from "./Images/travels-feature.png";
import Dine from "./Images/dine-feature.png";
import OpenHouse from "./Images/open-house-feature.png";
import Category from "../Ultility/Category.jsx";
import Blog from "../Ultility/Blog.jsx";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <div className="blog-section">
      <section className="travel-post">
        <Category name="Travel" width="50px" />
        <h4 className="blog-heading">
          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
          programming for all
        </h4>
        <Blog name="U. R. Olive"/>
        <img className="travel" src={Travel} alt="Travel" />
      </section>
      <section className="dine-section">
        <Category name="Dine" width="35px" />
        <Blog name="U. R. Olive"/>
        <Category name="Dine" width="35px" />
        <Blog name="U. R. Olive"/>
        <img className="dine" src={Dine} alt="Travel" />
        <Category name="Open House" width="70px" />
        <Blog name="U. R. Olive"/>
      </section>
      <section className="open-house-section">
        <img className="open-house" src={OpenHouse} alt="Travel" />
        <Category name="Open House" width="70px" />
        <Blog name="U. R. Olive"/>
        <Category name="Open House" width="70px" />
        <Blog name="U. R. Olive"/>
        <Category name="Open House" width="70px" />
        <Blog name="U. R. Olive"/>
      </section>
    </div>
);
  }
export default HeroSection;
