import React from "react";
import Heading from "../Ultility/Heading.jsx";
import Category from "../Ultility/Category.jsx";
import Blog from "../Ultility/Blog.jsx";
import "./BigArticalSection.scss";

const BigArticalSection = () => (
  <div>
    <Heading name="1 full width article" color="--orangeColor" />
    <div className="big-artical">
      <br />
      <Category name="long read" width="60px" />
      <div className="artical-body">
        <p>Meals on wheels: best in the UAE</p>
      <p className="blog">
        Louvre Abu Dhabi marks 4th anniversary with world class exhibition
        Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
        programming for all
      </p>
      <p>A. R. Oliver</p>
      </div>
    </div>
  </div>
);

export default BigArticalSection;
