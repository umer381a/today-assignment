import React from "react";
import "../ArticalSection/ArticalSection.scss";
import Blog from "../Ultility/Blog.jsx";
import Category from "../Ultility/Category.jsx";

const SmallArtical = ({img, width, category}) => (
    <div className="culture-artical"> 
        <section className="bike-artical-section">
          <img src={img} alt="culture" />
        </section>
        <section className="ice-artical-section">
          <Category name={category} width={width} />
          <Blog name="U. R. Olive" width="200px"/>
        </section>
    </div>
     
)

export default SmallArtical