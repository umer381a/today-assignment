import React from "react";
import "./StoryArticalSection.scss"
import Heading from "../Ultility/Heading.jsx";
import Blog from "../Ultility/Blog.jsx";
import Category from "../Ultility/Category.jsx";
import Glass from "./images/glass.png"

const StoryArticalSection = () => (
  <div>
    <Heading name="1 row: 2 stories with bg" color="--pinkColor" />
    <div className="story-section">
      <section className="half-full-section">
        <Category name="half full" width="60px" />
        <p className="blog">
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th
        </p>
        <Blog width="300px" />
      </section>
      <section className="glass-Section">
          <img src={Glass} alt="glass" width="300px" />
      </section>
      <section className="half-empty-section">
      <Category name="half full" width="60px" />
        <p className="blog">
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th
        </p>
        <Blog width="300px"/>
      </section>
    </div>
  </div>
);

export default StoryArticalSection;
