import React from "react";
import Category from "./Category.jsx";
import "../HeroSection/HeroSection.scss";

const Blog = ({name, width,}) => (
  <div className="blog">
    <p style={{width}} className="blog-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio
      vel risus dignissim interdum.
    </p>
    <p className="author">{name}</p>
  </div>
);

export default Blog;
