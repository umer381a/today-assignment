import React from "react";
import "./ArticalSection.scss";
import CvitaImage from "./Images/Cvita.png";
import Blog from "../Ultility/Blog.jsx";
import Category from "../Ultility/Category.jsx";
import Heading from "../Ultility/Heading.jsx";
import CultureImage from "./Images/Culture.png";
import CultureImage1 from "./Images/Culture1.png";
import CultureImage2 from "./Images/Culture2.png";
import SmallArtical from "../Ultility/smallArtical.jsx";

const ArticalSection = () => (
  <div>
    <Heading name="2 rows: 1 x 3" color="--pinkColor" />
    <div className="artical-section">
      <section className="image-section">
        <img src={CvitaImage} alt="cvita image" />
      </section>
      <section className="blog-section">
        <Category name="Travel" width="60px" />
 
        <Blog name="Cvita Doleschall" width="400px" />
      </section>
    </div>
    <div className="culture-artical">
      <SmallArtical img={CultureImage}  category="culture" width="50px" />
      <SmallArtical img={CultureImage1} category="culture" width="50px" />
      <SmallArtical img={CultureImage2} category="culture" width="50px" />
    </div>
  </div>
);

export default ArticalSection;
