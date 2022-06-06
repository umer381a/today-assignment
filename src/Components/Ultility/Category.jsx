import React from "react";
import "../HeroSection/HeroSection.scss"

const Category = ({name, width}) => (
    <div 
    style={{width}} 
    className="title">{name}</div>
     
)

export default Category
