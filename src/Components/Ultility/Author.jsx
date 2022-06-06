import React from "react";
import Category from "./Category.jsx";


const Author = ({img}) => (
  <div className="author">
    <img src={img} alt="author" />
    <Category name="Omar Mukhtar" width="100px" />
    <p>
      Meals on wheels: Meals on wheels: best in the UAE best in Meals on wheels:
      best in
    </p>
    <p>U. R. Oliver</p>
  </div>
);

export default Author;
